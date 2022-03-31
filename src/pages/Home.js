import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Gallery from '../components/Gallery'
import Featured from '../components/Featured'
import Newsletter from '../components/Newsletter'

export default function Home() {


  return (
    <React.Fragment>
        <Navbar itemCount={3} />
        <main className='homepage'>
          <Slider />
          <Gallery />
          <Featured /> 
          <Newsletter />
        </main>
        <Footer />
     


    </React.Fragment>
  )
}
