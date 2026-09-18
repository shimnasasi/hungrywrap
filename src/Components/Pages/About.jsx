import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import AboutBanner from '../Layout/AboutBanner'
import OurStory from '../Layout/OurStory'
import AboutValues from '../Layout/AboutValues'
import CTA from '../Layout/CTA'

const About = () => {
  return (
    <div>
<Navbar/>

<AboutBanner/>
<OurStory/>
<AboutValues/>
<CTA/>
<Footer/>

    </div>
  )
}

export default About