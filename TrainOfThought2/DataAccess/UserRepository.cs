using Dapper;
using TrainOfThought.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace TrainOfThought.DataAccess
{
    public class UserRepository
    {
        readonly string _connectionString;
        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("TrainOfThought");
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"select * from Users");

            return users;
        }

        internal User GetUserByFirebaseKey(string firebaseKey)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from Users where firebaseKey = @firebaseKey";

            var user = db.QuerySingleOrDefault<User>(sqlString, new { firebaseKey });

            return user;
        }

        public void AddUser(User newUser)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into Users(FirstName, LastName, FirebaseKey)
                                                output inserted.id
                                                values(@FirstName, @LastName, @FirebaseKey)";
            var id = db.ExecuteScalar<Guid>(sql, newUser);
            newUser.Id = id;
        }
    }

}