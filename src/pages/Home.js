import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Mental Health Support App</h1>
      </header> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">We’re Here to Help</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Access mental health resources, connect with counselors, and join our supportive community. 
            Our platform offers tools to manage stress, trauma, and mental health concerns in a safe and welcoming space.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create an account to access our support resources and services.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">Engage with counselors and join our community for ongoing support.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <span className="text-indigo-600 text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Healing</h3>
              <p className="text-gray-600">Access resources and personalized sessions to begin your journey.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
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

        <section className="bg-indigo-600 text-white p-8 rounded-lg shadow-md mb-12 text-center">
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
