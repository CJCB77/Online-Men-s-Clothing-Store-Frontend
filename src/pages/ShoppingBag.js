import React from 'react'

//Import components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShoppingBagList from '../components/ShoppingBagList'
import PaymentDetails from '../components/PaymentDetails'


export default function ShoppingBag() {
  return (
    <React.Fragment>
      <Navbar itemCount={2}/>
      <section className='bag'>
        <hr />
        <h1>Shopping Bag</h1>
        <div className='bag__body'>
          <ShoppingBagList />
          <PaymentDetails />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
