using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.Controllers
{
    [Route("api/[controller]")]
    public class SpotlightController : Controller
    {
        // GET api/spotlight/8014-6727-0395
        [HttpGet("{viewPin}")]
        public JsonResult Get(string viewPin)
        {
            var spotlightUrl = "https://www.spotlight.com";   
            
            var web = new HtmlWeb();
            var doc = web.Load($"{spotlightUrl}/{viewPin}");
            var photoUrl = doc.DocumentNode
                .SelectSingleNode("//div[contains(@class, 'photoWrapper')]")
                .SelectSingleNode("//a[contains(@rel, 'lightbox')]")
                .Attributes["href"]
                .Value;

            return Json(new {url = $"{spotlightUrl}{photoUrl}"});
        }
    }
}
