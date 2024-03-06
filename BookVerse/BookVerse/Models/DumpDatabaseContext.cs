using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Contracts;

namespace BookVerse.Models
{
	public class DumpDatabaseContext:DbContext
	{
		public DbSet<UserModel> Users { get; set; }
		
		public DbSet<DumpModel> Dumps { get; set; }

		public DumpDatabaseContext(DbContextOptions options): base(options)
		{

		}
	}
}
