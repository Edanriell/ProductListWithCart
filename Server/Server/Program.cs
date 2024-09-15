using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Server.Features;

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

builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowLocalhost",
		policy =>
		{
			policy.WithOrigins("http://localhost:5173", "https://localhost:5173").AllowAnyMethod().AllowAnyHeader();
		});
});

builder.AddFeatures();

builder.Services.AddSingleton<ExceptionMiddleware>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseExceptionHandler();
app.UseHttpsRedirection();
app.UseCors("AllowLocalhost");

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
	errorApp.UseMiddleware<ExceptionMiddleware>();
});

app.MapFeatures();

await app.SeedFeaturesAsync();

app.Run();

public partial class Program
{
}

public class ExceptionMiddleware : IMiddleware
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