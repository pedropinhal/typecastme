using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.Controllers
{
    [Route("api/[controller]")]
    public class HealthController : Controller
    {
        // GET api/health/check
        [HttpGet("check")]
        public string Get()
        {
           return "alive!";
        }
    }
}
