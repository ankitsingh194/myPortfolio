import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {/* Company Info Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">Hey there! I'm Ankit Singh, a dedicated MERN stack developer who loves turning complex ideas into elegant, full-stack web solutions. .</p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Projects</h2>
          <ul>
            
              <li  className="mb-2">
                <Link to="portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
              </li>
           
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">Email: ankit79eo@gmail.com</p>
          <p className="text-gray-400">Address:  Delhi, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-8 pt-6">
        <p className="text-gray-500">&copy; 2025 Ankit Singh . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
