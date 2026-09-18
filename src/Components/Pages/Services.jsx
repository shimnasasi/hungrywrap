import React from 'react'
import Navbar from '../Layout/Navbar'
import SpecialsBanner from '../Layout/SpecialsBanner'
import Footer from '../Layout/Footer'
import SpecialCards from '../Layout/SpecialCards'
import WhyChooseUs from '../Layout/WhyChooseUs'
import CTA from '../Layout/CTA'

const Services = () => {
  return (
    <div>

        <Navbar/>
        <SpecialsBanner/>
        <SpecialCards/>
        <WhyChooseUs/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Services