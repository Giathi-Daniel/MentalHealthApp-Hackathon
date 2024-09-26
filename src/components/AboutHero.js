import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 flex flex-col md:flex-row bg-gradient-to-r from-indigo-600 to-purple-600 pt-[9rem] px-10">
      <div className="md:w-1/2 text-center md:text-left container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-white">About Us</h1>
        <p className="mt-4 text-lg text-gray-200">
            We are dedicated to providing comprehensive mental health support and resources, empowering individuals on their journey toward well-being through personalized counseling and community engagement.
        </p>
        <p className="mt-4 text-lg text-gray-200">
            Our commitment extends beyond just counseling; we aim to foster a strong community that promotes mental wellness through workshops, support groups, and educational resources. Together, we can break the stigma surrounding mental health and create a culture of openness and understanding.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2019/07/03/15/41/park-4314817_960_720.jpg"
          alt="Mental Health Support"
          className="rounded-lg shadow-lg max-w-full h-auto md:block" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
