using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace backend.Repositories
{
    public class Utilisateur_PublisherRepository
    {
        private readonly IConfiguration _config;

        public Utilisateur_PublisherRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public int Add(CreateUtilisateur_Publisher createUtilisateur_Publisher)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO utilisateur_publisher ( utilisateur_id , publisher_id ) VALUES (@Utilisateur_id , @Publisher_id) RETURNING id;";
            dbConnection.Open();
            return dbConnection.Query<GetId>(sQuery, createUtilisateur_Publisher).FirstOrDefault().Id;
        }

        public IEnumerable<Utilisateur_Publisher> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur_publisher ;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur_Publisher>(sQuery).AsEnumerable();
        }
        public IEnumerable<Utilisateur_Publisher> GetByPublisher(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur_publisher WHERE publisher_id = @Publisher_id;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur_Publisher>(sQuery, new { Publisher_id = id }).AsEnumerable();
        }
        public Utilisateur_Publisher Get(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur_publisher WHERE id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur_Publisher>(sQuery, new { Id = id }).FirstOrDefault();
        }

        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM utilisateur_publisher WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });

        }
    }
}
