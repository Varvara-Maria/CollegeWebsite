using CollegeApi.IRepositories;
using CollegeApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CollegeApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdministrationController : ControllerBase
{
    private readonly IAdministrationService _administrationService;

    public AdministrationController(IAdministrationService administrationService)
    {
        _administrationService = administrationService;
    }

    [HttpGet("[action]")]
    public IActionResult GetAllPersons()
    {
        return Ok(_administrationService.FilterBy(x => true).ToList());
    }

    [HttpDelete("[action]/{id}")]
    public IActionResult DeletePerson(string id)
    {
        _administrationService.DeletePerson(id);
        return Ok();
    }

    [HttpPost("[action]")]
    public IActionResult InsertPerson(AdministratorViewModel administratorViewModel)
    {
        _administrationService.AddNewPerson(administratorViewModel);
        return Ok();
    }

    [HttpPost("[action]/{id}")]
    public IActionResult UpdatePerson(string id, AdministratorViewModel administratorViewModel)
    {
        _administrationService.UpdatePerson(id, administratorViewModel);
        return Ok();
    }

    [HttpGet("[action]/{id}")]
    public IActionResult GetPersonById(string id)
    {
        return Ok(_administrationService.FindById(id));
    }

}