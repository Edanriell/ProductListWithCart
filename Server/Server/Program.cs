using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.AddExceptionMapper(builder =>
{
	builder
	   .Map<DbUpdateException>()
	   .ToStatusCode(StatusCodes.Status409Conflict);

	builder
	   .Map<DbUpdateConcurrencyException>()
	   .ToStatusCode(StatusCodes.Status409Conflict);
});

builder.AddFeatures();

var app = builder.Build();
app.UseExceptionHandler();

app.UseExceptionHandler(errorApp =>
{
	errorApp.Use(async (context, next) =>
	{
		var exceptionHandlerPathFeature = context.Features
											 .Get<IExceptionHandlerFeature>() ?? throw new NotSupportedException();
		var logger = context.RequestServices
		   .GetRequiredService<ILoggerFactory>()
		   .CreateLogger("ExceptionHandler");

		var exception = exceptionHandlerPathFeature.Error;

		logger.LogWarning(
			"An exception occurred: {message}",
			exception.Message);

		await next(context);
	});
	errorApp.UseMiddleware<MyExceptionMiddleware>();
});

app.MapFeatures();

await app.SeedFeaturesAsync();

app.Run();

public partial class Program
{
}

public class MyExceptionMiddleware : IMiddleware
{
	public async Task InvokeAsync(HttpContext context, RequestDelegate next)
	{
		var exceptionHandlerPathFeature = context.Features
											 .Get<IExceptionHandlerFeature>() ?? throw new NotSupportedException();


		var exception = exceptionHandlerPathFeature.Error;
		await context.Response.WriteAsJsonAsync(new
												{
													Error = exception.Message
												});

		await next(context);
	}
}