using CollegeApi.IRepositories;
using CollegeApi.Models;
using CollegeApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CollegeApi.Controllers;


[ApiController]
[Route("/api/[controller]")]
public class PageController : ControllerBase
{
    private readonly IPagesRepository _pagesRepository;

    public PageController(IPagesRepository pagesRepository)
    {
        _pagesRepository = pagesRepository;
    }

    [HttpGet("[action]/{section}")]
    public IActionResult GetPagesBySection(string section)
    {
        var res =  _pagesRepository.FilterBy(x => x.Section == section).ToList();
        return Ok(res);
    }


    [HttpGet("[action]/{id}")]
    public IActionResult GetPageById(string id)
    {
        var res = _pagesRepository.FindById(id);
        return Ok(res);
    }

    [HttpPost("[action]/{id}")]
    public IActionResult UpdatePage(string id, PageViewModel pageViewModel)
    {
        _pagesRepository.UpdatePage(id, pageViewModel);
        return Ok();
    }

    [HttpDelete("[action]/{id}")]
    public IActionResult DeletePage(string id)
    {
        _pagesRepository.DeletePage(id);
        return Ok();
    }

    [HttpPost("[action]")]
    public IActionResult CreatePage(PageViewModel pageViewModel)
    {
        return Ok(_pagesRepository.CreatePage(pageViewModel));
    }

    [HttpGet("[action]")]
    public IActionResult GetAllPages()
    {
        return Ok(_pagesRepository.FilterBy(x => true).ToList());
    }


}