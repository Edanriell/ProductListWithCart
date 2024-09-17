using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.FetchAll;

public class FetchAllHandler
{
	private readonly ProductContext _db;
	private readonly FetchAllMapper _mapper;

	public FetchAllHandler(ProductContext db, FetchAllMapper mapper)
	{
		_db = db ?? throw new ArgumentNullException(nameof(db));
		_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
	}

	public async Task<FetchAllResponse> HandleAsync(FetchAllQuery query, CancellationToken cancellationToken)
	{
		await _db.Products.LoadAsync(cancellationToken);
		var products = _mapper.Project(_db.Products.OrderBy(x => x.Name));
		return new FetchAllResponse(products);
	}
}