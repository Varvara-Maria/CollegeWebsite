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
                        <div className="image">
                            <img src="http://college-chnu.cv.ua/pages/files/bebd1b5643da/velykden%20rector.jpg" alt="" />

                        </div>
                        <div className="info">
                            <div className="date">
                                <h4>MARCH 29,  2022</h4>
                            </div>
                            <div className="news_name">
                                <p>Привітання з Великоднем від ректора Романа Петришина</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro_news">
                        <div className="image">
                            <img src="http://college-chnu.cv.ua/pages/files/b4423493458f/001.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="date"><h4>MAY 26, 2022</h4></div>
                            <div className="news_name">
                                <p>Чорною плямою на нашій планеті стала Чорнобильська катастрофа.</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro_news">
                        <div className="image">
                            <img src="http://college-chnu.cv.ua/pages/files/3a94c33dfd18/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="date">
                                <h4>MAY 8, 2022</h4>
                            </div>
                            <div className="news_name">
                                <p><Link to ="/">8 травня - День пам'яті та примирення.</Link></p>
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