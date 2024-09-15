using Microsoft.EntityFrameworkCore;
using Riok.Mapperly.Abstractions;

namespace Server.Features.Products;

public partial class Products
{
	public static IServiceCollection AddFetchOne(this IServiceCollection services)
	{
		return services
		   .AddScoped<FetchOne.Handler>()
		   .AddSingleton<FetchOne.Mapper>();
	}

	public static IEndpointRouteBuilder MapFetchOne(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapGet(
				"/{ProductId}",
				([AsParameters] FetchOne.Query query, FetchOne.Handler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(query, cancellationToken)
			);
		return endpoints;
	}

	public partial class FetchOne
	{
		public record class Query(Guid ProductId);

		public record class Response(int Id, byte[] Image, string Type, string Name, decimal Price);

		[Mapper]
		public partial class Mapper
		{
			public partial Response Map(Product product);
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

			public async Task<Response> HandleAsync(Query query, CancellationToken cancellationToken)
			{
				var product = await _db.Products.FirstOrDefaultAsync(
									  p => p.Id == query.ProductId,
									  cancellationToken
								  );
				if (product is null) throw new ProductNotFoundException(query.ProductId);
				return _mapper.Map(product);
			}
		}
	}
}