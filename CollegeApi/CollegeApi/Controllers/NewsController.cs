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
        var res = _newsRepository.FilterBy(x => true).ToList();
        res.Sort((x,y)=>y.Date.CompareTo(x.Date));
        return Ok(res);
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
    public IActionResult UpdateNews(string id,[FromBody] NewsViewModel newsViewModel)
    {
        return Ok(_newsRepository.UpdateNews(id, newsViewModel));
    }

    [HttpDelete("[action]/{id}")]
    public IActionResult DeleteNews(string id)
    {
        _newsRepository.DeleteNews(id);
        return Ok();
    }
}