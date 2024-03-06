using System.ComponentModel.DataAnnotations;

namespace BookVerse.Models
{
	public class UserModel
	{
		[Key]
		public int userID { get; set; }
		public string userName { get; set; }
		public string password { get; set; }
		public string email { get; set; }


	}
}
