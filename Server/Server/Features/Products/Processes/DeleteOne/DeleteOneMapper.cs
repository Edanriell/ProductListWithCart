using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Requests;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.DeleteOne;

[Mapper]
public partial class DeleteOneMapper
{
	public partial Product Map(DeleteOneCommand command);
	public partial DeleteOneResponse Map(Product product);
}