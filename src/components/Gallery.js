import React from 'react'
import galleryStyles from "../styles/gallery.module.css"
import shoes1 from "../imgs/test/shoes.png"
import shirt1 from "../imgs/test/shirt.png"
import jacket from "../imgs/test/jacket.png"

export default function Gallery() {
  return (
    <section className={galleryStyles.gallery}>
      <h2>Latest Items</h2>
      <div className={galleryStyles.grid}>
        <img src={shoes1} alt="" className={galleryStyles.product} />
        <img src={shirt1} alt="" className={galleryStyles.product} />
        <img src={jacket} alt="" className={galleryStyles.product} />
        <img src={shirt1} alt="" className={galleryStyles.product} />
        <img src={shoes1} alt="" className={galleryStyles.product} />
        <img src={shirt1} alt="" className={galleryStyles.product} />
        <img src={shirt1} alt="" className={galleryStyles.product} />
        <img src={shirt1} alt="" className={galleryStyles.product} />
      </div>
    </section>
  )
}
