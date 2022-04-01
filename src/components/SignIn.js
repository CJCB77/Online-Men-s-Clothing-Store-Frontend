import React, { useState } from 'react'
import signInStyles from "../styles/signin.module.css"
import cross from "../imgs/crossBlue.svg"

import "animate.css"

function FormField(props) {
  return(
    <div className={signInStyles.form__control}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} id={props.name} 
        value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default function SignIn(props) {

  const [credentials, setCredentials] = useState({email:"", password:""})

  function handleChange(event) {
    event.preventDefault()
    const {name,value} = event.target
    setCredentials(() => ({
      ...credentials,
      [name]:value
    }))
  }

  function handleSignIn(event) {
    event.preventDefault()
    console.log(credentials)
  }

  function handleClose() {
    props.open((prevState) => !prevState)
    props.close((prev) => !prev)
  }

  return (
    <section className={signInStyles.signIn}>
      <article className={`${signInStyles.container} animate__animated animate__fadeInUp`} >
        <img src={cross} alt="" className={signInStyles.close} onClick={handleClose}/>
        <h1>Sign In</h1>
        <h3>Sign into your account for discounts, rewards and orders.</h3>

        <FormField name="email" 
                   label="Email:"
                   type="text"
                   value={credentials.email}
                   onChange={handleChange}
        />

        <FormField name="password"
                   label="Password:"
                   type ="password"
                   value={credentials.password}
                   onChange={handleChange}  
        />

        <a href="#" className={signInStyles.recover}>Forgot password?</a>
        <a href="#" className={signInStyles.signIn__btn} onClick={handleSignIn}>Sign in</a>
        <a href="#" className={signInStyles.register__btn}>Become a member</a>
      </article>
    </section>
  )
}
