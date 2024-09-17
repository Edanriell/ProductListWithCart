using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.FetchOne;

[Mapper]
public partial class FetchOneMapper
{
	public partial FetchOneResponse Map(Product product);
}