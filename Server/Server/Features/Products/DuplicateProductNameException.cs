using ForEvolve.ExceptionMapper;

namespace Server.Features.Products;

public class DuplicateProductNameException : ConflictException
{
	public DuplicateProductNameException(string name)
		: base($"The product '{name}' is already in the database.")
	{
	}
}