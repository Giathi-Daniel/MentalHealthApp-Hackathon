import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#008080] text-[#E0E0E0] py-4 px-6 shadow-md fixed w-full z-50 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="App Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-xl font-bold text-[#98FF98]">SereneSphere</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#98FF98] transtion duration-150 ease-in">Home</Link>
          <Link to="/counselors" className="hover:text-[#98FF98] transtion duration-150 ease-in">Counselors</Link>
          <Link to="/forum" className="hover:text-[#98FF98] transtion duration-150 ease-in">Community Forum</Link>
          <Link to="/resources" className="hover:text-[#98FF98] transtion duration-150 ease-in">Resources</Link>
          <Link to="/contact" className="hover:text-[#98FF98] transtion duration-150 ease-in">Contact Us</Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transtion duration-150 ease-in">Login</Link>
          <Link to="/signup" className="bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 transtion duration-300 ease-in-out">Sign Up</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-[#F0F0F0]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#F0F0F0]" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center bg-[#008080] space-y-4 py-4">
            <Link to="/" className="hover:text-[#98FF98] transtion duration-150 ease-in">Home</Link>
            <Link to="/counselors" className="hover:text-[#98FF98] transtion duration-150 ease-in">Counselors</Link>
            <Link to="/forum" className="hover:text-[#98FF98] transtion duration-150 ease-in">Community Forum</Link>
            <Link to="/resources" className="hover:text-[#98FF98] transtion duration-150 ease-in">Resources</Link>
            <Link to="/contact" className="hover:text-[#98FF98] transtion duration-150 ease-in">Contact Us</Link>
            <div className="flex space-x-4">
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transtion duration-150 ease-in">Login</Link>
              <Link to="/signup" className="bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 transtion duration-300 ease-in-out">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
