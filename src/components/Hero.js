import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
      <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/lQhpetkwWnM?autoplay=1&loop=1&playlist=lQhpetkwWnM&controls=0&showinfo=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="relative z-10 flex flex-col items-start h-full text-white pt-[10rem]">
        <h2 className="text-3xl font-semibold mb-4 ml-4">We’re Here to Help</h2>
        <p className="text-lg mb-8 max-w-2xl ml-4 w-[300px]">
          Access mental health resources, connect with counselors, and join our supportive community. 
          Our platform offers tools to manage stress, trauma, and mental health concerns in a safe and welcoming space.
        </p>
        <div className="flex space-x-4 ml-4">
          <Link 
            to='/contact'
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </Link>
          <Link 
            to='/about'
            className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-150"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
