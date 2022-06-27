import './Header.css'
import React,{ useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import PageService from "../../../Services/PageService"
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { useLocation } from 'react-router';


function Header() {
    const location = useLocation();
    let pageService = new PageService(); 
    const [speciality, setSpeciality] = useState([]);
    const [student, setStudent]= useState([]);
    const [entrant,setEntrant] =useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState();

    useEffect(()=>{
        
        (async()=>{
            const res = await axios.get("https://collegeback.herokuapp.com/api/Page/GetAllPages");
            console.log(res);
            setSpeciality(res.data.filter(x=>x.section === "speciality"));
            setStudent(res.data.filter(x=>x.section === "student"));
            setEntrant(res.data.filter(x=>x.section === "entrant"));
        })()  
    },[])

    useEffect(()=>{
        console.log(location)
        handleActive();
    }, [location])

    const handleActive = () =>{
        let link = window.location.pathname;
        console.log(link)
        if(link.includes("student")){
            console.log("student");
            setState(4)
        }
        if(link.includes("entrant")){
            console.log("entrant")
            setState(5);
        }
        if(link.includes("speciality")){
            console.log("speciality");
            setState(3);
        }
    }

    return (
        <div className="header" id = "header">
        <div className="container">
            <div className="img">
                <img src="https://i.ibb.co/j3ShSfG/main-1.png" alt="header" />
            </div>
         <div className="menu">
                  <ul className = "topmenu">
                      <li> <NavLink activeClassName="active" to="/" onClick ={()=>setState(1)}>Головна</NavLink></li>
                      <li><NavLink activeClassName="active" to = "history" onClick ={()=>setState(2)}>Історія</NavLink>
                      <ul className="submenu">
                                <li>Коледжу</li>
                                <li>Університету</li>
                        </ul>
                      </li>
                      
                      <li><NavLink activeClassName="active" to = "/speciality" className = {state === 3 ? "active" : "" }>Спеціальності</NavLink>
                             <ul className="submenu">
                                {
                                    speciality?.map((item, index)=>
                                        <li><Link to ={`/${item.section}/${item.id}`}>{item.title}</Link></li>
                                    )
                                }
                            </ul>
                        </li>
                      <li><NavLink activeClassName="active" to="/student" className = {state === 4 ? "active" : "" } >Студенту</NavLink>
                          <ul className="submenu">
                                {
                                    student?.map((item, index)=>
                                    <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul>
                          </li>
                        <li><NavLink activeClassName="active" to="/entrant" className = {state === 5 ? "active" : "" } onClick = {()=>setState(5)}>Абітурієнту</NavLink>
                            <ul className="submenu">
                                {
                                    entrant?.map((item, index)=>
                                        <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul>
                        </li>
                     <li><NavLink activeClassName="active" to="/administration" onClick ={()=>setState(6)}>Адміністрація</NavLink></li>
                      
                  </ul>
              </div>
      
              </div>
        
      </div>
    );
  }
  
  export default Header;
  