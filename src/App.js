import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home/home'
import Skills from './pages/mySkills/skills'
import Myworks from './pages/myworks/myworks'
import Contact from './pages/contact/contact'

const App = () => {
  return (
    <div className='font-bold'>
    <Navbar/>
    <Home/>
    <Skills/>
    <Myworks/>
    <Contact/>
    </div>
  )
}

export default App