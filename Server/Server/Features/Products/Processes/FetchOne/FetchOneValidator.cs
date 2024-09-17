using FluentValidation;
using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.FetchOne;

public class FetchOneValidator : AbstractValidator<FetchOneQuery>
{
	public FetchOneValidator()
	{
		RuleFor(x => x.ProductId)
		   .NotEmpty().WithMessage("Product ID is required.")
		   .NotEqual(Guid.Empty).WithMessage("Product ID cannot be an empty GUID.");
	}
}