import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-14">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are dedicated to providing mental health resources for individuals affected by social injustice or political unrest.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/counselors" className="hover:underline">Counselors</a></li>
              <li><a href="/forum" className="hover:underline">Community Forum</a></li>
              <li><a href="/resources" className="hover:underline">Resources</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          © 2024 Mental Health Support App. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer