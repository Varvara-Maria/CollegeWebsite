using CollegeApi.Attribute;
using CollegeApi.Db;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Models;

[BsonCollection("Administrator")]
public class Administrator : IDocument
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

    [BsonElement("Pib")]
    public string Pib { get; set; }

    [BsonElement("Image")]
    public string Image { get; set; }

    [BsonElement("Posada")]
    public string Posada { get; set; }

    [BsonElement("Status")]
    public string Status { get; set; }
}