using CollegeApi.Attribute;
using CollegeApi.Db;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Models;


[BsonCollection("News")]
public class News : IDocument
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

    [BsonElement("title")]
    public string Title { get; set; }

    [BsonElement("mainImage")]
    public string MainImage { get; set; }

    [BsonElement("description")]
    public string Description { get; set; }

    [BsonElement("pageInfo")]
    public string PageInfo { get; set; }

    [BsonElement("date")]
    public DateTime Date { get; set; }
}