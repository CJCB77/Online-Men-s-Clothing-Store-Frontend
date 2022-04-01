import React, { useState } from 'react'
import signUpStyles from "../styles/signup.module.css"
import cross from "../imgs/crossBlue.svg"

import "animate.css"

function FormField(props) {
  return(
    <div className={signUpStyles.form__control}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} id={props.name} 
        value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default function SignUp(props) {

  const [userData, setUserData] = useState({
    email:"",
    name:"",
    lastname:"",
    password:"",
    birthdate:"",
    phone:"",
    receivePromos:false
  })


  function handleChange(e) {
    const {name,value,type,checked} = e.target

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: type === "checkbox" ? checked : value
    }))
    console.log(userData)
  }

  function handleSignIn(event) {
    event.preventDefault()
    console.log(userData)

  }

  function handleClose() {
    props.open((prevState) => !prevState)
    props.close((prev) => !prev)
  }


  return (
    <section className={signUpStyles.signUp}>
      <article className={`${signUpStyles.container} animate__animated animate__fadeInUp`} >
        <img src={cross} alt="" className={signUpStyles.close} onClick={handleClose}/>
        <h1>Sign Up</h1>
        <h3>Become a member to access discounts, rewards and order from anywhere.</h3>
        <div className={signUpStyles.form}>
          <FormField name="email" 
                    label="Email:"
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
          />

          <FormField name="name" 
                    label="First Name:"
                    type="text"
                    value={userData.name}
                    onChange={handleChange}
          />
          <FormField name="lastname" 
                    label="Last Name:"
                    type="text"
                    value={userData.lastname}
                    onChange={handleChange}
          />
          <FormField name="password" 
                    label="Create Password:"
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
          />
          <FormField name="birthdate" 
                    label="Birth of Date:"
                    type="date"
                    value={userData.birthdate}
                    onChange={handleChange}
          />
          <FormField name="phone" 
                    label="Phone number:"
                    type="text"
                    value={userData.phone}
                    onChange={handleChange}
          />
          <FormField name="receivePromos" 
                    label="Yes email me special offers,discounts,new products notifications, special rewards and more."
                    type="checkbox"
                    value={userData.receivePromos}
                    onChange={handleChange}
          />
        </div>

        <a href="#" className={signUpStyles.recover}>Forgot password?</a>
        <a href="#" className={signUpStyles.signUp__btn} onClick={handleSignIn}>Sign Up</a>
        <a href="#" className={signUpStyles.register__btn}>Back to sign in</a>
      </article>
    </section>
  )
}
