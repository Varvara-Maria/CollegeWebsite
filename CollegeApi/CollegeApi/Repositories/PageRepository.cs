using CollegeApi.IRepositories;
using CollegeApi.Models;
using CollegeApi.ViewModels;
using MongoDB.Driver;

namespace CollegeApi.Repositories;

public class PageRepository : MongoRepository<Page>, IPagesRepository
{
    public PageRepository(IMongoClient settings) : base(settings)
    {
    }

    public Page CreatePage(PageViewModel pageViewModel)
    {
        Page newPage = new Page()
        {
            PageInfo = pageViewModel.PageInfo,
            Section = pageViewModel.Section,
            Title = pageViewModel.Title
        };

        InsertOne(newPage);

        return newPage;
    }

    public Page UpdatePage(string id, PageViewModel pageViewModel)
    {
        try
        {
            Page upPage = new Page()
            {
                Id = id,
                PageInfo = pageViewModel.PageInfo,
                Title = pageViewModel.Title,
                Section = pageViewModel.Section
            };

            ReplaceOne(upPage);
            return upPage;
        }
        catch (Exception e)
        {
            throw new Exception("Not Update");
        }
    }

    public void DeletePage(string id)
    {
        try
        {
            DeleteOne(x=>x.Id == id);
        }
        catch (Exception e)
        {
            throw new Exception("Not Delete");
        } DeleteOne(x=>x.Id == id);
    }
}