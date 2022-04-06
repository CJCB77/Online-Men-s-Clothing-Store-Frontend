import React, { useEffect } from 'react'
import productListStyles from "../styles/productList.module.css"
import {products} from "../products"
//Imgs
import rightArrow from "../imgs/right-arrow3.svg"
import leftArrow from "../imgs/left-arrow.svg"


const productList = products.map((prod) => {

  const saleStyle = {
    textDecoration: prod.discount > 0 ? "line-through" : "none",
    fontWeight: "400" 
  }

  return(
    <article key={prod.id} className={productListStyles.item}>
      <a href="#">
        <img src={prod.img} alt="" />
      </a>
      <a href="#" className={productListStyles.item__title}>{prod.name}</a>
      <p className={productListStyles.item__price} style={saleStyle}>USD {prod.price.toFixed(2)}</p>
      {prod.discount > 0 && 
        <p className={productListStyles.item__discount}>
          Sale 
          <span className={productListStyles.discount__tag}>
            USD {(prod.price - (prod.discount * prod.price)).toFixed(2)}
          </span>
        </p>
      }
    </article>
  )
})

function NextPage() {
  return(
    
    <form action="" className={productListStyles.currentPageSelector}>
      <img src={leftArrow} alt="" />
      <select name="page" id="page" className={productListStyles.combo}>
        <option value="1">Page 1 of 3</option>
        <option value="2">Page 2 of 3</option>
        <option value="3">Page 3 of 3</option>
      </select>
      <img src={rightArrow} alt="" />
    </form>
  )
}
export default function ProductList() {

  return (
    <section className={productListStyles.list}>
      <h1>Shirts <span className={productListStyles.item__count}>(10)</span></h1>
      <div className={productListStyles.grid}>
        {productList}
      </div>
      <NextPage />
    </section>
  )
}
