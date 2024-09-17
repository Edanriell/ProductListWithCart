using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.CreateOne;

[Mapper]
public partial class CreateOneMapper
{
	public partial Product Map(CreateOneCommand command);
	public partial CreateOneResponse Map(Product product);
}