import React, { useEffect, useState } from 'react'
import footerStyles from "../styles/footer.module.css"
import facebookIcon from "../imgs/socials/facebook.svg"
import instagramIcon from "../imgs/socials/instagram.svg"
import twitterIcon from "../imgs/socials/twitter.svg"
import youtubeIcon from "../imgs/socials/youtube.svg"
import pinterestIcon from "../imgs/socials/pinterest.svg"
import footerLogo from "../imgs/footerLogo.svg"
import plusIcon from "../imgs/plus.svg"

//Custom Hooks
import useWindowDimension from '../hooks/useWindowDimension'

export default function Footer() {

  const windowWidth = useWindowDimension()
 

  function handleClick(e) {
    const items = e.target.nextElementSibling
    if (windowWidth < 1000 ){
      if (items.style.display == "") {
        items.style.display = "block"
      }else{
        items.style.display = ""
      } 
    }
  }

  return (
    <footer>
      <main className={footerStyles.footer__links}>
        <div className={footerStyles.col}>
            <button className={footerStyles.col__title} onClick={handleClick}>
              Customer Service
            </button>
            <ul className={footerStyles.col__items} >
                <li className={footerStyles.item}>Contact Us</li>
                <li className={footerStyles.item}>Shipping</li>
                <li className={footerStyles.item}>Returns</li>
                <li className={footerStyles.item}>Find a Store</li>
                <li className={footerStyles.item}>Discounts</li>
            </ul>
            <hr />
        </div>
        <div className={footerStyles.col}>
            <button className={footerStyles.col__title} onClick={handleClick}>My Account</button>
            <ul className={footerStyles.col__items}>
                <li className={footerStyles.item}>Sign in</li>
                <li className={footerStyles.item}>My account</li>
                <li className={footerStyles.item}>Register</li>
                <li className={footerStyles.item}>Update Password</li>
            </ul>
            <hr />
        </div>
        <div className={footerStyles.col}>
            <button className={footerStyles.col__title} onClick={handleClick} >Shop</button>
            <ul className={footerStyles.col__items}>
                <li className={footerStyles.item}>Shirts</li>
                <li className={footerStyles.item}>Jackets</li>
                <li className={footerStyles.item}>Caps</li>
                <li className={footerStyles.item}>Shoes</li>
                <li className={footerStyles.item}>Pants</li>
            </ul>
            <hr />
        </div>
        <div className={footerStyles.col}>
            <button className={footerStyles.col__title} onClick={handleClick} >JC's clothing</button>
            <ul className={footerStyles.col__items}>
                <li className={footerStyles.item}>About us</li>
                <li className={footerStyles.item}>Become a member</li>
            </ul>
            <hr />
        </div>
      </main>

      <h3 className={footerStyles.socials__title}>Connect with us</h3>
        
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.socials}>
            <a href="#">
                <img className={footerStyles.icon} src={facebookIcon} alt="" />
            </a>
            <a href="#">
                <img className={footerStyles.icon} src={twitterIcon} alt="" />
            </a>
            <a href="#">
                <img className={footerStyles.icon} src={instagramIcon} alt="" />
            </a>
            <a href="#">
                <img className={footerStyles.icon} src={youtubeIcon} alt="" />
            </a>
            <a href="#">
                <img className={footerStyles.icon} src={pinterestIcon} alt="" />
            </a>
        </div>
      </div>
        
      <h4 className={footerStyles.disclaimer}>
        This site was designed and developed by Carlos Coral, all images are royalty free.
      </h4>

      <div className={footerStyles.wrapper}>
        <img src={footerLogo} alt="" className={footerStyles.footer__logo}/>
      </div>

    </footer>
  )
}
