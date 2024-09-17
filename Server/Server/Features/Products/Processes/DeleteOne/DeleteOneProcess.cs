using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.DeleteOne;

public static class Products
{
	public static IServiceCollection AddDeleteOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<DeleteOneHandler>()
		   .AddSingleton<DeleteOneMapper>();
	}

	public static IEndpointRouteBuilder MapDeleteOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapDelete(
				"/product/{productId}",
				([AsParameters] DeleteOneCommand command, DeleteOneHandler handler,
				 CancellationToken cancellationToken)
					=> handler.HandleAsync(command, cancellationToken)
			);
		return endpoints;
	}
}