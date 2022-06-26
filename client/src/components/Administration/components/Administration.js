import React, { useEffect, useState } from 'react';
import './Administration.css'
import {Divider} from '@mui/material'

import AdministrationService from '../../../Services/AdministrationService';

function Administration() {
    const administrationService = new AdministrationService();
    const [administration, setAdministration] = useState([]);


    useEffect(()=>{
        (async ()=>{
            const res = await administrationService.getAllPerson();
            console.log(res);
            setAdministration(res.data);
        })()
        
    },[])
  return administration?.map((item) => <div className='administration'>
      <div className='container'>
          <div className='administration-info'>
              <img src= {item.image} alt = {item.pib}/>
              <div className='administration-text'>
                  <h1 className='administration-post'>
                      {item.posada}
                  </h1>
                  <p className='administration-name'>
                      <Divider>{item.pib}</Divider>
                  </p>
                  <p className='administration-work'>{item.status}</p>
              </div>
          </div>
      </div>
  </div>
        )
}

export default Administration