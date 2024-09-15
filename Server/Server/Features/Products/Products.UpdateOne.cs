using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Riok.Mapperly.Abstractions;

namespace Server.Features.Products;

public partial class Products
{
	public static IServiceCollection AddUpdateOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<UpdateOne.Handler>()
		   .AddSingleton<UpdateOne.Mapper>();
	}

	public static IEndpointRouteBuilder MapUpdateOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapPut(
				"/",
				(UpdateOne.Command command, UpdateOne.Handler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(command, cancellationToken)
			);
		return endpoints;
	}

	public partial class UpdateOne
	{
		public record class Command(Product Product);

		public record class Response(Product Product);

		[Mapper]
		public partial class Mapper
		{
			public partial Response Map(Product item);
		}

		public class Validator : AbstractValidator<Command>
		{
			public Validator()
			{
				RuleFor(x => x.Product.Id).NotNull();
				RuleFor(x => x.Product.Image).NotNull().NotEmpty();
				RuleFor(x => x.Product.Type).MaximumLength(124);
				RuleFor(x => x.Product.Name).MaximumLength(76);
				RuleFor(x => x.Product.Price).GreaterThan(0);
			}
		}

		public class Handler
		{
			private readonly ProductContext _db;
			private readonly Mapper _mapper;

			public Handler(ProductContext db, Mapper mapper)
			{
				_db = db ?? throw new ArgumentNullException(nameof(db));
				_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
			}

			public async Task<Response> HandleAsync(Command command, CancellationToken cancellationToken)
			{
				var item = await _db.Products.AsNoTracking().FirstOrDefaultAsync(p => p.Id == command.Product.Id);

				if (item is null)
					throw new ProductNotFoundException(command.Product.Id);

				var itemToUpdate = item with
								   {
									   Image = command.Product.Image, Type = command.Product.Type,
									   Name = command.Product.Name, Price = command.Product.Price
								   };

				_db.Products.Update(itemToUpdate);
				await _db.SaveChangesAsync(cancellationToken);

				var result = _mapper.Map(itemToUpdate);
				return result;
			}
		}
	}
}