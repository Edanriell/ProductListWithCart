namespace Server.Features.Products.Responses;

public record class FetchOneResponse(int Id, byte[] Image, string Type, string Name, decimal Price);