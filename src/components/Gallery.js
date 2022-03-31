import React from 'react'
import galleryStyles from "../styles/gallery.module.css"
import {products} from "../products"


export default function Gallery() {
  

  const myProducts = products.map((prod,index) => {
    return <img key={index} src={prod.img} className={galleryStyles.product} />
  })

  return (
    <section className={galleryStyles.gallery}>
      <h2>Latest Items</h2>
      <div className={galleryStyles.grid}>
        {myProducts}
      </div>
    </section>

  )
}
