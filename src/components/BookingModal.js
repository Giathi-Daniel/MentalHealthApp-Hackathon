import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const BookingModal = ({ counselor, isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleBooking = () => {
    console.log('Booking button clicked'); 
    if (date && time) {
      alert(`Session booked with ${counselor.name} on ${date} at ${time}`);
      onClose();
    } else {
      alert('Please select a date and time');
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Book a session with {counselor.name}</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <FiX size={24} />
          </button>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700">Select Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleBooking}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingModal;
