import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductSidebar from '../components/ProductSidebar'
import ProductList from '../components/ProductList'

export default function ProductsByCategory() {
  return (
    <React.Fragment>
      <Navbar itemCount={1}/>
      <hr className="section__start" />
      <section className="product__list">
        <ProductSidebar />
        <ProductList />
        
      </section>
      <Footer />
    </React.Fragment>
  )
}
