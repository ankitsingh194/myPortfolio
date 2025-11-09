import React from 'react'
import ContactForm from './GetinTouchFrom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-50  flex flex-col items-center">
    {/* Navbar */}
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-gray-50 hover:shadow-md">
      <div className="text-xl font-bold  items-center">
        <Link to="/">
        <div className="text-blue-600 font-bold text-[21px] ">Ankit Singh</div>
        <div className="text-gray-500 text-[12px] mt-[-5px]">Assurance of Excellence!</div>
        </Link>
      </div>
      <div className='flex space-x-9'>
      <ul className="hidden md:flex mt-[10px] space-x-6 text-gray-700">
        <li className="cursor-pointer hover:text-blue-600 font-medium text-[16px]"><Link to="privacy-policy">Privacy-Policy</Link></li>
        <li className="cursor-pointer hover:text-blue-600 font-medium text-[16px]"><Link to="portfolio">Portfolio</Link></li>
       
      </ul>
      
      </div>
    </nav>
    </div>
  )
}

export default Navbar