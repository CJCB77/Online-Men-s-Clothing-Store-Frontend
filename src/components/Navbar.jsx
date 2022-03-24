import React from 'react'
import navStyles from "../styles/navbar.module.css"
import Logo from "../imgs/logo.svg"
import Profile from "../imgs/account.svg"
import Bag from "../imgs/bag.svg"

function Navbar(props) {
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
        <img src={Logo} alt="" className={navStyles.logo}/>
        <ul className={navStyles.categories}>
            <li className={navStyles.categories__link}>
                <a href="">All</a>
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Shirts</a>
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Jackets</a>
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Pants</a>
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Shoes</a>
            </li>
            <li className={navStyles.categories__link}>
                <a href="">Accesories</a>
            </li>
        </ul>
        
        
    </nav>
  )
}

export default Navbar