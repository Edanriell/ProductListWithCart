using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.UpdateOne;

[Mapper]
public partial class UpdateOneMapper
{
	public partial UpdateOneResponse Map(Product product);
}