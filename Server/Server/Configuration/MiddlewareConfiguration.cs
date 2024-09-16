using Microsoft.AspNetCore.Diagnostics;
using Server.Middleware;

namespace Server.Configuration;

public static class MiddlewareConfiguration
{
	public static void ConfigureMiddleware(WebApplication app)
	{
		if (app.Environment.IsDevelopment())
		{
			app.UseSwagger();
			app.UseSwaggerUI();
		}

		app.UseHttpsRedirection();
		app.UseCors("AllowLocalhost");

		app.UseExceptionHandler(errorApp =>
		{
			errorApp.Use(async (context, next) =>
			{
				var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerFeature>()
											   ?? throw new NotSupportedException();
				var logger = context.RequestServices.GetRequiredService<ILoggerFactory>()
				   .CreateLogger("ExceptionHandler");

				var exception = exceptionHandlerPathFeature.Error;

				logger.LogWarning("An exception occurred: {message}", exception.Message);

				await next(context);
			});

			errorApp.UseMiddleware<ExceptionMiddleware>();
		});
	}
}