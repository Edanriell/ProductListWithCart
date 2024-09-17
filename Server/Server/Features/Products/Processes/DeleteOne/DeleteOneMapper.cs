using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.DeleteOne;

[Mapper]
public partial class DeleteOneMapper
{
	public DeleteOneResponse Map(Product product)
	{
		return new DeleteOneResponse(product.Id);
	}
}