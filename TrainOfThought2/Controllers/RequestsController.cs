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
    public class RequestsController : ControllerBase
    {
        RequestsRepository _repo;

        public RequestsController(RequestsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("/users/requests/{userId}")]
        [AllowAnonymous]
        public IActionResult GetUserRequests(Guid userId)
        {
            return Ok(_repo.GetUserRequests(userId));
        }

 
        [HttpPost("/requests/post")]
        public IActionResult CreateRequest(Requests newRequest)
        {
            _repo.Add(newRequest);
            return Created($"/user/{newRequest.requestId}", newRequest);
        }

        [HttpDelete("/requests/delete/{id}")]
        public IActionResult DeleteRequests(Guid id)
        {
            _repo.Remove(id);

            return Ok();
        }

    }
}
