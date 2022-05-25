import './Slider.css';
import React, { useEffect ,useState  } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Carousel() {

    const sliderSettings = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        pauseOnHover:false,
      }
    
  return (
    <div className="slider">
     <Slider  {...sliderSettings}> 
        <div className="element-slider">
            <img src="https://i.ibb.co/k0mj4Q1/image.jpg" alt="" />
            <div className="text-slider">
                <h4>Найкращий коледж у місті</h4>
                <h5>Коледж ЧНУ ім. Юрія Федьковича</h5>
                 <button>Детальніше</button>
            </div>
        </div>
        <div className="element-slider">
            <img src="http://www.chnu.edu.ua/res//chnu.edu.ua/----------------------------------------------------------------------------------------------------14.05.20/book%20(5).jpeg" alt="" />
            <div className="text-slider">
                <h4>Найбільший вибір спеціальностей</h4>
                <h5>Ми чекаємо на тебе!!!</h5>
                <button>Детальніше</button>
            </div>
        </div>
        
     </Slider>
    

    </div>
  );
}

export default Carousel;
