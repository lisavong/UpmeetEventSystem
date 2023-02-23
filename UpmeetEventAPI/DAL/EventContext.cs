using Microsoft.EntityFrameworkCore;
using UpmeetEventAPI.Models;

namespace UpmeetEventAPI.DAL
{
    public class EventContext : DbContext
    {
        public DbSet<EventModel> Events { get; set; }
        public DbSet<FavoriteModel> Favorite { get; set; }  

        public EventContext() { }

        public EventContext(DbContextOptions options):base(options) {      
        }

        private static IConfigurationRoot _configuration;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

                _configuration = builder.Build();
                string cnstr = _configuration.GetConnectionString("EventDB");
                optionsBuilder.UseSqlServer(cnstr);
            }
        }


    }
}
