using Server.Configuration;
using Server.Features;

var builder = WebApplication.CreateBuilder(args);

// Add services
ServiceConfiguration.ConfigureServices(builder.Services, builder.Configuration);

// Add exception mappings
ExceptionMappingConfiguration.ConfigureExceptionMappings(builder);

// Build the app
var app = builder.Build();

// Configure middleware and features
MiddlewareConfiguration.ConfigureMiddleware(app);

// Map the features (endpoints)
app.MapFeatures();

await app.SeedFeaturesAsync();

app.Run();

public partial class Program
{
}