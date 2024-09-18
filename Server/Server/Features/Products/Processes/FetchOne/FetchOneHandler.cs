using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Exceptions;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.FetchOne;

public class FetchOneHandler(ProductContext db, FetchOneMapper mapper)
{
	private readonly ProductContext _db = db ?? throw new ArgumentNullException(nameof(db));
	private readonly FetchOneMapper _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

	public async Task<FetchOneResponse> HandleAsync(FetchOneQuery query, CancellationToken cancellationToken)
	{
		var product = await _db.Products
						 .AsNoTracking()
						 .FirstOrDefaultAsync(
								  p => p.Id == query.ProductId,
								  cancellationToken
							  );

		if (product is null) throw new ProductNotFoundException(query.ProductId);

		return _mapper.Map(product);
	}
}