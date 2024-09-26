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
        <div className="grid md:grid-cols-3 gap-8 mb-12 px-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Connect with a Counselor</h3>
            <p className="text-gray-600">Schedule a session with certified professionals.</p>
            <a
              href="/counselors"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Join the Community</h3>
            <p className="text-gray-600">Engage with others, share experiences, and provide support.</p>
            <a
              href="/forum"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Explore Forum
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Resources & Articles</h3>
            <p className="text-gray-600">Browse articles on managing stress, anxiety, and trauma.</p>
            <a
              href="/resources"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View Resources
            </a>
          </div>
        </div>

        <section className="bg-white rounded-lg shadow-md mb-12 mx-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create an account to access our support resources and services.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">Engage with counselors and join our community for ongoing support.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Healing</h3>
              <p className="text-gray-600">Access resources and personalized sessions to begin your journey.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 px-8">
          <h2 className="text-2xl font-semibold text-center mb-6">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"This app has been a lifesaver. The counselors are attentive, and the community is so supportive!"</p>
              <p className="text-right mt-4 font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"I love the resources provided! They have really helped me manage my anxiety better."</p>
              <p className="text-right mt-4 font-semibold">- Michael K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"Being able to talk to a counselor and share my thoughts in the community has been transformative."</p>
              <p className="text-right mt-4 font-semibold">- Emily W.</p>
            </div>
          </div>
        </section>

        <section 
          className="relative bg-indigo-600 text-white py-8 rounded-lg shadow-md mb-12 text-center mx-8" 
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/h1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className=" p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Stay updated with the latest mental health tips, resources, and community news.</p>
            <form className="max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border-2 border-gray-300 mb-4"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
