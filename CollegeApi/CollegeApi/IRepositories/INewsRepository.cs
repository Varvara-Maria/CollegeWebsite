using System.Linq.Expressions;
using CollegeApi.Models;
using CollegeApi.ViewModels;

namespace CollegeApi.IRepositories;

public interface INewsRepository : IMongoRepository<News>
{
    News CreateNews(NewsViewModel newsViewModel);

    void DeleteNews(string Id);

    News UpdateNews(string id, NewsViewModel news);
}