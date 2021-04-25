using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace backend.Repositories
{
    public class MoviesRepository
    {
        private readonly IConfiguration _config;

        public MoviesRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public int Add(CreateMovies createMovies)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO movies ( deck , description , image , name , release_date ) VALUES (@Deck , @Description ,  @Image , @Name , @Release_date) RETURNING id;";
            dbConnection.Open();
            return dbConnection.Query<GetId>(sQuery, createMovies).FirstOrDefault().Id;
        }

        public IEnumerable<Movies> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movies ;";
            dbConnection.Open();
            return dbConnection.Query<Movies>(sQuery).AsEnumerable();
        }

        public Movies Get(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movies WHERE id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Movies>(sQuery, new { Id = id }).FirstOrDefault();
        }
/*        //SELECT id FROM movies ORDER BY id DESC LIMIT 1
        public Movies GetLatest()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movies ORDER BY id DESC LIMIT 1;";
            dbConnection.Open();
            return dbConnection.Query<Movies>(sQuery).FirstOrDefault();
        }*/
        public Movies GetByName(string name)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movies WHERE name = @Name;";
            dbConnection.Open();
            return dbConnection.Query<Movies>(sQuery, new { Name = name }).FirstOrDefault();
        }

        public IEnumerable<Movies> GetPage(int page)
        {
            var limit = 50;
            var offset = limit * page;
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM movies LIMIT @Limit OFFSET @Offset";
            dbConnection.Open();
            return dbConnection.Query<Movies>(sQuery, new { Limit = limit, Offset = offset });
        }

        public Pages GetPages()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT COUNT(*) as nb_Items FROM movies;";
            dbConnection.Open();
            var t = dbConnection.Query<Pages>(sQuery).FirstOrDefault();
            return new Pages { Nb_Items = t.Nb_Items, Nb_Pages = t.Nb_Items / 50 };
        }

        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM movies WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });

        }
        public void Update(int id, CreateMovies createMovies)
        {
            Movies movies = new Movies
            {
                Id = id,
                Deck = createMovies.Deck,
                Description = createMovies.Description,
                Image = createMovies.Image,
                Name = createMovies.Name,
                Release_date = createMovies.Release_date
            };
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"UPDATE movies SET deck = @Deck , description = @Description , image = @Image , name = @Name , release_date = @Release_date WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Query(sQuery, movies);
        }
    }
}
