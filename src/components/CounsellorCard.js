import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const CounsellorCard = ({ counselor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:bg-indigo-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={counselor.image} 
          alt={counselor.name} 
          className="h-40 w-40 object-cover rounded-full mx-auto mb-4" 
        />
        <h3 className="text-xl font-semibold text-center">{counselor.name}</h3>
        <p className="text-center text-indigo-600">{counselor.specialty}</p>
        <p className="text-center text-gray-600">{counselor.experience} years of experience</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-[#F0F0F0] px-4 py-2 rounded-lg hover:bg-[#273125] transition duration-300 ease-in"
          >
            Book Session
          </button>
        </div>
      </motion.div>
      <BookingModal
        counselor={counselor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CounsellorCard;
