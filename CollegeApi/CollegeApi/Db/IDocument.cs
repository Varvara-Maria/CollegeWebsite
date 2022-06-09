using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Db;

public interface IDocument
{
    [BsonId]
    public string Id { get; set; }
}