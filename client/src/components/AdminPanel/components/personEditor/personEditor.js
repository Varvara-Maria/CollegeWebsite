import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AdministrationService from '../../../../Services/AdministrationService';
import { hideFooterAndHeader } from '../../../../Services/Helpers'

const PersonEditor = () => {
    const {id} = useParams("");
    const [person, setPerson] = useState({});

    const service = new AdministrationService();

    useEffect(()=>{
        hideFooterAndHeader();
        (async ()=>{
            const res = await service.getPersonById(id);
            console.log(res)
            setPerson(res.data)
        })()
        
    },[])
  return (
    <div>{person.pib}</div>
  )
}

export default PersonEditor