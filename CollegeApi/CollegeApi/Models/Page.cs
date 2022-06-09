using CollegeApi.Attribute;
using CollegeApi.Db;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Models;

[BsonCollection("Page")]
public class Page : IDocument
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

    [BsonElement("section")]
    public string Section { get; set; }

    [BsonElement("title")]
    public string Title { get; set; }

    [BsonElement("pageInfo")]
    public string PageInfo { get; set; }
}