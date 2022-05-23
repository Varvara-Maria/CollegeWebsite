import React from 'react'
import AboutInfo from './aboutInfo'
import './mainPage.css'
import Carousel from './components/Slider'
import Durector from './components/Durector'
const MainPage = () => {
  return (

    <div className= "mainpage">
      <Carousel/>
      <Durector/>
      <AboutInfo/>
    </div>

  )
}

export default MainPage