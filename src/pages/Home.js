import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8">

        <section className="bg-white rounded-lg shadow-md mb-12 md:mx-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Your Wellness Toolbox</h2>
          <div className="grid md:grid-cols-3 gap-8 px-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
              <p className="text-gray-600">Log your emotions and track your mood patterns over time.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guided Meditations</h3>
              <p className="text-gray-600">Access mindfulness exercises to help you stay grounded and present.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
              <p className="text-gray-600">Set and track your wellness goals to stay motivated on your mental health journey.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md mb-12 px-5 md:px-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create an account to access personalized mental health tools.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore Features</h3>
              <p className="text-gray-600">Utilize wellness tools, join support groups, and access expert resources.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-[#273125] text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Support</h3>
              <p className="text-gray-600">Engage with counselors or join the community forum for ongoing support.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md mb-12 md:mx-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Benefits of Using SereneSphere</h2>
          <div className="grid md:grid-cols-3 gap-8 px-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Personalized Resources</h3>
              <p className="text-gray-600">Receive recommendations based on your specific mental health needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with others in a safe, judgment-free environment.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Get access to certified mental health professionals anytime.</p>
            </div>
          </div>
        </section>

        <section
          className="relative bg-indigo-600 text-white py-8 rounded-lg shadow-md mb-12 text-center md:mx-8"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/h1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Stay updated with the latest mental health tips, resources, and community news.</p>
            <form className="max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border-2 border-gray-300 mb-4"
              />
              <button className="bg-[#008080] text-[#F0F0F0] px-6 py-3 rounded-lg font-semibold hover:bg-[#273125] transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
