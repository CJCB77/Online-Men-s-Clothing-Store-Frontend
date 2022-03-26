import React from 'react'
import footerStyles from "../styles/footer.module.css"
import facebookIcon from "../imgs/socials/facebook.svg"
import instagramIcon from "../imgs/socials/instagram.svg"
import twitterIcon from "../imgs/socials/twitter.svg"
import youtubeIcon from "../imgs/socials/youtube.svg"
import pinterestIcon from "../imgs/socials/pinterest.svg"
import footerLogo from "../imgs/footerLogo.svg"

export default function Footer() {
  return (
    <footer>
        <main className={footerStyles.footer__links}>
            <div className={footerStyles.col}>
                <h3 className={footerStyles.col__title}>Customer Service</h3>
                <ul className={footerStyles.col__items}>
                    <li className={footerStyles.item}>Contact Us</li>
                    <li className={footerStyles.item}>Shipping</li>
                    <li className={footerStyles.item}>Returns</li>
                    <li className={footerStyles.item}>Find a Store</li>
                    <li className={footerStyles.item}>Discounts</li>
                </ul>
            </div>
            <div className={footerStyles.col}>
                <h3 className={footerStyles.col__title}>My account</h3>
                <ul className={footerStyles.col__items}>
                    <li className={footerStyles.item}>Sign in</li>
                    <li className={footerStyles.item}>My account</li>
                    <li className={footerStyles.item}>Register</li>
                    <li className={footerStyles.item}>Update Password</li>
                </ul>
            </div>
            <div className={footerStyles.col}>
                <h3 className={footerStyles.col__title}>Shop</h3>
                <ul className={footerStyles.col__items}>
                    <li className={footerStyles.item}>Shirts</li>
                    <li className={footerStyles.item}>Jackets</li>
                    <li className={footerStyles.item}>Caps</li>
                    <li className={footerStyles.item}>Shoes</li>
                    <li className={footerStyles.item}>Pants</li>
                </ul>
            </div>
            <div className={footerStyles.col}>
                <h3 className={footerStyles.col__title}>JC's Clothing</h3>
                <ul className={footerStyles.col__items}>
                    <li className={footerStyles.item}>About us</li>
                    <li className={footerStyles.item}>Become a member</li>
                </ul>
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
