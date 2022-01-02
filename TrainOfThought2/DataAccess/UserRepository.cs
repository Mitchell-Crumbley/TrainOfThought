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

        internal User GetUserByFirebaseKey(string firebaseKey)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from users where firebaseKey = @firebaseKey";

            var user = db.QuerySingleOrDefault<User>(sqlString, new { firebaseKey });

            return user;
        }

        internal void AddUser(User newUser)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into users(firstName, LastName, firebaseKey)
                                                output inserted.id
                                                values(@firstName, @LastName, @firebaseKey)";
            var id = db.ExecuteScalar<Guid>(sqlString, newUser);
            newUser.Id = id;
        }
    }

}