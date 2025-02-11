using Microsoft.AspNetCore.Mvc;

namespace Bimbelsharp.Controllers
{
    public class BaseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
