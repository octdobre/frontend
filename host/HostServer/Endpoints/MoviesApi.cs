namespace HostServer.Endpoints
{
    public static class MoviesApi
    {
        public static List<Movie> Database = new();

        public static void AddMoviesApi(this WebApplication app)
        {
            app.MapPost("/movies", (Movie movie) =>
            {
                Database.Add(movie);

                return movie;
            });

            app.MapGet("/movies", () =>
            {
                return Database;
            });
        }
    }

    public record Movie(string title, string description, int releaseYear);
}
