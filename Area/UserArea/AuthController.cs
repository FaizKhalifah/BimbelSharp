using Bimbelsharp.Area.UserArea.Service;
using Bimbelsharp.Data.Model;
using Bimbelsharp.Data.Model.DTO;
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
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("Tidak ada ada user");
            }
            var existingUser = await _userRepository.GetUserByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return BadRequest("Email sudah digunakan.");
            }

            user.HashedPassword = BCrypt.Net.BCrypt.HashPassword(user.HashedPassword);
            await _userRepository.AddUserAsync(user);

            return Ok("Registrasi berhasil.");
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO request)
        {
            var user = await _userRepository.GetUserByEmailAsync(request.Email);
            if (user == null)
            {
                return Unauthorized("Email not found");
            }
            if(!BCrypt.Net.BCrypt.Verify(request.Password, user.HashedPassword))
            {
                return Unauthorized("Wring password");
            }
            var token = JwtHelper.GenerateJwtToken(user, _configuration);
            return Ok(new {token});

        }


    }
}
