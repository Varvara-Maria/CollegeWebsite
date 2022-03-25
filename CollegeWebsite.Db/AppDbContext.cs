using CollegeWebsite.Db.Entities;
using Microsoft.EntityFrameworkCore;

namespace CollegeWebsite.Db;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=127.0.0.1;Database=CollegeCHNU;user id = sa; password = Maks010104;MultipleActiveResultSets=true")
            .LogTo(Console.WriteLine);
    }

    public DbSet<News> News { get; set; }

}