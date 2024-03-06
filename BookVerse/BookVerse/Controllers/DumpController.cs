using BookVerse.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookVerse.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class DumpController : ControllerBase
	{
		private readonly DumpDatabaseContext _context;

		public DumpController(DumpDatabaseContext context)
		{
			_context = context;
		}

		[HttpGet]
		public IActionResult Index()
		{
			var posts = _context.Dumps.ToList();
			return Ok(posts);
		}
	}
}
