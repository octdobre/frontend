using HostServer.Endpoints;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowANy",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseDefaultFiles(); // This serves the default file (like index.html)
app.UseStaticFiles();

/* Example for different values

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(
            Path.Combine(app.Environment.ContentRootPath, "root"))
    });

    app.UseDefaultFiles(new DefaultFilesOptions
    {
        DefaultFileNames = new List<string>() { "index.html" }
    });
*/

// Endpoints
app.AddWeatherApi();
app.AddMoviesApi();

app.UseRouting();

app.UseCors("AllowAny");

app.Run();