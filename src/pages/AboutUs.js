import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import MissionAndVision from '../components/MissionandVission';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200 select-none">
      <Header />
      <AboutHero />

      <MissionAndVision />
      <Team />

      <section className="py-16 container mx-auto px-5 md:px-14">
        <h2 className="text-3xl font-bold mb-6">Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Counseling Sessions</h3>
            <p className="text-gray-700">
              Our licensed professionals provide one-on-one counseling sessions tailored to individual needs. We focus on creating a safe environment to explore feelings and develop coping strategies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Community Forums</h3>
            <p className="text-gray-700">
              Join our interactive community forums to connect with peers who share similar experiences. These forums provide a space for support, discussion, and sharing resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Self-Help Resources</h3>
            <p className="text-gray-700">
              Access a variety of self-help resources including articles, videos, and guided exercises designed to enhance mental wellness and provide coping strategies for daily challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
            <p className="text-gray-700">
              We offer immediate support for those in crisis. Our trained professionals are available 24/7 to provide assistance and guidance in urgent situations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Workshops & Webinars</h3>
            <p className="text-gray-700">
              Participate in our regular workshops and webinars on various mental health topics, led by experts. These sessions aim to educate and empower our community.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutUs;
