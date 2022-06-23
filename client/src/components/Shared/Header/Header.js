import './Header.css'
import React,{ useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import PageService from "../../../Services/PageService"
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

function Header() {
    let pageService = new PageService(); 
    const [speciality, setSpeciality] = useState([]);
    const [student, setStudent]= useState([]);
    const [entrant,setEntrant] =useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async()=>{
            const res = await axios.get("https://collegeback.herokuapp.com/api/Page/GetAllPages");
            console.log(res);
            setSpeciality(res.data.filter(x=>x.section === "speciality"));
            setStudent(res.data.filter(x=>x.section === "student"));
            setEntrant(res.data.filter(x=>x.section === "entrant"));
        })()  
    },[])
    return (
        <div className="header" id = "header">
        <div className="container">
            <div className="img">
                <img src="https://i.ibb.co/j3ShSfG/main-1.png" alt="header" />
            </div>
         <div className="menu">
                  <ul className = "topmenu">
                      <li> <NavLink activeClassName="active" to="/">Головна</NavLink></li>
 
                      <li><NavLink activeClassName="active" to = "history">Історія</NavLink>
                      <ul className="submenu">
                                <li>Коледжу</li>
                                <li>Університету</li>
                            </ul></li>
                      
                      <li><NavLink activeClassName="active" to = "/hfghf">Спеціальності</NavLink>
                             <ul className="submenu">
                                {
                                    speciality?.map((item, index)=>
                                        <li><Link to ={`/${item.section}/${item.id}`}>{item.title}</Link></li>
                                    )
                                }
                            </ul>
                        </li>
                      <li><NavLink activeClassName="active" to="/gfdg">Студенту</NavLink>
                          <ul className="submenu">
                                {
                                    student?.map((item, index)=>
                                        <li><Link to ={`/${item.section}/${item.id}`}>{item.title}</Link></li>
                                    )
                                }
                            </ul>
                          </li>
                        <li><NavLink activeClassName="active" to="/gfdgggg">Абітурієнту</NavLink>
                            <ul className="submenu">
                                {
                                    entrant?.map((item, index)=>
                                        <li><Link to ={`/${item.section}/${item.id}`}>{item.title}</Link></li>
                                    )
                                }
                            </ul>
                        </li>
                      <li><NavLink activeClassName="active" to="/hfghfgh">Адміністрація</NavLink></li>
                      
                  </ul>
              </div>
      
              </div>
        
      </div>
    );
  }
  
  export default Header;
  