using FluentValidation;
using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.UpdateOne;

public class UpdateOneValidator : AbstractValidator<UpdateOneCommand>
{
	public UpdateOneValidator()
	{
		RuleFor(x => x.Product.Id)
		   .NotEmpty().WithMessage("Product ID is required.")
		   .NotEqual(Guid.Empty).WithMessage("Product ID cannot be an empty GUID.");

		RuleFor(x => x.Product.Image)
		   .NotNull().WithMessage("Product image is required.")
		   .NotEmpty().WithMessage("Product image cannot be empty.");

		RuleFor(x => x.Product.Type)
		   .NotNull().WithMessage("Product type is required.")
		   .NotEmpty().WithMessage("Product type cannot be empty.")
		   .MaximumLength(124).WithMessage("Product type cannot exceed 124 characters.");

		RuleFor(x => x.Product.Name)
		   .NotNull().WithMessage("Product name is required.")
		   .NotEmpty().WithMessage("Product name cannot be empty.")
		   .MaximumLength(76).WithMessage("Product name cannot exceed 76 characters.");

		RuleFor(x => x.Product.Price)
		   .GreaterThan(0).WithMessage("Product price must be greater than zero.");
	}
}