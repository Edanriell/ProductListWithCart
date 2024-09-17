using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.FetchAll;

public static class Products
{
	public static IServiceCollection AddFetchAll(this IServiceCollection services)
	{
		return services
		   .AddScoped<FetchAllHandler>()
		   .AddSingleton<FetchAllMapper>();
	}

	public static IEndpointRouteBuilder MapFetchAll(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapGet(
				"/",
				(FetchAllHandler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(new FetchAllQuery(), cancellationToken)
			);
		return endpoints;
	}
}