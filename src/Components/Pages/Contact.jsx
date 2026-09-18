import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import ContactBanner from '../Layout/ContactBanner'
import ContactForm from '../Layout/ContactForm'
import ContactMap from '../Layout/ContactMap'
import CTA from '../Layout/CTA'

const Contact = () => {
  return (
    <div>
<Navbar/>
<ContactBanner/>
<ContactForm/>
<ContactMap/>
<CTA/>
<Footer/>

    </div>
  )
}

export default Contact