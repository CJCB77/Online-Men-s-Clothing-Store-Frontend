import React from 'react'
import featuredStyles from "../styles/featured.module.css"


export default function Featured() {

  return (
  <section className={featuredStyles.featured__section}>

    <article className={featuredStyles.featured}>
        <div className={featuredStyles.featured__left}>
            <div className={featuredStyles.featured__price}>
                <span>Chinos</span>
                <span>from</span>
                <span>$29.99</span>   
            </div>
        </div>
        <div className={featuredStyles.featured__right}>

        </div>
        <a href="#">Shop now</a>
    </article>
    
    <article className={featuredStyles.featured}>
        <div className={featuredStyles.featured__left}>
            <div className={featuredStyles.featured__price}>
                <span>Chinos</span>
                <span>from</span>
                <span>$29.99</span>   
            </div>
        </div>
        <div className={featuredStyles.featured__right}>

        </div>
        <a href="#">Shop now</a>
    </article>




  </section>
  
  )
}
