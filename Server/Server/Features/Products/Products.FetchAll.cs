using Microsoft.EntityFrameworkCore;
using Riok.Mapperly.Abstractions;

namespace Server.Features.Products;

public partial class Products
{
	public static IServiceCollection AddFetchAll(this IServiceCollection services)
	{
		return services
		   .AddScoped<FetchAll.Handler>()
		   .AddSingleton<FetchAll.Mapper>();
	}

	public static IEndpointRouteBuilder MapFetchAll(this IEndpointRouteBuilder endpoints)
	{
		endpoints.MapGet(
				"/",
				(FetchAll.Handler handler, CancellationToken cancellationToken)
					=> handler.HandleAsync(new FetchAll.Query(), cancellationToken)
			);
		return endpoints;
	}

	public partial class FetchAll
	{
		public record class Query;

		public record class Response(IEnumerable<ResponseProduct> Products);

		public record class ResponseProduct(int Id, byte[] Image, string Type, string Name, decimal Price);

		[Mapper]
		public partial class Mapper
		{
			public partial IEnumerable<ResponseProduct> Project(IQueryable<Product> products);
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
				await _db.Products.LoadAsync(cancellationToken);
				var products = _mapper.Project(_db.Products.OrderBy(x => x.Name));
				return new Response(products);
			}
		}
	}
}