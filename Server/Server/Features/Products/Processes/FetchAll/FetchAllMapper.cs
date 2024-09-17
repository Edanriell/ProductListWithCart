using Riok.Mapperly.Abstractions;
using Server.Features.Products.Entities;
using Server.Features.Products.Responses;

namespace Server.Features.Products.Processes.FetchAll;

[Mapper]
public partial class FetchAllMapper
{
	public partial IEnumerable<FetchAllProductsResponseProduct> Project(IQueryable<Product> products);
}