using Microsoft.AspNetCore.Diagnostics;

namespace Server.Middleware;

public class ExceptionMiddleware : IMiddleware
{
	public async Task InvokeAsync(HttpContext context, RequestDelegate next)
	{
		var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerFeature>()
									   ?? throw new NotSupportedException();

		var exception = exceptionHandlerPathFeature.Error;
		await context.Response.WriteAsJsonAsync(new { Error = exception.Message });

		await next(context);
	}
}