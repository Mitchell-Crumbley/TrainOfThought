using TrainOfThought.DataAccess;
using TrainOfThought.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainOfThought.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        UserRepository _repo;

        public UserController(UserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/user/firebasekey/{firebasekey}")]
        public IActionResult GetFbUser(string firebasekey)
        {
            return Ok(_repo.GetUserByFirebaseKey(firebasekey));
        }

        [HttpPost("/user")]
        public IActionResult CreateUser(User newUser)
        {
            _repo.AddUser(newUser);
            return Created($"/user/{newUser.Id}", newUser);
        }
    }
}