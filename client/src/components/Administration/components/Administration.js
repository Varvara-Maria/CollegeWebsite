import React from 'react';
import './Administration.css'
import {Divider} from '@mui/material'

function Administration() {
  return (
    <div className='administration'>
        <div className='container'>
            <div className='administration-info'>
                <img src='http://college-chnu.cv.ua/pages/files/78ff7d783076/3.jpg' />
                <div className='administration-text'>
                    <h1 className='administration-post'>
                        Заступник директора з навчально-методичної роботи
                    </h1>
                    <p className='administration-name'>
                        <Divider>Дерев'янчук Микола Ярославович</Divider>
                    </p>
                    <p className='administration-work'>Викладач вищої категорії, методист</p>
                </div>
            </div>
            <div className='administration-info'>
                <img src='http://college-chnu.cv.ua/pages/files/96fdeac5bb7e/2.jpg' />
                <div className='administration-text'>
                    <h1 className='administration-post'>
                        Заступник директора з навчально-виховної роботи
                    </h1>
                    <p className='administration-name'>
                        <Divider>Докаль Ольга Ярославівна</Divider>
                    </p>
                    <p className='administration-work'>Викладач вищої категорії, методист</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Administration