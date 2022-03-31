import React from 'react'
import signInStyles from "../styles/signin.module.css"
import cross from "../imgs/crossBlue.svg"

export default function SignIn() {

  

  return (
    <section className={signInStyles.signIn}>
      <article className={signInStyles.container}>
        <img src={cross} alt="" className={signInStyles.close}/>
        <h1>Sign In</h1>
        <h3>Sign into your account for discounts, rewards and orders.</h3>
        <div className={signInStyles.form__control}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={signInStyles.form__control}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <a href="#" className={signInStyles.recover}>Forgot password?</a>
        <a href="#" className={signInStyles.signIn__btn}>Sign in</a>
        <a href="#" className={signInStyles.register__btn}>Become a member</a>
      </article>
    </section>
  )
}
