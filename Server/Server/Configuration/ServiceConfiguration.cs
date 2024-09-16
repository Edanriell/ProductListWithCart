using Server.Middleware;

namespace Server.Configuration;

public static class ServiceConfiguration
{
	public static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
	{
		// CORS policy
		services.AddCors(options =>
		{
			options.AddPolicy("AllowLocalhost", policy =>
			{
				policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
				   .AllowAnyMethod()
				   .AllowAnyHeader();
			});
		});

		// Register exception middleware
		services.AddSingleton<ExceptionMiddleware>();

		// Swagger
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen();
	}
}