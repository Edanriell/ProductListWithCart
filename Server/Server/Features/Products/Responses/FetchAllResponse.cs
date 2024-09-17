namespace Server.Features.Products.Responses;

public record FetchAllResponse(IEnumerable<FetchAllProductsResponseProduct> Products);

public record FetchAllProductsResponseProduct(Guid Id, byte[] Image, string Type, string Name, decimal Price);