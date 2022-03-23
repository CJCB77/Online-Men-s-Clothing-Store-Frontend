import React from 'react'
import "../styles/navbar.module.css"
import Logo from "../imgs/logo.svg"

function Navbar() {
  return (
    <nav>
        <div className='upper-links'>
            <input type="text" name="search" id="search" placeholder='Search clothing'/>
            <div>
                <a href="">Sign in</a>
                <a href="">Shopping bag</a>
            </div>
        </div>
        <img src={Logo} alt="" />
        <ul>
            <li>Shirts</li>
            <li>Jackets</li>
            <li>Pants</li>
            <li>Shoes</li>
            <li>Accesories</li>
        </ul>
        
        
    </nav>
  )
}

export default Navbar