import React, { useEffect, useState } from 'react'
import navStyles from "../styles/navbar.module.css"
import Logo from "../imgs/logo.svg"
import Profile from "../imgs/account.svg"
import Bag from "../imgs/bag.svg"
import Menu from "../imgs/menu.svg"
import RightArrow from "../imgs/right-arrow2.svg"
import Cross from "../imgs/cross.svg"

function Navbar(props) {
  
  const [showMobileMenu, setMobileMenu] = useState(false)
  
  const mobileStyle = {
      left: showMobileMenu ? 0 : "-100%"
  }


  useEffect(()=> {
    const body = document.querySelector("body")
    if(showMobileMenu){
        body.style.overflow = "hidden"
    }

    return () => {
        body.style.overflow = ""
    }

  },[showMobileMenu])

  return (

    <nav className='navbar'>
        <div className={navStyles.nav__upper}>
            <input type="text" name="search" id="search" placeholder='Search clothing...' 
                className={navStyles.search}/>
            <div className={navStyles.wrapper}>
                <div className={navStyles.wrapper}>
                    <img src={Profile} alt="" className={navStyles.icon}/>
                    <a href="#" className={navStyles.link}>Sign in</a>
                </div>
                <div className={navStyles.wrapper}>
                    <div className={navStyles.badge__container}>
                        <img src={Bag} alt="" className={navStyles.icon}/>
                        <span className={navStyles.badge}>{props.itemCount}</span>

                    </div>
                    <a href="#" className={navStyles.link}>Shopping bag</a>
                </div>
            </div>
        </div>
        <div className={navStyles.logo__container}>
            <button className={navStyles.menuIcon} onClick={() => setMobileMenu(!showMobileMenu)}>
                <img src={Menu} alt=""/>
            </button>
            <img src={Logo} alt="" className={navStyles.logo}/>
        </div>
        
        <ul className={navStyles.categories} style={mobileStyle}>
            <li className={`${navStyles.categories__link} ${navStyles.mobile__title}`}>
                Shop By Department
            </li>
            <li className={navStyles.categories__link}>
                <a href="">All</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Shirts</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Jackets</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Pants</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Shoes</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Accesories</a>
                <img src={RightArrow} alt="right-arrow" className={navStyles.mobile__arrow} />

            </li>
        </ul>
        {showMobileMenu &&  <div className={navStyles.categories__overlay}>
                <button onClick={() => setMobileMenu(!showMobileMenu)}>
                    <img src={Cross} alt="" className={navStyles.categories__close}/>
                </button>
        </div>}

    </nav>

  )
}

export default Navbar