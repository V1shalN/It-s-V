import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import CustomCursor from './components/cursor/customCursor';
import About from './components/about/about';
import TopView from './components/topView/topView'
import AboutComp from './components/aboutcomp/aboutComp'
import ContactUs from './components/contactUs/contactUs'

const HomePageMain = () => {
  return (
    <div>
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <TopView />
      <AboutComp />
      <ContactUs/>
    </div>
    
  )
}

export default HomePageMain
