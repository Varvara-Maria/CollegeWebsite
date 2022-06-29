using CollegeApi.IRepositories;
using CollegeApi.Models;
using CollegeApi.ViewModels;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace CollegeApi.Repositories;


public class StudParlamentRepository : MongoRepository<StudParlament>, IStudParlamentService
{
    public StudParlamentRepository(IMongoClient settings) : base(settings)
    {
    }

    public void InsertStudParlament(StudParlamentViewModel studParlamentViewModel)
    {
        var studparlament = new StudParlament()
        {
            Pib = studParlamentViewModel.Pib,
            Image = studParlamentViewModel.Image,
            Posada = studParlamentViewModel.Posada
        };

        InsertOne(studparlament);
    }

    public void UpdateStudParlament(string id,StudParlamentViewModel studParlamentViewModel)
    {
        var existStud = FindById(id);
        if (existStud == null)
        {
            throw new Exception("Error");
        }

        existStud.Image = studParlamentViewModel.Image;
        existStud.Pib = studParlamentViewModel.Pib;
        existStud.Posada = studParlamentViewModel.Posada;
        ReplaceOne(existStud);
    }

    public void DeleteStudParlament(string id)
    {
        DeleteOne(x=>x.Id == id);
    }
}