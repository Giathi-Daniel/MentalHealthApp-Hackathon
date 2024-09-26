import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for reset password logic (e.g., Firebase Auth)
    // After API call
    setSubmitted(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="m-auto bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-4">Reset Password</h1>
        {submitted ? (
          <p className="text-green-600 text-center">
            A password reset link has been sent to your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#008080] text-[#F0F0F0] py-2 rounded-lg font-semibold hover:bg-[#98FF98] transition"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <a href="/login" className="text-indigo-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
