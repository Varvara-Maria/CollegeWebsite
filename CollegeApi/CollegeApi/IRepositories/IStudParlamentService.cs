using CollegeApi.Models;
using CollegeApi.ViewModels;

namespace CollegeApi.IRepositories;

public interface IStudParlamentService : IMongoRepository<StudParlament>
{
    void InsertStudParlament(StudParlamentViewModel studParlamentViewModel);

    void UpdateStudParlament(string id, StudParlamentViewModel studParlamentViewModel);

    void DeleteStudParlament(string id);
}