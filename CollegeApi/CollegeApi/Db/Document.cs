using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Db;

public abstract class Document : IDocument
{
    [BsonId]
    public string Id { get; set; }
}