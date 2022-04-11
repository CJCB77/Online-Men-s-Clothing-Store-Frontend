import React from 'react'

//Styles
import paymentStyles from "../styles/paymentDetails.module.css"
//Images
import cardsImg from "../imgs/Cards.png"


export default function PaymentDetails() {
  return (
    <section className={paymentStyles.checkout}>
      <article className={paymentStyles.details}>
        <div className={paymentStyles.details__header}>
          <h2>Details</h2>
          <span>Apply Discount</span>
        </div>
        <hr />
        <div className={paymentStyles.details__body}>
          <div className={paymentStyles.details__row}>
            <h5>Order Value</h5>
            <p>$200.99</p>
          </div>
          <div className={paymentStyles.details__row}>
            <h5>Shipping</h5>
            <p>Free</p>
          </div>
          <div className={paymentStyles.details__row}>
            <h5>Discount</h5>
            <p>-------</p>
          </div>
        </div>
        <hr />
        <div className={paymentStyles.details__total}>
          <h5>Total</h5>
          <p>$200.99</p>
        </div>
        <div className={paymentStyles.button__wrap}>
          <button>Continue to checkout</button>
        </div>
        <div className={paymentStyles.payment__option}>
          <h4>We accept:</h4>
          <img src={cardsImg} alt="" />
        </div>

      </article>
    </section>
  )
}
