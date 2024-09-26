import React from 'react';
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
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
          <div className="flex justify-between mb-6">
            <Link 
              to="/forgot-password"
              className="text-indigo-500 hover:underline transition duration-300 ease-in-out"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="w-full bg-[#008080] text-[#F0F0F0] py-2 rounded-lg font-semibold hover:bg-[#98FF98] transition duration-300 ease-in-out">
            Login
          </button>
        </form>

        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out">
            Continue with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link 
            to="/signup"
            className="text-indigo-500 hover:underline transition duration-300 ease-in-out"
          >
             Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
