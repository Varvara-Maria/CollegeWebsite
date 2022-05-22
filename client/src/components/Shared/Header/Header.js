import './Header.css'
import React,{ useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
    

    return (
      
        <div className="header">
        <div className="container">
            <div className="img">
                <img src="https://i.ibb.co/j3ShSfG/main-1.png" alt="header" />
            </div>
         <div className="menu">
                  <ul className = "topmenu">
                      <li>  <Link to="/">Головна</Link></li>
 
                      <li><Link to="/history">Історія</Link>
                      <ul className="submenu">
                                <li>Коледжу</li>
                                <li>Університету</li>
                            </ul></li>
                      
                      <li><Link to="/gfdg">Спеціальності</Link>
                             <ul className="submenu">
                                <li>Право</li>
                                <li>Підприємство, торг та БД.</li>
                                <li>Фінанси, БС та страхування</li>
                                <li>Облік і оподаткування</li>
                                <li>Прикладна математика</li>
                                <li>Комп`ютерні науки</li>
                                <li>Комп`ютерна інженерія</li>
                            </ul>
                        </li>
                      <li><Link to="/gfdg">Студенту</Link>
                          <ul className="submenu">
                                <li>Розклад дзвінків</li>
                                <li>Реквізити для оплати</li>
                                <li>Курсова робота</li>
                                <li>Допомога у пошуку роботи</li>
                                <li>Стипендії</li>
                                <li>Електронні підручники</li>
                                <li>Силабуси дисциплін</li>
                                <li>Оплата (on-line)</li>
                                <li>Гуртожиток</li>
                            </ul>
                          </li>
                        <li><Link to="/gfdg">Абітурієнту</Link>
                            <ul className="submenu">
                                <li>Підготовчі курси</li>
                                <li>Програма підготовки</li>
                                <li>Інформаціний пакет</li>
                                <li>Правила прийому</li>
                                <li>Додаткові бали</li>
                                <li>Рейтингові списки(БЗСО)</li>
                                <li>Рейтингові списки(ПЗСО)</li>
                                <li>Накази про зарахування</li>
                                <li>Вартість навчання</li>
                                <li>Державне замовлення</li>
                                <li>Мотиваційний лист</li>
                                
                            </ul>
                        </li>
                      <li><Link to="/">Адміністрація</Link></li>
                      
                  </ul>
              </div>
      
              </div>
        
      </div>
    );
  }
  
  export default Header;
  