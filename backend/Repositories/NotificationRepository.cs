using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace backend.Repositories
{
    public class NotificationRepository
    {
        private readonly IConfiguration _config;

        public NotificationRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public int Add(CreateDeleteNotifications createDeleteNotifications)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO notifications ( utilisateur_id , movie_id ) VALUES (@Utilisateur_id , @Movie_id) RETURNING id;";
            dbConnection.Open();
            return dbConnection.Query<GetId>(sQuery, createDeleteNotifications).FirstOrDefault().Id;
        }

        public IEnumerable<Notifications> GetUsersNotification(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM notifications WHERE utilisateur_id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Notifications>(sQuery, new { Id = id });
        }

        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM notifications WHERE id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });
        }
    }
}
