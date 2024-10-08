import React from 'react';
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-indigo-500 px-3">
      <div className="m-auto bg-white shadow-lg rounded-lg p-10 max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out">
            Sign up
          </button>
        </form>

        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out">
            Continue with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link 
            to="/login"
            className="text-indigo-500 hover:underline transition duration-300 ease-in-out"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
