using Microsoft.EntityFrameworkCore;

namespace Server.Configuration;

public static class ExceptionMappingConfiguration
{
	public static void ConfigureExceptionMappings(WebApplicationBuilder builder)
	{
		builder.AddExceptionMapper(options =>
		{
			options.Map<DbUpdateException>().ToStatusCode(StatusCodes.Status409Conflict);
			options.Map<DbUpdateConcurrencyException>().ToStatusCode(StatusCodes.Status409Conflict);
		});
	}
}