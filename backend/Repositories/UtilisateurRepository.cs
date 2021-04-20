using backend.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

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

        public Task<int> Add(CreateUtilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"INSERT INTO utilisateur ( nom , prenom , email , motdepasse ) VALUES (@Nom, @Prenom, @Email, @MotDePasse) ;";
            dbConnection.Open();
            return dbConnection.ExecuteAsync(sQuery, user);
        }

        public Task<Utilisateur> Authenticate(Utilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE email = @Email AND motdepasse = @MotDePasse ;";
            dbConnection.Open();
            return dbConnection.QueryFirstAsync<Utilisateur>(sQuery, user);
        }

        public Task<IEnumerable<Utilisateur>> GetAll()
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur ;";
            dbConnection.Open();
            return dbConnection.QueryAsync<Utilisateur>(sQuery);
        }

        public Task<Utilisateur> GetByEmail(string email)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE email = @Email ;";
            dbConnection.Open();
            return dbConnection.QueryFirstOrDefaultAsync<Utilisateur>(sQuery, new { Email = email });
        }

        public Task<Utilisateur> GetById(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"SELECT * FROM utilisateur WHERE user_id = @Id;";
            dbConnection.Open();
            return dbConnection.QueryFirstOrDefaultAsync<Utilisateur>(sQuery, new { Id = id });
        }


        public Task<int> Delete(int id)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"DELETE FROM utilisateur WHERE user_id = @Id;";
            dbConnection.Open();
            return dbConnection.ExecuteAsync(sQuery, new { Id = id });
        }

        public Task<int> Update(Utilisateur user)
        {
            using IDbConnection dbConnection = GetConnection();
            string sQuery = @"UPDATE utilisateur SET nom=@Nom,email=@Email,prenom=@Prenom,motdepasse=@MotDePasse WHERE user_id = @User_id";
            dbConnection.Open();
            return dbConnection.ExecuteAsync(sQuery, user);
        }

    }
}
