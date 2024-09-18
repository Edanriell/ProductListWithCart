using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Exceptions;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.UpdateOne;

public class UpdateOneHandler(ProductContext db, UpdateOneMapper mapper)
{
	private readonly ProductContext _db = db ?? throw new ArgumentNullException(nameof(db));
	private readonly UpdateOneMapper _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

	public async Task<UpdateOneResponse> HandleAsync(UpdateOneCommand command, CancellationToken cancellationToken)
	{
		var item = await _db.Products
					  .AsNoTracking()
					  .FirstOrDefaultAsync(p => p.Id == command.Id, cancellationToken);

		if (item is null)
			throw new ProductNotFoundException(command.Id);

		var itemToUpdate = item with
						   {
							   Image = command.Image ?? item.Image,
							   Type = command.Type ?? item.Type,
							   Name = command.Name ?? item.Name,
							   Price = command.Price ?? item.Price
						   };

		_db.Products.Update(itemToUpdate);
		await _db.SaveChangesAsync(cancellationToken);

		var result = _mapper.Map(itemToUpdate);
		return result;
	}
}