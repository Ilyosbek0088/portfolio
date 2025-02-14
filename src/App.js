import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home/home'
import Skills from './pages/mySkills/skills'

const App = () => {
  return (
    <div className='font-bold'>
    <Navbar/>
    <Home/>
    <Skills/>
    </div>
  )
}

export default App