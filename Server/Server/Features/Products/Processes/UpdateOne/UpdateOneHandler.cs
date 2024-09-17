using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Exceptions;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.UpdateOne;

public class UpdateOneHandler
{
	private readonly ProductContext _db;
	private readonly UpdateOneMapper _mapper;

	public UpdateOneHandler(ProductContext db, UpdateOneMapper mapper)
	{
		_db = db ?? throw new ArgumentNullException(nameof(db));
		_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
	}

	public async Task<UpdateOneResponse> HandleAsync(UpdateOneCommand command, CancellationToken cancellationToken)
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