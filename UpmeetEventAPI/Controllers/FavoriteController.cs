using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using UpmeetEventAPI.DAL;
using UpmeetEventAPI.Models;

namespace UpmeetEventAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {

        EventRepository repo = new EventRepository();

        [HttpPost("add/{userID}/{eventID}")]
        public Favorite AddFavorite(Favorite addedFavorite)
        {
            Favorite newFavorite = new Favorite
            {
                UserID= addedFavorite.UserID,
                EventID = addedFavorite.EventID

            };

            return repo.AddFavorite(newFavorite);
        }

        [HttpPost("delete/{id}")]
        public HttpResponseMessage DeleteById(int id)
        {
            try
            {
                if (repo.DeleteById(id) == true)
                {
                    return new HttpResponseMessage(HttpStatusCode.NoContent);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.ServiceUnavailable);
            }
        }

        [HttpGet("{userID}")]
        public List<Favorite> GetAll(int userID)
        {
            return repo.GetAllFavorites(userID);
        }

    }
}
