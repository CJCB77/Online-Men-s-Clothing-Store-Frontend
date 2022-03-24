import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <React.Fragment>
        <Navbar itemCount={3} />
        <div>Home</div>
        <Footer />

    </React.Fragment>
  )
}
