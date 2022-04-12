using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CollegeWebsite.Core.IServices;
using Microsoft.AspNetCore.Mvc;

namespace CollegeWebsite.Controllers
{
    public class NewsController : Controller
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }
    }
}