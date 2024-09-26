import React from 'react';

const MissionVisionCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
    </div>
  );
};

const MissionAndVision = () => {
  const mission = {
    title: "Our Mission",
    description: "Our mission is to empower individuals on their mental health journeys by offering accessible counseling services and resources. We strive to create a safe space for everyone."
  };

  const vision = {
    title: "Our Vision",
    description: "Our vision is to foster a world where mental health is prioritized and openly discussed, creating an inclusive community that supports individuals in their pursuit of wellness."
  };

  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Vision</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 p-4">
          <MissionVisionCard title={mission.title} description={mission.description} />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <MissionVisionCard title={vision.title} description={vision.description} />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
