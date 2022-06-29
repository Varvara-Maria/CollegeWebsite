import './Header.css'
import React,{ useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import PageService from "../../../Services/PageService"
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import {useMedia} from 'react-use-media'
function Header() {
    let pageService = new PageService(); 
    const [speciality, setSpeciality] = useState([]);
    const [student, setStudent]= useState([]);
    const [entrant,setEntrant] =useState([]);
    const [active,setActive] = useState(false);
    const [loading, setLoading] = useState(true);

    const resolution = useMedia('(max-width : 769px)');
  const [classState, setClassState] =useState(false);
  
  const handleMenuClick =()=>{  
    if(classState){
        setClassState(false);
    }
    else setClassState(true);
}

    useEffect(()=>{
        yakas();
        (async()=>{
            const res = await axios.get("https://collegeback.herokuapp.com/api/Page/GetAllPages");
            console.log(res);
            setSpeciality(res.data.filter(x=>x.section === "speciality"));
            setStudent(res.data.filter(x=>x.section === "student"));
            setEntrant(res.data.filter(x=>x.section === "entrant"));
        })()  
    },[])
    const yakas = () =>{
        let link = window.location.href;
        console.log(link);
    
    }
    return (
        <div className="header" id = "header">
        <div className="container">
        {!resolution ? <>
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
                        </ul>
                      </li>
                      
                      <li><NavLink activeClassName="active" to="/gdfgdfpop" >Спеціальності</NavLink>
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
                                    <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul>
                          </li>
                        <li><NavLink activeClassName="active" to="/gfdgggg">Абітурієнту</NavLink>
                            <ul className="submenu">
                                {
                                    entrant?.map((item, index)=>
                                        <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul>
                        </li>
                     <li><NavLink activeClassName="active" to="/administration">Адміністрація</NavLink></li>
                      
                  </ul>
              </div>
              </>
              :<div className="response-block">  
                        <div className="img">
                             <img src="https://i.ibb.co/j3ShSfG/main-1.png" alt="img" />
                        </div>
                        <div className="responsive_menu">
                                <div className={`btn ${classState ? 'active' : 'not-active'}`} onClick ={handleMenuClick} id = 'btn'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                        </div>  
                    </div>     
                }

               
              </div>
              {classState ? 
                    <div  onClick ={()=>setClassState(false)}  className="dropdown-menu">
                        <ul  className=" list_menu josefin-sans">
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/">Головна</NavLink> </li>
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to = "history">Історія</NavLink>
                                                                    <ul className="submenu">
                                                                                <li>Коледжу</li>
                                                                                <li>Університету</li>
                                                                        </ul></li>
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/gdfgdfpop" >Спеціальності</NavLink>
                             <ul className="submenu">
                                {
                                    speciality?.map((item, index)=>
                                        <li><Link to ={`/${item.section}/${item.id}`}>{item.title}</Link></li>
                                    )
                                }
                            </ul>
                            </li>
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/gfdg">Студенту</NavLink>
                          <ul className="submenu">
                                {
                                    student?.map((item, index)=>
                                    <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul></li>
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/gfdgggg">Абітурієнту</NavLink>
                                    <ul className="submenu">
                                        {
                                            entrant?.map((item, index)=>
                                                <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                            )
                                        }
                                    </ul></li>
                        <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/gfdgggg">Абітурієнту</NavLink>
                            <ul className="submenu">
                                {
                                    entrant?.map((item, index)=>
                                        <Link to ={`/${item.section}/${item.id}`}><li>{item.title}</li></Link>
                                    )
                                }
                            </ul></li>
                            <li><NavLink activeClassName="active" to="/administration">Адміністрація</NavLink></li>
                     </ul>
                    </div>  
                : <></>  
            }
      </div>
    );
  }
  
  export default Header;
  