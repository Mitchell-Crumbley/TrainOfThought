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
    public class ThoughtsRepository
    {
        readonly string _connectionString;
        public ThoughtsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("TrainOfThought");
        }

        internal IEnumerable<User> GetAllThoughts()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"select * from UserThoughts");

            return users;
        }

        public IEnumerable<Thoughts> GetThoughtById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from UserThoughts where Id = @id";

            var userThoughts = db.Query<Thoughts>(sqlString, new { id });

            return userThoughts;
        }

        internal IEnumerable<Thoughts> GetUserThoughts(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from UserThoughts where userId = @id";

            var userThoughts = db.Query<Thoughts>(sqlString, new { id });

            return userThoughts;
        }


        internal void Add(Thoughts newThought)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into UserThoughts (Id,ConnectedWord, SavedWord, userId)
                output inserted.id
                values(@Id, @ConnectedWord, @SavedWord, @userId)";
            var id = db.ExecuteScalar<Guid>(sql, newThought);
            newThought.Id = id;
        }


        internal void Remove(Guid ToughtId)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"delete from UserThoughts where Id = @Id";

            db.Execute(sqlString, new { ToughtId });
        }
    }
}
