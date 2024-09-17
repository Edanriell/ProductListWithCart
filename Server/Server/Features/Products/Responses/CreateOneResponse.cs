namespace Server.Features.Products.Responses;

public record CreateOneResponse(int Id, byte[] Image, string Type, string Name, decimal Price);