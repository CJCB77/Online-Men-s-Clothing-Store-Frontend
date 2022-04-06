import React, { useEffect, useState } from 'react'
import sidebarStyles from "../styles/sidebar.module.css"

//Images
import optionsIcon from "../imgs/icons/options.svg"

//Hooks
import useWindowDimension from '../hooks/useWindowDimension'
import useBodyScrollLock from "../hooks/useBodyScrollLock"

function Header(props) {
  return(
    <React.Fragment>
      <div className={sidebarStyles.header}>
        <h1>Filter By</h1>
        {props.mobileDisplay &&  <img src={optionsIcon} onClick={props.handleClick} /> }
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
      {props.categories}
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

  const [categoryFilter, setCategoryFilter] = useState({
    chinos:false,
    dress:false,
    joggers:false,
    jeans:false,
    cargos:false,
    sweatpants:false
  })

  const [sizeFilter, setSizeFilter] = useState({
    xs:false,
    s:false,
    m:false,
    l:false,
    xl:false,
    xxl:false,
  })

  const [mobileDisplay, setMobileDisplay] = useState(false)
  const windowWidth = useWindowDimension()

  const [showMobileFilters, setMobileFilters] = useState(false)
  const [lockScroll, setLockScroll] = useBodyScrollLock()

  useEffect(() => {
    console.log(windowWidth)
    if(windowWidth < 550){
      setMobileDisplay(true)
    }else{
      setMobileDisplay(false)
      setMobileFilters(true)
    }
  },[windowWidth])

  function handleFilterSize(event) {
    const {checked, name} = event.target
    setSizeFilter( (prevFilters) => ({
      ...prevFilters,
      [name] : checked
    }))

  }

  function handleCategoryFilter(event) {
    const {checked, name} = event.target
    setCategoryFilter((prevFilters) => ({
      ...prevFilters,
      [name] :checked
    }))
  } 

  function handleFilterTab() {
    setMobileFilters(!showMobileFilters)
    setLockScroll(!lockScroll)
  }

  const checkedStyle = {
    border:"3px solid #545269",
  }

  const uncheckedStyle = {
    border:"1px solid #545269"
  }

  const showMobileFiltersStyle = {
    transform: "translateX(0)",
  }

  const hideMobileFiltersStyle = {
    transform: "translateX(-110%)",
  }

  const categoryFilters = Object.keys(categoryFilter).map((category,index) => {
    return(
      <div key={index} className={sidebarStyles.form__control}>
        <input type="checkbox" name={category} id={category} value={category} 
          onClick={handleCategoryFilter} />
        <label htmlFor={category}>{category}</label>
      </div>
    )
  })

  const sizeFilters = Object.keys(sizeFilter).map((size,index) => {
    return(
      <div key={index} className={sidebarStyles.form__box} 
          style={sizeFilter[size] ? checkedStyle : uncheckedStyle}>

        <input type="checkbox" name={size} id={size} value={size} 
          onClick={handleFilterSize} />
        <label htmlFor={size}>{size}</label>

      </div>
    )
  })

  return (
    <aside className={sidebarStyles.sidebar}>
      <Header mobileDisplay={mobileDisplay} handleClick={handleFilterTab}/>
      <div className={sidebarStyles.sidebar__body} 
          style={showMobileFilters ? showMobileFiltersStyle : hideMobileFiltersStyle}>
        <Categories categories={categoryFilters} />
        <Sizes sizes={sizeFilters} />
      </div>

    </aside>
  )
}
