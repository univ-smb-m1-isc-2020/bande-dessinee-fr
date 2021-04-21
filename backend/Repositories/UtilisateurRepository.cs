using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace backend.Repositories
{
    public class UtilisateurRepository
    {

        private readonly IConfiguration _config;

        public UtilisateurRepository(IConfiguration config)
        {
            _config = config;
        }

        public IDbConnection GetConnection() => new NpgsqlConnection(_config.GetConnectionString("Default"));

        public void Add(CreateUtilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO utilisateur ( nom , prenom , email , motdepasse ) VALUES (@Nom, @Prenom, @Email, @MotDePasse) ;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, user);
        }

        public Utilisateur Authenticate(Utilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE email = @Email AND motdepasse = @MotDePasse ;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur>(sQuery, user).FirstOrDefault();
        }

        public IEnumerable<Utilisateur> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur ;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur>(sQuery).AsEnumerable();
        }

        public Utilisateur GetByEmail(string email)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE email = @Email ;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur>(sQuery, new { Email = email }).FirstOrDefault();
        }

        public Utilisateur GetById(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE user_id = @Id;";
            dbConnection.Open();
            return dbConnection.Query<Utilisateur>(sQuery, new { Id = id }).FirstOrDefault();
        }


        public void Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM utilisateur WHERE user_id = @Id;";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });

        }
        public void Update(Utilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"UPDATE utilisateur SET nom=@Nom,email=@Email,prenom=@Prenom,motdepasse=@MotDePasse WHERE user_id` = @User_id";
            dbConnection.Open();
            dbConnection.Query(sQuery, user);
        }

    }
}
