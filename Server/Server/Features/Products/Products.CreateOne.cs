using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Riok.Mapperly.Abstractions;

namespace Server.Features.Products;

public partial class Products
{
	public static IServiceCollection AddCreateOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<CreateOne.Handler>()
		   .AddSingleton<CreateOne.Mapper>();
	}

	public static IEndpointRouteBuilder MapCreateOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapPost(
				"/",
				async (CreateOne.Command command, CreateOne.Handler handler, CancellationToken cancellationToken) =>
				{
					var result = await handler.HandleAsync(command, cancellationToken);
					return TypedResults.Created($"/products/{result.Id}", result);
				}
			);
		return endpoints;
	}

	public partial class CreateOne
	{
		public record class Command(
			byte[] Image,
			string Type,
			string Name,
			decimal Price);

		public record class Response(int Id, byte[] Image, string Type, string Name, decimal Price);

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
				RuleFor(x => x.Image).NotNull().NotEmpty();
				RuleFor(x => x.Type).MaximumLength(124);
				RuleFor(x => x.Name).MaximumLength(76);
				RuleFor(x => x.Price).GreaterThan(0);
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
				var itemExists = await _db.Products.AnyAsync(
									 p => p.Name == command.Name, cancellationToken);

				if (itemExists) throw new DuplicateProductNameException(command.Name);

				var item = _mapper.Map(command);
				_db.Products.Add(item);
				await _db.SaveChangesAsync(cancellationToken);
				var result = _mapper.Map(item);
				return result;
			}
		}
	}
}