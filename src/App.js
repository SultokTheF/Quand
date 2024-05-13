import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Popular from './Components/Popular/Popular'
import Offer from './Components/Offers/Offer'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </>
  )
}

export default App