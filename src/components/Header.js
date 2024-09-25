import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="App Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Mental Health Support</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" cnlassName="hover:text-indigo-300">Home</Link>
          <Link to="/counselors" className="hover:text-indigo-300">Counselors</Link>
          <Link to="/forum" className="hover:text-indigo-300">Community Forum</Link>
          <Link to="/resources" className="hover:text-indigo-300">Resources</Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">Login</Link>
          <Link to="/signup" className="bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Sign Up</Link>
        </div>

        <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
            )}
        </button>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center bg-indigo-600 space-y-4 py-4">
            <Link to="/" className="hover:text-indigo-300">Home</Link>
            <Link to="/counselors" className="hover:text-indigo-300">Counselors</Link>
            <Link to="/forum" className="hover:text-indigo-300">Community Forum</Link>
            <Link to="/resources" className="hover:text-indigo-300">Resources</Link>
            <div className="flex space-x-4">
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">Login</Link>
              <Link to="/signup" className="bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
