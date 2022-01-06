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
    public class RequestsRepository
    {
        readonly string _connectionString;
        public RequestsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("TrainOfThought");
        }

        public IEnumerable<Requests> GetRequestsId(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from UserRequests where requestId = @id";

            var userRequests = db.Query<Requests>(sqlString, new { id });

            return userRequests;
        }

        internal IEnumerable<Requests> GetUserRequests(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select * from UserRequests where userId = @id";

            var userRequests = db.Query<Requests>(sqlString, new { id });

            return userRequests;
        }


        internal void Add(Requests newRequest)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into UserRequests(RequestedWord, ConnectedWord, WordType, userId)
                                                output inserted.requestId
                                                values(@RequestedWord, @ConnectedWord, @WordType, @userId)";
            var id = db.ExecuteScalar<Guid>(sqlString, newRequest);
            newRequest.requestId = id;
        }


        internal void Remove(Guid RequestId)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"delete from User_Requests where RequestId = @RequestId";

            db.Execute(sqlString, new { RequestId });
        }

        //internal IEnumerable<Fonts> GetFontsByCategory(Guid categoryId)
        //{
        //    using var db = new SqlConnection(_connectionString);

        //    var sqlString = @"select f.* from categoriesFonts cf 
        //                                    join fonts f 
        //                                    on cf.fontId = f.id 
        //                                    where cf.categoryId = @categoryId";
        //    var categoryFonts = db.Query<Fonts>(sqlString, new { categoryId });

        //    return categoryFonts;
        //}

    }
}