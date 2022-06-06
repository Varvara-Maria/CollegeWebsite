using System.Linq.Expressions;
using CollegeApi.Db;

namespace CollegeApi.IRepositories;

public interface IMongoRepository<TDocument>
    where TDocument : IDocument
{
    IEnumerable<TDocument> FilterBy(
        Expression<Func<TDocument, bool>> filterExpression);

    IEnumerable<TProjected> FilterBy<TProjected>(
        Expression<Func<TDocument, bool>> filterExpression,
        Expression<Func<TDocument, TProjected>> projectionExpression);

    TDocument FindOne(Expression<Func<TDocument, bool>> filterExpression);

    TDocument FindById(string id);

    void InsertOne(TDocument document);

    void ReplaceOne(TDocument document);

    void DeleteOne(Expression<Func<TDocument, bool>> filterExpression);

}