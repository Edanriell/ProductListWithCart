using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.FetchAll;

public class FetchAllHandler(ProductContext db, FetchAllMapper mapper)
{
	private readonly ProductContext _db = db ?? throw new ArgumentNullException(nameof(db));
	private readonly FetchAllMapper _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

	public async Task<FetchAllResponse> HandleAsync(FetchAllQuery query, CancellationToken cancellationToken)
	{
		var products = await _db.Products
						  .AsNoTracking()
						  .OrderBy(x => x.Name)
						  .ToListAsync(cancellationToken);

		var responseProducts = _mapper.Project(products);

		return new FetchAllResponse(responseProducts);
	}
}