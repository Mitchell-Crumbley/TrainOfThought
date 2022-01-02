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

            var sqlString = @"select * from Requests where requestId = @id";

            var userRequests = db.Query<Requests>(sqlString, new { id });

            return userRequests;
        }

        internal void Add(CategoriesFonts newCategoryFont)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"insert into categoriesFonts(fontId, categoryId)
                                                output inserted.id
                                                values(@fontId, @categoryId)";
            var id = db.ExecuteScalar<Guid>(sqlString, newCategoryFont);
            newCategoryFont.Id = id;

        }

        internal void Remove(Guid fontId)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"delete from categoriesFonts where fontId = @fontId";

            db.Execute(sqlString, new { fontId });
        }

        internal IEnumerable<Fonts> GetFontsByCategory(Guid categoryId)
        {
            using var db = new SqlConnection(_connectionString);

            var sqlString = @"select f.* from categoriesFonts cf 
                                            join fonts f 
                                            on cf.fontId = f.id 
                                            where cf.categoryId = @categoryId";
            var categoryFonts = db.Query<Fonts>(sqlString, new { categoryId });

            return categoryFonts;
        }

    }
}