using Server.Features.Products.Data;
using Server.Features.Products.Processes.CreateOne;
using Server.Features.Products.Processes.DeleteOne;
using Server.Features.Products.Processes.FetchAll;
using Server.Features.Products.Processes.FetchOne;
using Server.Features.Products.Processes.UpdateOne;

namespace Server.Features.Products;

public static class Products
{
	public static IServiceCollection AddProductsFeature(this IServiceCollection services)
	{
		return services
		   .AddFetchAll()
		   .AddFetchOne()
		   .AddCreateOne()
		   .AddUpdateOne()
		   .AddDeleteOne()
		   .AddDbContext<ProductContext>();
	}

	public static IEndpointRouteBuilder MapProductsFeature(this IEndpointRouteBuilder endpoints)
	{
		var group = endpoints
		   .MapGroup(nameof(Products).ToLower())
		   .WithTags(nameof(Products));

		group
		   .MapFetchAll()
		   .MapFetchOne()
		   .MapCreateOne()
		   .MapUpdateOne()
		   .MapDeleteOne();

		return endpoints;
	}

	public static async Task InitializeProductsAsync(this IServiceScope scope)
	{
		var db = scope.ServiceProvider.GetRequiredService<ProductContext>();

		var products = ProductData.GetInitialProducts();

		if (!db.Products.Any())
		{
			db.Products.AddRange(products);
			await db.SaveChangesAsync();
		}
	}
}