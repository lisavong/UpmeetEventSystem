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
        public Event AddEvent(Event addedEvent)
        {
            Event newEvent = new Event
            {
                Date = addedEvent.Date,
                Name = addedEvent.Name,
                Description = addedEvent.Description,
                Price = addedEvent.Price,
                Location = addedEvent.Location

            };

            return repo.AddEvent(newEvent);
        }

        [HttpGet()]
        public List<Event> GetAll()
        {
            return repo.GetAllEvents();
        }

    [HttpGet("{eventID}")]
    public Event GetById(int eventID)
    {
      return repo.FindEventById(eventID);
    }


  }
    
}
