namespace Server.Features.Products.Requests;

public record CreateOneCommand(byte[] Image, string Type, string Name, decimal Price);