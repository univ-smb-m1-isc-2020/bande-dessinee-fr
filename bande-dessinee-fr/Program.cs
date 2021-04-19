using Dapper;
using FetchDataAndPostToPostgres.Models;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace FetchDataAndPostToPostgres
{
    class Program
    {
        static void Main(string[] args)
        {
            _ = args;

            var cs = "Host=db;Username=root;Password=toor;Database=db_bande_dessinee_fr;";

            using var connection = new NpgsqlConnection(cs);
            var sql = "DROP TABLE IF EXISTS users;";
            connection.Execute(sql);

            sql = "CREATE TABLE IF NOT EXISTS users (" +
                "user_id serial PRIMARY KEY," +
                "username VARCHAR(50) UNIQUE NOT NULL," +
                "password VARCHAR(255) NOT NULL," +
                "email VARCHAR(255) UNIQUE NOT NULL);";
            connection.Execute(sql);

            sql = "INSERT INTO users( username, password , email ) VALUES(@Username, @Password, @Email); ";
            Users user = new Users()
            {
                Email = "sylejmani.visar.97@gmail.com",
                Password = "motdepasse",
                Username = "Cali"
            };

            connection.Execute(sql, user);
            var users = connection.Query<Users>("SELECT * FROM users");
            foreach (Users user1 in users)
            {
                Console.WriteLine(user1.Email);
            }
            //connection.Query<Users>("SELECT * FROM users");

            /*HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://comicvine.gamespot.com/api/movies?format=json&api_key=f9ed702afacfc24652dfe6f93b7e6eae5c8402d1&limit=1&offset=0");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseBody);*/
        }
    }
}