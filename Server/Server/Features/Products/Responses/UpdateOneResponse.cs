namespace Server.Features.Products.Responses;

public record class UpdateOneResponse(Guid Id, byte[] Image, string Type, string Name, decimal Price);