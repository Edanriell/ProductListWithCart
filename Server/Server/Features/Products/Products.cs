using Microsoft.EntityFrameworkCore;

namespace Server.Features.Products;

public static partial class Products
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

	public static async Task SeedProductsAsync(this IServiceScope scope)
	{
		var db = scope.ServiceProvider.GetRequiredService<ProductContext>();

		var products = new List<Product>
					   {
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/waffle-with-berries.jpg"),
							   Name = "Waffle with Berries",
							   Type = "Waffle",
							   Price = 6.5m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/vanilla-bean-creme-brulee.jpg"),
							   Name = "Vanilla Bean Crème Brûlée",
							   Type = "Crème Brûlée",
							   Price = 7.0m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/macaron-mix-of-five.jpg"),
							   Name = "Macaron Mix of Five",
							   Type = "Macaron",
							   Price = 8.0m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/classic-tiramisu.jpg"),
							   Name = "Classic Tiramisu",
							   Type = "Tiramisu",
							   Price = 5.5m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/pistachio-baklava.jpg"),
							   Name = "Pistachio Baklava",
							   Type = "Baklava",
							   Price = 4.0m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/lemon-meringue-pie.jpg"),
							   Name = "Lemon Meringue Pie",
							   Type = "Pie",
							   Price = 5.0m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/red-velvet-cake.jpg"),
							   Name = "Red Velvet Cake",
							   Type = "Cake",
							   Price = 4.5m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/salted-caramel-brownie.jpg"),
							   Name = "Salted Caramel Brownie",
							   Type = "Brownie",
							   Price = 5.5m
						   },
						   new()
						   {
							   Image = LoadImage("wwwroot/images/products/vanilla-panna-cotta.jpg"),
							   Name = "Vanilla Panna Cotta",
							   Type = "Panna Cotta",
							   Price = 6.5m
						   }
					   };

		if (!db.Products.Any())
		{
			db.Products.AddRange(products);
			await db.SaveChangesAsync();
		}
	}

	private static byte[] LoadImage(string path)
	{
		if (File.Exists(path)) return File.ReadAllBytes(path);
		return new byte[0]; // Empty byte array if image not found
	}

	public record class Product
	{
		public Guid Id { get; set; }
		public byte[] Image { get; set; }
		public string Type { get; set; }
		public string Name { get; set; }
		public decimal Price { get; set; }
	}

	public class ProductContext(DbContextOptions<ProductContext> options, IConfiguration? configuration)
		: DbContext(options)
	{
		public DbSet<Product> Products => Set<Product>();

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Product>(entity =>
			{
				entity.ToTable("Products");
				entity.HasKey(p => p.Id);

				entity.Property(p => p.Id)
				   .HasColumnName(nameof(Product.Id))
				   .HasColumnType("uuid")
				   .HasDefaultValueSql("uuid_generate_v4()");

				entity.Property(p => p.Image)
				   .HasColumnName(nameof(Product.Image))
				   .HasColumnType("bytea")
				   .IsRequired();

				entity.Property(p => p.Type)
				   .HasColumnName(nameof(Product.Type))
				   .HasColumnType("varchar")
				   .HasMaxLength(124)
				   .IsRequired();

				entity.Property(p => p.Name)
				   .HasColumnName(nameof(Product.Name))
				   .HasColumnType("varchar")
				   .HasMaxLength(76)
				   .IsRequired();

				entity.Property(p => p.Price)
				   .HasColumnName(nameof(Product.Price))
				   .HasColumnType("numeric")
				   .IsRequired();
			});
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			if (!optionsBuilder.IsConfigured)
				optionsBuilder.UseNpgsql(configuration?.GetConnectionString("DefaultConnection"));
		}
	}
}