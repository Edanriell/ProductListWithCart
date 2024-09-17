using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Entities;

namespace Server.Features.Products.Data;

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