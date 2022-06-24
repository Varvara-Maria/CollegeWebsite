import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { FadeLoader } from 'react-spinners';
import PageService from '../../../Services/PageService';
import './page.css'

import SideBar from './SideBar';
const Page = () => {
    const {id} = useParams();
    const [page, setPage] = useState({});
    const [loading, setLoading] = useState(true);
    let pageService = new PageService();


    useEffect(()=>{
        pageService.getPageById(id).then((res)=>{
            console.log(res);
            setPage(res.data);
            setLoading(false);
        })
    },[id])
    

  return loading ? <FadeLoader/> :
    <div className ="page">
      <div className = "container">
          <div className="title">
            <h1>{page.title}</h1>
          </div>
          <div className="universal-page-container">
            <div className="scroll-sidebar">
              <SideBar/>
            </div>
              
            <div className="pageInfo" dangerouslySetInnerHTML={{ __html: page.pageInfo }} ></div>
          </div>
          
      </div>
    </div>
}

export default Page