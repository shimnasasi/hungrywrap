import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Services from './Components/Pages/Services'

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/specials" element={<Services/>} />
</Routes>


</BrowserRouter>
    </div>
  )
}

export default App