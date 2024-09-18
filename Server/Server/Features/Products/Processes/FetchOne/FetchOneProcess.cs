using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.FetchOne;

public static class Products
{
	public static IServiceCollection AddFetchOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<FetchOneHandler>()
		   .AddSingleton<FetchOneMapper>();
	}

	public static IEndpointRouteBuilder MapFetchOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapGet(
				"/product/{productId}",
				([AsParameters] FetchOneQuery query, FetchOneHandler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(query, cancellationToken)
			);
		return endpoints;
	}
}