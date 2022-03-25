import React, { useState } from 'react'
import sliderStyles from "../styles/slider.module.css"
import Model3 from "../imgs/model3.jpg"
import arrowOrange from "../imgs/right-arrow.svg"
import arrowWhite from "../imgs/right-arrow-white.svg"

export default function Slider() {
  
  function Btn() {
    
    const[arrow, setArrow] = useState(arrowOrange)
    
    return(
      <a href="#" className={sliderStyles.carousel__btn} 
        onMouseEnter={() => setArrow(arrowWhite)}
        onMouseLeave={() => setArrow(arrowOrange)}>
      Shop now
      <img src={arrow} alt="right arrow" className={sliderStyles.arrow} /> 
      </a>
    )
  }

  const carouselStyle = {
    backgroundImage: `url(${Model3})`,
    backgroundPosition: "50% 85%"
  }

  return (
    <section className={sliderStyles.slider}>
        <div className={sliderStyles.cta}>
            <h2>JC's Design</h2>
            <h3>Men's clothing online store</h3>
            <h1>New  <span>Autumm</span>  Collection</h1>
            <Btn />
        </div>
        <div className={sliderStyles.carousel} style={carouselStyle}>

        </div>
    </section>
  )
}
