import React from 'react'
import AboutInfo from './aboutInfo'
import './mainPage.css'
import Carousel from './components/Slider'
import Durector from './components/Durector'

import NewsAndOther from './newsAndOther'
import Courses from './components/Courses'

const MainPage = () => {
  return (
    <div className= "mainpage">
      <Carousel/>
      <Durector/>
      <Courses />
      <AboutInfo/>
      <NewsAndOther/>
    </div>
  )
}

export default MainPage