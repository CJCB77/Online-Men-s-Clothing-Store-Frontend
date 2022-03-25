import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <React.Fragment>
        <Navbar itemCount={3} />
        <main className='homepage'>
          <Slider />

        </main>
        <Footer />

    </React.Fragment>
  )
}
