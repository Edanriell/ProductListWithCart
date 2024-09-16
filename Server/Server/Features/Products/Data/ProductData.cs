using Server.Features.Products.Entities;

namespace Server.Features.Products.Data;

public static class ProductData
{
	public static List<Product> GetInitialProducts()
	{
		return new List<Product>()
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
	}

	private static byte[] LoadImage(string path)
	{
		return File.Exists(path) ? File.ReadAllBytes(path) : Array.Empty<byte>();
	}
}