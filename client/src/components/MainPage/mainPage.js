import React from 'react'
import AboutInfo from './aboutInfo'
import './mainPage.css'
import Carousel from './components/Slider'
import NewsAndOther from './newsAndOther'

const MainPage = () => {
  return (
    <div className= "mainpage">
      <Carousel/>
      <AboutInfo/>
      <NewsAndOther/>
    </div>
  )
}

export default MainPage