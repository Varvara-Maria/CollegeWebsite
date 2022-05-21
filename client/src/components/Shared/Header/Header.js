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
                      <li>  <Link to="/">Головна</Link>
                            <ul className="submenu">
                                <li>gdhgdh</li>
                                <li>gdhgdh</li>
                                <li>gdhgdh</li>
                            </ul>
                      </li>
                      <li><Link to="/gfdg">Студенту</Link></li> 
                      <li><Link to="/gdgdf">Чібєндія</Link></li>
                      <li></li>
                      <li></li>
                  </ul>
              </div>
      </div>
             
        
      </div>
    );
  }
  
  export default Header;
  