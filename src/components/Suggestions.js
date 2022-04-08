import React from 'react'
import suggestionStyles from "../styles/suggestions.module.css"

//Import Products for testing UI
import { products } from '../products'

//Import react-elastic-carousel
import Carousel, {consts} from 'react-elastic-carousel';

//Import icons
import rightArrow from "../imgs/right-arrow2.svg"
import leftArrow from "../imgs/left-arrow.svg"

const Button = ({type, onClick, isEdge}) => {

  const arrowStyle =  {
    height:"3rem",
  }

  const btnStyle = {
    height:"5rem",
    alignSelf:"center",
    padding:"0.5rem",
    border:"none",
    borderRadius:"3rem",
  }

  const leftIcon = <img src={leftArrow} alt="" style={arrowStyle}/>
  const rightIcon = <img src={rightArrow} alt="" style={arrowStyle} />
  const pointer = type == consts.PREV ? leftIcon : rightIcon

  return (
    <button onClick={onClick} disabled={isEdge} style={btnStyle}>
      {pointer}
    </button>
  )
}


export default function Suggestions() {

  const productsSuggestion = products.slice(0,10).map((prod) => {
    return(
      <article>
        <img src={prod.img} alt="" />
        <h4>{prod.name}</h4>
        <p>USD {prod.price.toFixed(2)}</p>
      </article>
    )
  }) 

  return (
    <section className={suggestionStyles.suggestions}>
      <h3>Other customers also bought</h3>
      <div className={suggestionStyles.carousel}>
        <Carousel itemsToShow={4}
                  renderArrow={Button}
                  pagination={false}>
          {productsSuggestion}
        </Carousel>
      </div>
      {/* <div className={suggestionStyles.grid}>
        {productsSuggestion}
      </div> */}
    </section>
  )
}
