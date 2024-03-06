using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookVerse.Models
{
	public class DumpModel { 


		[Key]
		public int dumpID {  get; set; }
		public string dumpTitle { get; set; }
		public string dumpContent { get; set; }

		[ForeignKey("User")]
		public int userId { get; set; }
		public UserModel User { get; set; }
	}
}

