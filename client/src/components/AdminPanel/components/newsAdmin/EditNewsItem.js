import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { hideFooterAndHeader } from '../../../../Services/Helpers';

const EditNewsItem = () => {
    const {id} =  useParams();
    const [news,setNews] = useState({});
    useEffect(()=>{
        hideFooterAndHeader();
    },[])
  return (
    <div>EditNewsItem</div>
  )
}

export default EditNewsItem