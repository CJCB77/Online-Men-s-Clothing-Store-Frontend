import React from 'react'
import suggestionStyles from "../styles/suggestions.module.css"

//Import Products for testing UI
import { products } from '../products'

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
      <div className={suggestionStyles.grid}>
        {productsSuggestion}
      </div>
    </section>
  )
}
