using FluentValidation;
using Server.Features.Products.Requests;

namespace Server.Features.Products.Processes.UpdateOne;

public class UpdateOneValidator : AbstractValidator<UpdateOneCommand>
{
	public UpdateOneValidator()
	{
		RuleFor(x => x.Id)
		   .NotEmpty().WithMessage("Product ID is required.")
		   .NotEqual(Guid.Empty).WithMessage("Product ID cannot be an empty GUID.");

		When(x => x.Image != null, () =>
		{
			RuleFor(x => x.Image)
			   .Must(image => image.Length <= 5242880) // 5MB in bytes
			   .WithMessage("Product image cannot exceed 5MB.");
		});

		When(x => x.Type != null, () =>
		{
			RuleFor(x => x.Type)
			   .MaximumLength(124).WithMessage("Product type cannot exceed 124 characters.");
		});

		When(x => x.Name != null, () =>
		{
			RuleFor(x => x.Name)
			   .MaximumLength(76).WithMessage("Product name cannot exceed 76 characters.");
		});

		When(x => x.Price != null, () =>
		{
			RuleFor(x => x.Price)
			   .GreaterThan(0).WithMessage("Product price must be greater than zero.");
		});
	}
}