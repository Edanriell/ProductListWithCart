namespace Server.Features.Products;

public static class Products
{
	public record class Product(string id, string Image, string type, string name, decimal price);

	public class ProductContext : DbContext
	{
		public ProductContext(DbContextOptions<ProductContext> options)
			: base(options)
		{
		}

		public DbSet<Product> Products => Set<Product>();
	}
}

// Continue REPR