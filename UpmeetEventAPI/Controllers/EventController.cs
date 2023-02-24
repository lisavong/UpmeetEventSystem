using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetEventAPI.DAL;
using UpmeetEventAPI.Models;
using System.Net;


namespace UpmeetEventAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        EventRepository repo = new EventRepository();

        [HttpPost("add")]
        public Event AddEvent(string date, string name, string description, double price, string location)
        {
            Event newEvent = new Event
            {
                Date = date,
                Name = name,
                Description = description,
                Price = price,
                Location = location

            };

            return repo.AddEvent(newEvent);
        }

        [HttpGet()]
        public List<Event> GetAll()
        {
            return repo.GetAllEvents();
        }       


    }
    
}
