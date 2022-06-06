using CollegeApi.IRepositories;
using CollegeApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CollegeApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly INewsRepository _newsRepository;

    public NewsController(INewsRepository newsRepository)
    {
        _newsRepository = newsRepository;
    }

    [HttpGet("[action]")]
    public IActionResult GetAllNews()
    {
        return Ok(_newsRepository.FilterBy(x => true));
    }

    [HttpPost("[action]")]
    public IActionResult CreateNews(NewsViewModel newsViewModel)
    {
        _newsRepository.CreateNews(newsViewModel);
        return Ok();
    }

    [HttpGet("[action]/{id}")]
    public IActionResult GetNewsById(string id)
    {
        return Ok(_newsRepository.FindById(id));
    }

    [HttpPost("[action]/{id}")]
    public IActionResult UpdateNews(string id, NewsViewModel newsViewModel)
    {
        return Ok(_newsRepository.UpdateNews(id, newsViewModel));
    }
}