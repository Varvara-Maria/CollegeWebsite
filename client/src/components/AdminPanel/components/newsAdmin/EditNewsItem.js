import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { hideFooterAndHeader } from '../../../../Services/Helpers';
import NewsService from '../../../../Services/NewsService';
import PagesEditor from '../../SharedForAdmin/Editor';
import {FadeLoader} from 'react-spinners';


const EditNewsItem = () => {
    const {id} =  useParams();
    const [news,setNews] = useState({});
    let newsService = new NewsService();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        hideFooterAndHeader();
        newsService.getNewsById(id).then((res)=>{
            console.log(res);
            setNews(res.data);
            setLoading(false);
        })
    },[])
  return !loading ? 
    <div className = "editNews">
        <h1>Title : {news.title}</h1>
        <div className="container">
            <PagesEditor pageInfo = {news.pageInfo} />
        </div>
       
    </div> : <FadeLoader/>
  
}

export default EditNewsItem