using Bimbelsharp.Area.CourseArea.Service;
using Bimbelsharp.Data.Model.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bimbelsharp.Area.CourseArea
{
    [Authorize]
    [Route("api/course")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;

        public CourseController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await _courseRepository.GetAllCoursesAsync();
            return Ok(courses);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseById(int id)
        {
            var course = await _courseRepository.GetCourseByIdAsync(id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }

        [HttpPost]
        public async Task<IActionResult> AddCourse([FromBody] Course course)
        {
            var newCourse = await _courseRepository.AddCourseAsync(course);
            return CreatedAtAction(nameof(GetCourseById), new { id = newCourse.Id }, newCourse);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateCourse(Guid id, [FromBody] Course course)
        {
            if (id != course.Id)
            {
                return BadRequest("ID tidak sesuai");
            }

            var result = await _courseRepository.UpdateCourseAsync(course);
            if (!result)
            {
                return NotFound("Error updating data");
            }
            return Ok("Data updated successfully");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteCourse(int id)
        {
            if (id==null)
            {
                return BadRequest("need and id to delete data");
            }
            var result = await _courseRepository.DeleteCourseAsync(id);
            if (!result)
            {
                return NotFound("Error deleting data");
            }
            return Ok("Data deleted successfully");
        }   
    }
}
