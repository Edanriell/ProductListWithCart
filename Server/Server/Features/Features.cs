using System.Reflection;
using FluentValidation;
using FluentValidation.AspNetCore;
using Server.Features.Products;

namespace Server.Features;

public static class Features
{
	public static IServiceCollection AddFeatures(this WebApplicationBuilder builder)
	{
		builder.AddFluentValidationEndpointFilter();

		return builder.Services
		   .AddFluentValidationAutoValidation()
		   .AddValidatorsFromAssembly(Assembly.GetExecutingAssembly())
		   .AddProductsFeature();
	}

	public static IEndpointRouteBuilder MapFeatures(this IEndpointRouteBuilder endpoints)
	{
		var group = endpoints
		   .MapGroup("/api")
		   .AddFluentValidationFilter();

		group
		   .MapProductsFeature();

		return endpoints;
	}

	public static async Task SeedFeaturesAsync(this WebApplication app)
	{
		using var scope = app.Services.CreateScope();

		await scope.InitializeProductsAsync();
	}
}