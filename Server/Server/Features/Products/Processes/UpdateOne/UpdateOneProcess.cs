using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.UpdateOne;

public static class Products
{
	public static IServiceCollection AddUpdateOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<UpdateOneHandler>()
		   .AddSingleton<UpdateOneMapper>();
	}

	public static IEndpointRouteBuilder MapUpdateOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapPut(
				"/",
				(UpdateOneCommand command, UpdateOneHandler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(command, cancellationToken)
			);
		return endpoints;
	}
}