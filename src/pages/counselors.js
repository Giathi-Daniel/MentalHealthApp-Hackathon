import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header"

const counselorsData = [
  { id: 1, name: 'Dr. Jane Doe', specialty: 'Trauma Specialist', experience: '10 years', image: '/images/counselor1.jpg' },
  { id: 2, name: 'Mr. John Smith', specialty: 'Anxiety & Depression', experience: '8 years', image: '/images/counselor2.jpg' },
  { id: 3, name: 'Ms. Emma Johnson', specialty: 'Grief Counseling', experience: '6 years', image: '/images/counselor3.jpg' },
  { id: 4, name: 'Dr. Chris Evans', specialty: 'Family & Couples Therapy', experience: '15 years', image: '/images/counselor4.jpg' },
];

const CounselorCard = ({ counselor }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:bg-indigo-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={counselor.image} alt={counselor.name} className="h-40 w-40 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">{counselor.name}</h3>
      <p className="text-center text-indigo-600">{counselor.specialty}</p>
      <p className="text-center text-gray-600">{counselor.experience} of experience</p>
      <div className="flex justify-center mt-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Book Session</button>
      </div>
    </motion.div>
  );
};

const Counselors = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="bg-indigo-600 text-white py-16 px-4 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Meet Our Certified Counselors
          </motion.h1>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            We have a team of experienced professionals ready to support your mental health journey.
          </motion.p>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold">Available Counselors</h2>
              <p className="text-gray-600">Find the right professional for your specific needs.</p>
            </div>
            <div>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600 transition">
                <option value="">Sort by Specialty</option>
                <option value="trauma">Trauma</option>
                <option value="anxiety">Anxiety</option>
                <option value="grief">Grief</option>
                <option value="family">Family Therapy</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counselorsData.map(counselor => (
              <CounselorCard key={counselor.id} counselor={counselor} />
            ))}
          </div>
        </section>

        <section className="bg-indigo-600 text-white py-12 text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
          >
            Need Help Finding a Counselor?
          </motion.h2>
          <p className="mb-8">Contact our support team, and we’ll assist you in finding the right counselor for your needs.</p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Support
          </button>
        </section>
       </div>
    </>
  );
};

export default Counselors;
