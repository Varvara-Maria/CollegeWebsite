using CollegeApi.IRepositories;
using CollegeApi.Models;
using CollegeApi.ViewModels;
using MongoDB.Driver;

namespace CollegeApi.Repositories;

public class AdministratorRepository : MongoRepository<Administrator>, IAdministrationService
{
    public AdministratorRepository(IMongoClient settings) : base(settings)
    {
    }

    public void UpdatePerson(string id, AdministratorViewModel administratorViewModel)
    {
        var person = FindById(id);

        if (person != null)
        {
            person.Image = administratorViewModel.Image;
            person.Pib = administratorViewModel.Pib;
            person.Posada = administratorViewModel.Posada;
            person.Status = administratorViewModel.Status;
            ReplaceOne(person);
        }
        else throw new Exception("Person Is not exist");
    }

    public void AddNewPerson(AdministratorViewModel administratorViewModel)
    {
        InsertOne(new Administrator()
        {
            Pib = administratorViewModel.Pib,
            Image = administratorViewModel.Image,
            Posada = administratorViewModel.Posada,
            Status = administratorViewModel.Status
        });
    }

    public void DeletePerson(string id)
    {
        try
        {
            DeleteOne(x=>x.Id == id);
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }
}