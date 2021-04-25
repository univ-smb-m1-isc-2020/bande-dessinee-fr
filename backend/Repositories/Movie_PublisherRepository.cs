using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace backend.Repositories
{
    public class Movie_PublisherRepository
    {
        private readonly IConfiguration _config;

        public Movie_PublisherRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public int Add(CreateMovie_Publisher createMovie_Publisher)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO movie_publisher ( movie_id , publisher_id ) VALUES (@Movie_id , @Publisher_id) RETURNING id;";
            dbConnection.Open();
            return dbConnection.Query<GetId>(sQuery, createMovie_Publisher).FirstOrDefault().Id;
        }

        public IEnumerable<Movie_Publisher> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movie_publisher ;";
            dbConnection.Open();
            return dbConnection.Query<Movie_Publisher>(sQuery).AsEnumerable();
        }

        public Movie_Publisher Get(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movie_publisher WHERE id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Movie_Publisher>(sQuery, new { Id = id }).FirstOrDefault();
        }

        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM movie_publisher WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });

        }
    }
}
