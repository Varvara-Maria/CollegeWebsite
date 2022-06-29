using CollegeApi.IRepositories;
using CollegeApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CollegeApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudParlamentController : ControllerBase
{
    private readonly IStudParlamentService _studParlamentService;

    public StudParlamentController(IStudParlamentService studParlamentService)
    {
        _studParlamentService = studParlamentService;
    }

    [HttpGet("[action]/{id}")]
    public IActionResult GetStudParlament(string id)
    {
        return Ok(_studParlamentService.FindById(id));
    }

    [HttpPost("[action]")]
    public IActionResult InsertStudParlament(StudParlamentViewModel studParlamentViewModel)
    {
        _studParlamentService.InsertStudParlament(studParlamentViewModel);
        return Ok();
    }

    [HttpPost("[action]/{id}")]
    public IActionResult UpdateStudParlament(string id, StudParlamentViewModel studParlamentViewModel)
    {
        _studParlamentService.UpdateStudParlament(id, studParlamentViewModel);
        return Ok();
    }

    [HttpGet("[action]")]
    public IActionResult GetAllStudParlament()
    {
        return Ok(_studParlamentService.FilterBy(x => true).ToList());
    }

    [HttpDelete("[action]/{id}")]
    public IActionResult DeleteStudParlament(string id)
    {
        _studParlamentService.DeleteStudParlament(id);
        return Ok();
    }
}