import React from 'react'
import Navbar from '../componands/Navbar'
import Banner from '../componands/Banner'
import Books from '../componands/Books'
import Footer from '../componands/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Books/>
      <Footer/>
    </div>
  )
}

export default Home
