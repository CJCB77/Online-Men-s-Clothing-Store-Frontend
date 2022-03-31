import React from 'react'
import featuredStyles from "../styles/featured.module.css"
import chinos from "../imgs/featuredPants.png"
import chinos2 from "../imgs/featuredPants2.png"
import jacket from "../imgs/featuredJacket2.png"
import jacket2 from "../imgs/featuredJacket.png"

function FeaturedCategory(props) {
    
    return(
      <article className={featuredStyles.featured}>

        <div className={featuredStyles.featured__left} style={{backgroundImage: `url(${props.imgRight})`}}>
          <div className={featuredStyles.featured__price}>
            <span>{props.name}</span>
            <span>from</span>
            <span>${props.price}</span>   
          </div>
        </div>

        <div className={featuredStyles.featured__right} style={{backgroundImage: `url(${props.imgLeft})`}}>

        </div>
        <a href="#">Shop now</a>

      </article>
    )
}

function FeaturedProduct(props) {
    
    return(

      <article className={featuredStyles.featured}>
        <div className={featuredStyles.featured__left} style={{backgroundImage: `url(${props.imgRight})`}} >
                <div className={featuredStyles.featuredProduct__price}>
                    <span style={{fontSize:"3.6rem", fontWeight:"500"}}>${props.price}</span>   
                    <span style={{fontSize:"2.4rem", fontWeight:"400"}}>{props.name}</span>
                </div>
        </div>
        <div className={featuredStyles.featured__right} style={{backgroundImage: `url(${props.imgLeft})`}}>

        </div>
        <h2 className={featuredStyles.featured__heading} >{props.title}</h2>
        <h3 className={featuredStyles.featured__subheading}>{props.description}</h3>
        <a href="#" style={{backgroundColor:"#FAF9F8",color:"#545269"}}>Shop now</a>

      </article>
    )

}

export default function Featured() {

  return (
  <section className={featuredStyles.featured__section}>

    <FeaturedCategory name="Chinos" 
                      price={29.99}
                      imgLeft={chinos}
                      imgRight={chinos2} />

    <FeaturedProduct imgRight={jacket} 
                     imgLeft={jacket2} 
                     price={36.99}
                     title="The Oxford Jacket"
                     name="Regular Fit Oxford Jacket"
                     description="Level up your outfit with this new cotton wool jacket" 

    />

  </section>
  
  )
}
