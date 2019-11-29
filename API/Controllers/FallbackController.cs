using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace BraianBaldino_Solstice.Controllers
{
    
    public class FallbackController : Controller
    {
        /// <summary>
        /// Controller used in 'Startup.cs'. It allows the SPA to be render properly by the API.
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}
