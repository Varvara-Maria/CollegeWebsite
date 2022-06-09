using CollegeApi.Models;
using CollegeApi.ViewModels;

namespace CollegeApi.IRepositories;

public interface IPagesRepository : IMongoRepository<Page>
{
    Page CreatePage(PageViewModel pageViewModel);

    Page UpdatePage(string id, PageViewModel pageViewModel);

    void DeletePage(string id);

}