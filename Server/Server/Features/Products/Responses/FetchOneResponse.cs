namespace Server.Features.Products.Responses;

public record class FetchOneResponse(Guid Id, byte[] Image, string Type, string Name, decimal Price);