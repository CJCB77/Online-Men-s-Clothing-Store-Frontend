import React, { useEffect, useState } from 'react'

// Styles
import sliderStyles from "../styles/slider.module.css"
import "animate.css"

//Images
import Model1 from "../imgs/model1.jpg"
import Model2 from "../imgs/model3.jpg"
import Model3 from "../imgs/model2.jpg"
import arrowOrange from "../imgs/right-arrow.svg"
import arrowWhite from "../imgs/right-arrow-white.svg"

const images = [Model3, Model2, Model1]

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

export default function Slider() {

  const [slidePosition, setSlidePosition] = useState(0)

  function changeImg() {
    setSlidePosition((prevPosition) => {
      if(prevPosition > -(images.length * 100) + 100)  {
        return prevPosition - 100
      }
      return 0
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      changeImg()
    },3000)
    return () => clearInterval(timer)

  },[])


  const slides = images.map((img, index) => {
    return (
        <div key={index} style={{backgroundImage:`url(${img})`}} className={sliderStyles.slide}>       
          {index == 0 &&
            <div className={sliderStyles.slide__brand}>
              <h1>JC's Design</h1>
              <h2>Men's clothing online store</h2>
            </div>
          }
          {index == 1 &&
            <React.Fragment>
              <div className={sliderStyles.slide__collection}>
                <h1 >New Autumm Collection</h1>
                <Btn />
              </div>
            </React.Fragment>
          }
        </div>

    )})
  
  return (
    <section className={sliderStyles.slider }>
        <div className={sliderStyles.cta}>
            <h2>JC's Design</h2>
            <h3>Men's clothing online store</h3>
            <h1>New  <span>Autumm</span>  Collection</h1>
            <Btn />
        </div>
        <div className={sliderStyles.carousel}>
          <div className={sliderStyles.container} style={{transform: `translateY(${slidePosition}%)`}}>
            {slides}
          </div>
        </div>
    </section>
  )
}
