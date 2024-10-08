using ForEvolve.ExceptionMapper;

namespace Server.Features.Products.Exceptions;

public class ProductNotFoundException : NotFoundException
{
	public ProductNotFoundException(Guid productId)
		: base($"The product '{productId}' was not found.")
	{
	}
}