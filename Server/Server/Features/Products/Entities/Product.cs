namespace Server.Features.Products.Entities;

public record class Product
{
	public Guid Id { get; init; }
	public byte[] Image { get; set; } = Array.Empty<byte>();
	public string Type { get; set; } = string.Empty;
	public string Name { get; set; } = string.Empty;
	public decimal Price { get; set; }
}