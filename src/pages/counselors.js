import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";

const counselorsData = [
  { id: 1, name: 'Dr. Jane Doe', specialty: 'Trauma Specialist', experience: '10 years', image: 'https://cdn.pixabay.com/photo/2017/09/06/20/36/doctor-2722941_1280.jpg' },
  { id: 2, name: 'Mr. John Smith', specialty: 'Anxiety & Depression', experience: '8 years', image: 'https://media.istockphoto.com/id/1358954903/photo/shot-of-a-mature-doctor-standing-alone-in-his-clinic-with-his-arms-folded.jpg?s=612x612&w=0&k=20&c=yzdvK4p6E3QVKy0gSnGogqlkSqXwGKQHEVO5Du310JU=' },
  { id: 3, name: 'Ms. Emma Johnson', specialty: 'Grief Counseling', experience: '6 years', image: 'https://media.istockphoto.com/id/1471886621/photo/young-adult-woman-gestures-and-talks-during-interview-with-businesswoman.jpg?s=612x612&w=0&k=20&c=57hyY3qxneb2MzzXnjpYzasqJWuPpaTVm92Kgf5bGgQ=' },
  { id: 4, name: 'Dr. Chris Evans', specialty: 'Family & Couples Therapy', experience: '15 years', image: 'https://media.istockphoto.com/id/2035526310/photo/portrait-of-young-successful-hispanic-doctor-inside-clinic-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=XqngRSGkBzuHT9w56UQNiXy1FEMp_UpOLDXVoERJSQc=' },
];

const CounselorCard = ({ counselor }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-500 hover:bg-indigo-50"
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src={counselor.image} 
        alt={counselor.name} 
        className="h-32 w-32 object-cover rounded-full mx-auto mb-6 shadow-md"
      />
      <h3 className="text-2xl font-semibold text-center text-gray-800">{counselor.name}</h3>
      <p className="text-center text-indigo-600 text-lg">{counselor.specialty}</p>
      <p className="text-center text-gray-500">{counselor.experience} of experience</p>
      <div className="flex justify-center mt-6">
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
          Book Session
        </button>
      </div>
    </motion.div>
  );
};

const Counselors = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-24">
          <motion.h1 
            className="text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Meet Our World-Class Counselors
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Connecting you with experts to support your mental wellness journey.
          </motion.p>
          <motion.button 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-100 transition"
            whileHover={{ scale: 1.1 }}
          >
            Explore More
          </motion.button>
        </section>

        {/* Available Counselors Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Our Counselors</h2>
              <p className="text-gray-600">Choose from our team of certified professionals.</p>
            </div>
            <div>
              <select className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:border-indigo-600 transition">
                <option value="">Sort by Specialty</option>
                <option value="trauma">Trauma</option>
                <option value="anxiety">Anxiety</option>
                <option value="grief">Grief</option>
                <option value="family">Family Therapy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {counselorsData.map(counselor => (
              <CounselorCard key={counselor.id} counselor={counselor} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">What Clients Are Saying</h2>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["My experience with counseling changed my life.", 
              "The support I received was incredible.", 
              "I found a counselor who truly understood me."
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg text-gray-700 mb-4">"{testimonial}"</p>
                <p className="text-right font-semibold text-gray-800">- Client {String.fromCharCode(65 + index)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-indigo-600 text-white py-16 text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
          >
            Need Help Choosing a Counselor?
          </motion.h2>
          <p className="mb-8">Contact our team for personalized assistance in finding the right counselor for your needs.</p>
          <motion.button 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Support Now
          </motion.button>
        </section>
      </div>
    </>
  );
};

export default Counselors;
