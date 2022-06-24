import React, {useEffect, useState} from 'react'
import './newsAndOther.css'
import { Link } from 'react-router-dom'
import NewsService from '../../Services/NewsService';
import { ParseDate } from '../../Services/Helpers';

const NewsAndOther = () => {
    const service = new NewsService();
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async ()=>{
            const res  = await service.getAllNews();
            console.log(res.data);
            setNews(res.data);
        })()
      
     
    }, [])
    
  return (
    <div className ="news_and_others">  
        <div className="news">
           <div className="title">
               <h1>Новини</h1><div className="line"></div>
           </div>
           <h3><Link to ="/news">Читати всі новини</Link></h3>
           <div className="main_news_block">
                <div className="first_news">
                    <div className="image">
                        <img src={news[0]?.mainImage} alt={news[0]?.title} />
                    </div>
                    <div className="info">
                        <div className="date">
                            <h4>{ParseDate(news[0]?.date)}</h4>
                        </div>
                        <div className="news_name">
                            <p>{news[0]?.title}</p>
                        </div>
                    </div>
                </div>
                <div className="other_news">
                    <div className="intro_news">
                        <div className="image">
                            <img src={news[1]?.mainImage} alt={news[1]?.title} />

                        </div>
                        <div className="info">
                            <div className="date">
                                <h4>{ParseDate(news[1]?.date)}</h4>
                            </div>
                            <div className="news_name">
                                <p>{news[1]?.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro_news">
                        <div className="image">
                            <img src={news[2]?.mainImage} alt={news[2]?.title}/>
                        </div>
                        <div className="info">
                            <div className="date"><h4>{ParseDate(news[2]?.date)}</h4></div>
                            <div className="news_name">
                                <p>{news[2]?.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro_news">
                        <div className="image">
                            <img src={news[3]?.mainImage} alt={news[3]?.title}/>
                        </div>
                        <div className="info">
                            <div className="date">
                                <h4>{ParseDate(news[3]?.date)}</h4>
                            </div>
                            <div className="news_name">
                                <p><Link to ="/">{news[3]?.title}</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div className="quickLink">
            <div className="title">
                <i className ="fas fa-link"></i>
                <h1>Корисні посилання</h1>
            </div>
            <ul className="links">
                <li>Розклад дзвінків</li>
                <li>Календарний план</li>
                <li>Залишити відгук</li>
                <li>Додаткові бали</li>
            </ul>
        </div>
    </div>
  )
}

export default NewsAndOther