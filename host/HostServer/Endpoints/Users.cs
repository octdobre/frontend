namespace HostServer.Endpoints
{
    public static class UserApi
    {
        public static List<User> Database = new();

        public static void AddUserApi(this WebApplication app)
        {
            app.MapPost("/users", (User user) =>
            {
                Database.Add(user);

                return user;
            });

            app.MapGet("/users", () =>
            {
                return Database;
            });
        }
    }

    public record User(
        string name,
        string email,
        string telephoneNumber,
        DateTime birthDate,
        DateTime registeredDateTime,
        int Age,
        int AgeRange,
        int favouriteColor);
}
