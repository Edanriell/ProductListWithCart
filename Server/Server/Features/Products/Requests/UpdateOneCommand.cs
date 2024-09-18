namespace Server.Features.Products.Requests;

public record class UpdateOneCommand(Guid Id, byte[]? Image, string? Type, string? Name, decimal? Price);