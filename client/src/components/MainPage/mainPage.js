import React from 'react'
import AboutInfo from './aboutInfo'
import './mainPage.css'
import Carousel from './components/Slider'
const MainPage = () => {
  return (
    <div className= "mainpage">
      <Carousel/>
      <AboutInfo/>
    </div>
  )
}

export default MainPage