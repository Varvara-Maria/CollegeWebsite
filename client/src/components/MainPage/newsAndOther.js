import React from 'react'
import './newsAndOther.css'
import { Link } from 'react-router-dom'
const NewsAndOther = () => {
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
                        <img src="http://college-chnu.cv.ua/pages/files/ec7a1dea57b3/peremoga0905.jpg" alt="" />
                    </div>
                    <div className="info">
                        <div className="date">
                            <h4>JUNE 12, 2022</h4>
                        </div>
                        <div className="news_name">
                            <p>9 травня Україна відзначає День перемоги над нацизмом у Другій світовій війні.</p>
                        </div>
                    </div>
                </div>
                <div className="other_news">
                    <div className="intro_news">
                        
                    </div>
                </div>
           </div>
        </div>
        <div className="quickLink">
            
        </div>
    </div>
  )
}

export default NewsAndOther