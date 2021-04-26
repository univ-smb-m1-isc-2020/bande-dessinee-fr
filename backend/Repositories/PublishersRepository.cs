using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace backend.Repositories
{
    public class PublishersRepository
    {
        private readonly IConfiguration _config;

        public PublishersRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public void Add(CreatePublishers createPublishers)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO publishers (name, image, deck, description)VALUES(@Name, @Image, @Deck, @Description) RETURNING id; ";
            dbConnection.Open();
            dbConnection.Query(sQuery, createPublishers);
        }

        public IEnumerable<Publishers> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM publishers ;";
            dbConnection.Open();
            return dbConnection.Query<Publishers>(sQuery).AsEnumerable();
        }

        public Publishers Get(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM publishers WHERE id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Publishers>(sQuery, new { Id = id }).FirstOrDefault();
        }
        public Publishers GetByName(string name)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM publishers WHERE name = @Name;";
            dbConnection.Open();
            return dbConnection.Query<Publishers>(sQuery, new { Name = name }).FirstOrDefault();
        }

        public IEnumerable<Publishers> GetPage(int page)
        {
            var limit = 50;
            var offset = limit * page;
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM publishers LIMIT @Limit OFFSET @Offset";
            dbConnection.Open();
            return dbConnection.Query<Publishers>(sQuery, new { Limit = limit, Offset = offset });
        }

        public Pages GetPages()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT COUNT(*) AS nb_Items FROM publishers;";
            dbConnection.Open();
            var t = dbConnection.Query<Pages>(sQuery).FirstOrDefault();
            return new Pages { Nb_Items = t.Nb_Items, Nb_Pages = t.Nb_Items / 50 };
        }


        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM publishers WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });

        }
        public void Update(int id, CreatePublishers createPublishers)
        {
            Publishers publishers = new Publishers
            {
                Deck = createPublishers.Deck,
                Description = createPublishers.Description,
                Id = id,
                Image = createPublishers.Image,
                Name = createPublishers.Name,
            };
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"UPDATE publishers SET deck = @Deck , description = @Description , image = @Image , name = @Name WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Query(sQuery, publishers);
        }
    }
}
