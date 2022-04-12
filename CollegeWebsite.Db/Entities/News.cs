namespace CollegeWebsite.Db.Entities;

public class News
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string ShortDescription { get; set; }
}