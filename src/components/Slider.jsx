import React from 'react'
import sliderStyles from "../styles/slider.module.css"
import model1 from "../imgs/model1.png"

export default function Slider() {
  return (
    <section className={sliderStyles.slider}>
        <div className={sliderStyles.cta}>
            <h2>JC's Design</h2>
            <h3>Men's clothing online store</h3>
            <h1>New Autumm Collection</h1>
            <a href="">Shop now - </a>
        </div>
        <div className={sliderStyles.carousel}>

        </div>
    </section>
  )
}
