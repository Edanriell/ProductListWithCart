using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Riok.Mapperly.Abstractions;

namespace Server.Features.Products;

public partial class Products
{
	public static IServiceCollection AddDeleteOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<DeleteOne.Handler>()
		   .AddSingleton<DeleteOne.Mapper>();
	}

	public static IEndpointRouteBuilder MapDeleteOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapDelete(
				"/product/{productId}",
				([AsParameters] DeleteOne.Command command, DeleteOne.Handler handler,
				 CancellationToken cancellationToken)
					=> handler.HandleAsync(command, cancellationToken)
			);
		return endpoints;
	}

	public partial class DeleteOne
	{
		public record class Command(Guid ProductId);

		public record class Response(Guid ProductId);

		[Mapper]
		public partial class Mapper
		{
			public partial Product Map(Command item);
			public partial Response Map(Product item);
		}

		public class Validator : AbstractValidator<Command>
		{
			public Validator()
			{
				RuleFor(x => x.ProductId).NotNull().NotEmpty();
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
				var product = await _db.Products.FirstOrDefaultAsync(x => x.Id == command.ProductId, cancellationToken);

				if (product is null)
					throw new ProductNotFoundException(command.ProductId);

				_db.Products.Remove(product);
				await _db.SaveChangesAsync(cancellationToken);
				var result = _mapper.Map(product);
				return result;
			}
		}
	}
}