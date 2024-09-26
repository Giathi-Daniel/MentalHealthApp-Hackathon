import React from 'react';
import Header from '../components/Header';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Header />

      <section className="bg-gray-100 mt-0 pt-[4.3rem]">
        <div className="w-full h-[25rem]">
          <iframe
            title="Location Map"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509418!2d144.95373531531624!3d-37.81720997975184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12a1f5%3A0x5045675218cee9c5!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1645041604446!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center mt-[-4rem] mb-8">
          <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row p-6 w-11/12 md:w-4/5 lg:w-[87%] transition-transform duration-300 transform hover:scale-105">
            <div className="w-full md:w-1/2 pr-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#00C853]">Ask Us Anything</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name (e.g. Robert Smith)"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address (e.g. example@mail.com)"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone (Optional, e.g. +880 25896 336)"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                />
                <textarea
                  rows="4"
                  placeholder="Message (Leave your message)"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#008080] hover:bg-[#2F4F4F] text-[#F0F0F0] font-semibold py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="border-l border-gray-300 mx-4 hidden md:block"></div>

            <div className="flex flex-col w-full md:w-1/2 pl-4 py-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#00C853]">Contact Info</h2>
                <p className="text-gray-700 py-4">
                    <strong>MindCare HQ:</strong><br />
                    MindCare Inc,<br />
                    456 Serenity Lane,<br />
                    Calmville, Dreamland
                </p>
                <p className="text-gray-700"><strong>Call Us:</strong></p>
                <p className="text-gray-700">Mobile: (+99) - 9876 - 5432</p>
                <p className="text-gray-700">Hotline: 1-800 - MINDCARE</p>
                <p className="text-gray-700 pt-4"><strong>Email Us:</strong></p>
                <p className="text-gray-700">Info: support@mindcareapp.com</p>
                <p className="text-gray-700">Support: help@mindcareapp.com</p>
                <p className="text-gray-700 pt-4"><strong>Follow Us:</strong></p>
                <div className="flex space-x-4 mb-8 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition duration-200">
                    <FaFacebook className="h-6 w-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-200">
                    <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition duration-200">
                    <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition duration-200">
                    <FaLinkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
          </div>
        </div>



        <div className="mt-8">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
