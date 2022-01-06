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
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        UserRepository _repo;

        public UserController(UserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("/user/firebasekey/{firebasekey}")]
        public IActionResult GetFbUser(string firebasekey)
        {
            return Ok(_repo.GetUserByFirebaseKey(firebasekey));
        }

        [HttpPost]
        public IActionResult CreateUser(User newUser)
        {
            _repo.AddUser(newUser);
            return Created($"api/Users/{newUser.Id}", newUser);
        }
    }
}