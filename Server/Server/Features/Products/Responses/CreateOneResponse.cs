namespace Server.Features.Products.Responses;

public record CreateOneResponse(Guid Id, byte[] Image, string Type, string Name, decimal Price);