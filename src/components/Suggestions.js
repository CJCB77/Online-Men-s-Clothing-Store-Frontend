import React, { useEffect, useState } from 'react'
import suggestionStyles from "../styles/suggestions.module.css"

//Import Products for testing UI
import { products } from '../products'
//Import hooks
import useWindowDimension from '../hooks/useWindowDimension';
//Import react-elastic-carousel
import Carousel, {consts} from 'react-elastic-carousel';

//Import icons
import rightArrow from "../imgs/icons/white-arrow-right.svg"
import leftArrow from "../imgs/icons/white-arrow-left.svg"

const Button = ({type, onClick, isEdge}) => {

  const rightArrowStyle =  {
    height:"2rem",
    visibility: isEdge ? "hidden" : "visible",
    height:"5rem",
    width:"5rem",
    backgroundColor: "rgba(84, 82, 105, 0.9)",
    borderRadius:"3rem",
    padding:"1rem",
    position:"absolute",
    top:"50%",
    right:"0",
    transform: "translateY(-50%)"
  }
  const leftArrowStyle =  {
    height:"2rem",
    visibility: isEdge ? "hidden" : "visible",
    height:"5rem",
    width:"5rem",
    backgroundColor: "rgba(84, 82, 105, 0.9)",
    borderRadius:"3rem",
    padding:"1rem",
    position:"absolute",
    top:"50%",
    left:"0",
    transform: "translateY(-50%)",
    zIndex: "99",
  }

  const btnStyle = {
    alignSelf:"center",
    border:"none",
    backgroundColor:"transparent",
    cursor:"pointer",

  }

  const leftIcon =  <img src={leftArrow} alt="" style={leftArrowStyle} />
  const rightIcon = <img src={rightArrow} alt="" style={rightArrowStyle}/>
  const pointer = type == consts.PREV ? leftIcon : rightIcon

  return (
    <button onClick={onClick} disabled={isEdge} style={btnStyle}>
      {pointer}
    </button>
  )
}


export default function Suggestions() {

  const [mobileDisplay, setMobileDisplay] = useState(false)
  const windowWidth = useWindowDimension()

  const productsSuggestion = products.slice(0,10).map((prod) => {
    return(
      <article>
        <img src={prod.img} alt="" />
        <h4>{prod.name}</h4>
        <p>USD {prod.price.toFixed(2)}</p>
      </article>
    )
  }) 

  useEffect(() => {
    if(windowWidth < 550) {
      setMobileDisplay(true)
    }else {
      setMobileDisplay(false)
    }
  },[windowWidth])

  const breakpoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <section className={suggestionStyles.suggestions}>
      <h3>Other customers also bought</h3>
      <div className={suggestionStyles.carousel}>
        <Carousel itemsToShow={4}
                  renderArrow={Button}
                  pagination={false}
                  breakPoints={breakpoints}
                  className={productsSuggestion.carousel}
                  style={{position:"relative"}}
                  showArrows={mobileDisplay ? false : true}
                  >
          {productsSuggestion}
        </Carousel>
      </div>
    </section>
  )
}
