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

}