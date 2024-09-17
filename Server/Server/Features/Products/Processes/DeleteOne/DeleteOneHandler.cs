using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Exceptions;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.DeleteOne;

public class DeleteOneHandler
{
	private readonly ProductContext _db;
	private readonly DeleteOneMapper _mapper;

	public DeleteOneHandler(ProductContext db, DeleteOneMapper mapper)
	{
		_db = db ?? throw new ArgumentNullException(nameof(db));
		_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
	}

	public async Task<DeleteOneResponse> HandleAsync(DeleteOneCommand command, CancellationToken cancellationToken)
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