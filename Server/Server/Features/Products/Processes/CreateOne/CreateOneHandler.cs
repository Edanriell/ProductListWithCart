using Microsoft.EntityFrameworkCore;
using Server.Features.Products.Data;
using Server.Features.Products.Exceptions;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.CreateOne;

public class CreateOneHandler
{
	private readonly ProductContext _db;
	private readonly CreateOneMapper _mapper;

	public CreateOneHandler(ProductContext db, CreateOneMapper mapper)
	{
		_db = db ?? throw new ArgumentNullException(nameof(db));
		_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
	}

	public async Task<CreateOneResponse> HandleAsync(CreateOneCommand command, CancellationToken cancellationToken)
	{
		var itemExists = await _db.Products.AnyAsync(p => p.Name == command.Name, cancellationToken);

		if (itemExists) throw new DuplicateProductNameException(command.Name);

		var product = _mapper.Map(command);
		_db.Products.Add(product);
		await _db.SaveChangesAsync(cancellationToken);

		return _mapper.Map(product);
	}
}