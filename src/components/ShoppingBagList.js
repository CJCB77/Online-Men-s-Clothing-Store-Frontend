import React from 'react'
//Styles
import shoppingListStyles from "../styles/shoppingList.module.css"
//Products for testing
import { products } from '../products'
//Images
import removeIcon from "../imgs/icons/remove.svg"

// Max item number
const MAX_QTY = 10

function BagItem(props) {
  return(
    <article className={shoppingListStyles.item}>
    <div className={shoppingListStyles.item__img}>
      <img src={props.prod.img} alt="" />
    </div>
    <div className={shoppingListStyles.details}>
      <div className={shoppingListStyles.details__header}>
        <h3>{props.prod.name}</h3>
        <img src={removeIcon} alt="" />
      </div>
      <div className={shoppingListStyles.details__content} >
        <p className={shoppingListStyles.details__price}>$21.99</p>
        <p>Color: Grey</p>
        <form action="" className={shoppingListStyles.qty}>
          <label htmlFor="qty">Qty: </label>
          <select name="qty" id="qty">
            {props.available_qty}
          </select>
        </form>
        <p>Size: {props.prod.size}</p>
        <p>Total: {props.prod.price.toFixed(2)}</p>
      </div>
    </div>
  </article>
  )
}

export default function ShoppingBagList() {

  const available_qty = [...Array(MAX_QTY + 1).keys()].slice(1).map((value) => {
    return  <option key={value} value={value}>{value}</option>
  })
  

  return (
    <section className={shoppingListStyles.shoppingBag}>
      <BagItem available_qty={available_qty} prod={products[0]}/>

    </section>
  )
}
