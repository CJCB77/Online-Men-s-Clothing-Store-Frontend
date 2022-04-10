import React, { useEffect, useState } from 'react'
//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Suggestion from '../components/Suggestions'
//Hooks
import useWindowDimension from '../hooks/useWindowDimension'
//Styles
import productStyles from "../styles/product.module.css"
//Images
import bagIcon from "../imgs/icons/bag-white.svg"
//Products
import { products } from '../products'

export default function Product() {

  const [prod,setProd] = useState(products[1])
  const [mobileDisplay, setMobileDisplay] = useState(false)
  const windowWidth = useWindowDimension()

  function handleClick(event) {
    event.preventDefault()

    console.log(prod) 
  }

  function handleChange(e) {
    const {name,value} = e.target
    setProd((prevProd) => ({
      ...prevProd,
      [name]: value
    }))
  }

  useEffect(() => {
    if(windowWidth < 550){
      setMobileDisplay(true)
    }else {
      setMobileDisplay(false)
    }
  },[windowWidth])

  return (
    <React.Fragment>
      <Navbar itemCount={3}/>
      <hr  style={{margin:"0 1rem"}} />
      <section className={productStyles.product__details}>
        <div className={productStyles.info}>
          <img src={prod.imgXL} alt="" />
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias dignissimos quae, 
            accusamus minus error cupiditate culpa sit dicta commodi quaerat sint blanditiis, 
            fugit laboriosam natus asperiores similique rerum. Sed.
          </p>
        </div>
        <aside className={productStyles.sidebar}>
          <h1>{prod.name}</h1>
          <span className={productStyles.product__id}>Art. Id:000233</span>
          <span className={productStyles.product__price}>${prod.price.toFixed(2)}</span>
          {mobileDisplay &&
          <div>
            <h3>Product Details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias dignissimos quae, 
              accusamus minus error cupiditate culpa sit dicta commodi quaerat sint blanditiis, 
              fugit laboriosam natus asperiores similique rerum. Sed.
            </p>
          </div>}

          <form action="" id="form" name="form" className={productStyles.product__form}>
            <div className={productStyles.form__control}>
              <label>Size: <span>Please Select</span> | <a href="#">Size Chart</a></label>
              <select name="size" id="size" onChange={handleChange}>
                <option disabled defaultValue={""} > -- Select a size --</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
              </select>
            </div>

            <button type='submit' form='form' onClick={handleClick}>
              <img src={bagIcon} alt="" />
              Add to bag
            </button>

          </form>

        </aside>
      </section> 
      <Suggestion />
      <Footer />

    </React.Fragment>
  )
}
