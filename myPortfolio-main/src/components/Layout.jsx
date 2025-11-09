import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from '../screens/Portfolio'
import LandingPage from '../screens/Home'
import PrivacyPolicy from '../screens/PrivacyPolicy'

const Layout = () => {
  return (
    
    <Routes>
      
        <Route index path='/' element={<LandingPage />} />
        <Route path="portfolio" element={<Portfolio/>} />
       <Route path="privacy-policy" element={<PrivacyPolicy/>} />
    </Routes>
 
  )
}

export default Layout