import React, { useState } from 'react'
import sidebarStyles from "../styles/sidebar.module.css"

function Header() {
  return(
    <React.Fragment>
      <div className={sidebarStyles.header}>
        <h1>Filter By</h1>
        <button className={sidebarStyles.clear}>Clear all</button>
      </div>
      <hr className={sidebarStyles.header__divider}/>
    </React.Fragment>
  )
}

function Categories(props) {
  return(
  <section className={sidebarStyles.categories}>
    <h2 className={sidebarStyles.section__name}>Category</h2>
    <button className={sidebarStyles.clear}>Clear</button>
    
    <form action="" className={sidebarStyles.categories__form}>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='chinos' id='chinos' value="chinos" />
        <label htmlFor="chinos">Chinos</label>
      </div>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='dress' id='dress' value="dress" />
        <label htmlFor="dress">Dress</label>
      </div>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='joggers' id='joggers' value="joggers" />
        <label htmlFor="joggers">Joggers</label>
      </div>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='jeans' id='jeans' value="jeans" />
        <label htmlFor="jeans">Jeans</label>
      </div>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='cargos' id='cargos' value="cargos" />
        <label htmlFor="cargos">Cargos</label>
      </div>
      <div className={sidebarStyles.form__control}>
        <input type="checkbox" name='sweapants' id='sweapants' value="sweapants" />
        <label htmlFor="sweapants">Sweatpants</label>
      </div>
    </form>
    <hr className={sidebarStyles.divider} />
  </section>
  )
}

function Sizes(props) {
  return(
    <section className={sidebarStyles.size}>
    
      <h2 className={sidebarStyles.section__name}>Size</h2>
      <button className={sidebarStyles.clear}>Clear</button>

      <form action="" className={sidebarStyles.size__form}>
        {props.sizes}
      </form>

      <hr />
    </section>
  )
} 




export default function ProductSidebar() {

  const [sizeFilter, setSizeFilter] = useState({
    xs:false,
    s:false,
    m:false,
    l:false,
    xl:false,
    xxl:false,
  })

  function handleCheckbox(event) {
    const {checked, name} = event.target
    setSizeFilter( (prevFilters) => ({
      ...prevFilters,
      [name] : checked
    }))

  }

  const checkedStyle = {
    border:"3px solid #545269",
  }

  const uncheckedStyle = {
    border:"1px solid #545269"
  }


  const sizeFilters = Object.keys(sizeFilter).map((size,index) => {
    return(
      <div key={index} className={sidebarStyles.form__box} 
      style={sizeFilter[size] ? checkedStyle : uncheckedStyle}>
        <input type="checkbox" name={size} id={size} value={size} onClick={handleCheckbox} />
        <label htmlFor={size}>{size}</label>
      </div>
    )
  })

  return (
    <aside className={sidebarStyles.sidebar}>
      <Header />
      <Categories />
      <Sizes sizes={sizeFilters} />

    </aside>
  )
}
