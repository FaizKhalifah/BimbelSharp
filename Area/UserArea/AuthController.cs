using Bimbelsharp.Area.UserArea.Service;
using Bimbelsharp.Data.Model;
using Bimbelsharp.Data.Model.DTO;
using Bimbelsharp.Data.Model.Entities;
using Bimbelsharp.Utilites;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Bimbelsharp.Area.UserArea
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController:ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public AuthController(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO request)
        {
            if (request == null)
            {
                return BadRequest("Tidak ada data user.");
            }

            //var existingUser = await _userRepository.GetUserByEmailAsync(request.Email);
            //if (existingUser != null)
            //{
            //    return BadRequest("Email sudah digunakan.");
            //}

            User newUser;
            switch (request.Role)
            {
                case Role.Admin:
                    newUser = new Admin();
                    break;
                case Role.Teacher:
                    newUser = new Teacher();
                    break;
                case Role.Student:
                    newUser = new Student();
                    break;
                default:
                    return BadRequest("Role tidak valid.");
            }

            // Mengisi data user
            newUser.FullName = request.FullName;
            newUser.Email = request.Email;
            newUser.HashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

            await _userRepository.AddUserAsync(newUser);

            return Ok("Registrasi berhasil.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO request)
        {
            User? user = null;

            // Coba cari user di masing-masing tabel
            var admin = await _userRepository.GetAdminByEmailAsync(request.Email);
            if (admin != null) user = admin;

            if (user == null)
            {
                var teacher = await _userRepository.GetTeacherByEmailAsync(request.Email);
                if (teacher != null) user = teacher;
            }

            if (user == null)
            {
                var student = await _userRepository.GetStudentByEmailAsync(request.Email);
                if (student != null) user = student;
            }

            if (user == null)
            {
                return Unauthorized("Email tidak ditemukan.");
            }

            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.HashedPassword))
            {
                return Unauthorized("Password salah.");
            }

            var token = JwtHelper.GenerateJwtToken(user, _configuration);
            return Ok(new { token, role = user.Role.ToString() });
        }





    }
}
