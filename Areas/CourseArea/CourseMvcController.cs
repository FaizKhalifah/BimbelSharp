using Bimbelsharp.Area.CourseArea.Service;
using Microsoft.AspNetCore.Mvc;

namespace Bimbelsharp.Area.CourseArea
{
    [Area("CourseArea")]
    [Route("course")]
    public class CourseMvcController : Controller
    {
        private readonly ICourseRepository _courseRepository;
        public CourseMvcController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        [HttpGet("index")]
        public async Task<IActionResult> Index()
        {
            var courses = await _courseRepository.GetCourseViewModel();
            return View(courses);  
        }
    }
}
