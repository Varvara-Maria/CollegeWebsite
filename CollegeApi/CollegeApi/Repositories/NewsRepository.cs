using CollegeApi.IRepositories;
using CollegeApi.Models;
using CollegeApi.ViewModels;
using MongoDB.Driver;

namespace CollegeApi.Repositories;

public class NewsRepository : MongoRepository<News>, INewsRepository
{
    private INewsRepository _newsRepositoryImplementation;

    public NewsRepository(IMongoClient settings) : base(settings)
    {
    }

    public News CreateNews(NewsViewModel newsViewModel)
    {
        newsViewModel.Date = newsViewModel.Date.AddHours(4);
        News newNews = new News()
        {
            Title = newsViewModel.Title,
            Description = newsViewModel.Description,
            MainImage = newsViewModel.MainImage,
            PageInfo = newsViewModel.PageInfo,
            Date = newsViewModel.Date
        };

        InsertOne(newNews);
        return newNews;
    }

    public void DeleteNews(string Id)
    {
        try
        {
            DeleteOne(x=>x.Id == Id);
        }
        catch (Exception e)
        {
            throw new Exception("Not Delete");
        }

    }

    public News UpdateNews(string id, NewsViewModel news)
    {
        try
        {
            news.Date = news.Date.AddHours(4);
            News upNews = new News()
            {
                Id = id,
                Title = news.Title,
                Description = news.Description,
                Date = news.Date,
                MainImage = news.MainImage,
                PageInfo = news.PageInfo
            };

            ReplaceOne(upNews);
            return upNews;
        }
        catch (Exception e)
        {
            throw new Exception("Not Update");
        }
    }
}