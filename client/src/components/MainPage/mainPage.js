import React from 'react'
import AboutInfo from './aboutInfo'
import './mainPage.css'
import NewsAndOther from './newsAndOther'
const MainPage = () => {
  return (
    <div className= "mainpage">
      <AboutInfo/>
      <NewsAndOther/>
    </div>
  )
}

export default MainPage