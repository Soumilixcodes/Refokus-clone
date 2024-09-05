import React from 'react'

import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Marquees from './components/Marquees'

function App() {
  
const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 text-white '>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App