using CollegeApi.Models;
using CollegeApi.ViewModels;

namespace CollegeApi.IRepositories;

public interface IAdministrationService : IMongoRepository<Administrator>
{
    void UpdatePerson(string id, AdministratorViewModel administratorViewModel);

    void AddNewPerson(AdministratorViewModel administratorViewModel);

    void DeletePerson(string id);
}