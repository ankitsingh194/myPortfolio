import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from '../screens/Portfolio'
import LandingPage from '../screens/Home'

const Layout = () => {
  return (
    
    <Routes>
      
        <Route index path='/' element={<LandingPage />} />
        <Route path="portfolio" element={<Portfolio/>} />
      
    </Routes>
 
  )
}

export default Layout