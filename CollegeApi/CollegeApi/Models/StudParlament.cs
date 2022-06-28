using CollegeApi.Attribute;
using CollegeApi.Db;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CollegeApi.Models;

[BsonCollection("StudParlament")]
public class StudParlament : IDocument
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

    [BsonElement("pib")]
    public string Pib { get; set; }

    [BsonElement("posada")]
    public string Posada { get; set; }

    [BsonElement("image")]
    public string Image { get; set; }

}