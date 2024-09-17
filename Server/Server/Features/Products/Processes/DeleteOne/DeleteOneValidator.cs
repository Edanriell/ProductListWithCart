using FluentValidation;
using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.DeleteOne;

public class DeleteOneValidator : AbstractValidator<DeleteOneCommand>
{
	public DeleteOneValidator()
	{
		RuleFor(x => x.ProductId)
		   .NotEmpty().WithMessage("Product ID is required.")
		   .NotEqual(Guid.Empty).WithMessage("Product ID cannot be an empty GUID.");
	}
}