using System;
using System.Collections.Generic;
using System.Text;

namespace FetchDataAndPostToPostgres.Models
{
    class Users
    {
        public int User_id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
