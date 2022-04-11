import React from 'react'
//Styles
import shoppingListStyles from "../styles/shoppingList.module.css"
//Products for testing
import { products } from '../products'
//Images
import removeIcon from "../imgs/icons/remove.svg"

// Max item number
const MAX_QTY = 10

function handleRemove() {
  console.log("Removed Item")
}

function BagItem(props) {
  return(
  <article className={shoppingListStyles.item}>
    <div className={shoppingListStyles.item__img}>
      <img src={props.prod.img} alt="" />
    </div>
    <div className={shoppingListStyles.details}>
      <div className={shoppingListStyles.details__header}>
        <h3>{props.prod.name}</h3>
        <img src={removeIcon} alt="" onClick={handleRemove} />
      </div>
      <div className={shoppingListStyles.details__content} >
        <p className={shoppingListStyles.details__price}>${props.prod.price.toFixed(2)}</p>
        <p>Color: Grey</p>
        <form action="" className={shoppingListStyles.qty}>
          <label htmlFor="qty">Qty: </label>
          <select name="qty" id="qty">
            {props.availableQty}
          </select>
        </form>
        <p>Size: {props.prod.size}</p>
        <p>Total: {props.prod.price.toFixed(2)} </p>
      </div>
    </div>
  </article>
  )
}

export default function ShoppingBagList() {

  const availableQty = [...Array(MAX_QTY + 1).keys()].slice(1).map((value) => {
    return  <option key={value} value={value}>{value}</option>
  })
  
  const myShoppingCart = products.slice(0,4).map((prod) => {
    return(
      <BagItem key={prod.id} availableQty={availableQty} prod={prod} />
    )
  })

  return (
    <section className={shoppingListStyles.shoppingBag}>
      {myShoppingCart}
    </section>
  )
}
