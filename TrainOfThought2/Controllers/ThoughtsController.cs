using TrainOfThought.DataAccess;
using TrainOfThought.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace TrainOfThought.Controllers
{
    [Route("api/thoughts")]
    [ApiController]
    public class ThoughtsController : ControllerBase
    {
        ThoughtsRepository _repo;

        public ThoughtsController(ThoughtsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAllThoughts()
        {
            return Ok(_repo.GetAllThoughts());
        }

        [HttpGet("/user/thoughts/{userId}")]
        [AllowAnonymous]
        public IActionResult GetUserThoughts(Guid userId)
        {
            return Ok(_repo.GetUserThoughts(userId));
        }


        [HttpPost]
        public IActionResult CreateThought(Thoughts newThought)
        {
            _repo.Add(newThought);
            return Created($"api/Thoughts/{newThought.Id}", newThought);
        }

        [HttpDelete("{Id}")]
        public IActionResult DeleteThoughts(Guid id)
        {
            _repo.Remove(id);

            return Ok();
        }

    }
}
