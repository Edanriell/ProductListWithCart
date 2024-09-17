using FluentValidation;
using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.CreateOne;

public class CreateOneValidator : AbstractValidator<CreateOneCommand>
{
	public CreateOneValidator()
	{
		RuleFor(x => x.Image)
		   .NotNull().WithMessage("Product image is required.")
		   .NotEmpty().WithMessage("Product image cannot be empty.");

		RuleFor(x => x.Type)
		   .NotNull().WithMessage("Product type is required.")
		   .NotEmpty().WithMessage("Product type cannot be empty.")
		   .MaximumLength(124).WithMessage("Product type cannot exceed 124 characters.");

		RuleFor(x => x.Name)
		   .NotNull().WithMessage("Product name is required.")
		   .NotEmpty().WithMessage("Product name cannot be empty.")
		   .MaximumLength(76).WithMessage("Product name cannot exceed 76 characters.");

		RuleFor(x => x.Price)
		   .GreaterThan(0).WithMessage("Product price must be greater than zero.");
	}
}