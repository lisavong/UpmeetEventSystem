using Microsoft.EntityFrameworkCore;
using UpmeetEventAPI.Models;

namespace UpmeetEventAPI.DAL
{
    public class EventRepository
    {
        private EventContext _dbContext = new EventContext();

        public Event AddEvent(Event eventToAdd)
        {
            _dbContext.Events.Add(eventToAdd);
            _dbContext.SaveChanges();
            return GetLatestEvent();
        }

        public Favorite AddFavorite(Favorite favoriteToAdd)
        {
            _dbContext.Favorite.Add(favoriteToAdd);
            _dbContext.SaveChanges();
            return GetLatestFavorite();
        }

        private Event GetLatestEvent()
        {
            return _dbContext.Events.OrderByDescending(x => x.EventID).FirstOrDefault();
        }

        private Favorite GetLatestFavorite()
        {
            return _dbContext.Favorite.OrderByDescending(x => x.Id).FirstOrDefault();
        }

        public bool DeleteById(int id)
        {
            Favorite favoriteEvent = FindById(id);
            if (favoriteEvent == null)
            {
                return false;
            }
            _dbContext.Favorite.Remove(favoriteEvent);
            _dbContext.SaveChanges();
            return true;
        }

        public Favorite FindById(int id)
        {
            // AsNoTracking will not lock the ID allowing updating it after finding it
            return _dbContext.Favorite.AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

        public List<Event> GetAllEvents()
        {
            return _dbContext.Events.ToList();
        }

        public List<Favorite> GetAllFavorites(int userID)
        {
            return _dbContext.Favorite.Where(x => x.UserID == userID).ToList();
        }

    }

}
