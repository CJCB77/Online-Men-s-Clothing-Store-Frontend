import React, { useState } from 'react'
import newsletterStyles from "../styles/newsletter.module.css"
import send from "../imgs/send.svg"

export default function Newsletter(props) {

  const [email, setEmail] = useState("")
  

  function handleChange(e) {
    const {value} = e.target
    setEmail(value)


  }

  function handleClick(e) {
      console.log(email)
  }  

  return (
    <section className={newsletterStyles.newsletter} 
          style={props.light ? {backgroundColor:"#FAF9F8"} : {backgroundColor:"#F3EFEA"}}>
        <h1>Join Our Newsletter!</h1>
        <h2>Get timely updates for discounts or new products.</h2>
        
        <div className={newsletterStyles.suscriptionBox}>
            <input type="text" placeholder='youremail@email.com' 
              name="email" value={email} onChange={handleChange}/>
            <button onClick={handleClick}> <img src={send} alt="" /> </button>
        </div>

    </section>  
  )
}
