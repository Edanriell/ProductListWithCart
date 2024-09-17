using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.CreateOne;

public static class Products
{
	public static IServiceCollection AddCreateOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<CreateOneHandler>()
		   .AddSingleton<CreateOneMapper>();
	}

	public static IEndpointRouteBuilder MapCreateOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapPost(
				"/",
				async (CreateOneCommand command, CreateOneHandler handler, CancellationToken cancellationToken) =>
				{
					var result = await handler.HandleAsync(command, cancellationToken);
					return TypedResults.Created($"/products/{result.Id}", result);
				}
			);
		return endpoints;
	}
}