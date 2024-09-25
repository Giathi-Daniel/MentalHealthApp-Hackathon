import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Mental Health Support App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">We’re Here to Help</h2>
          <p className="text-gray-700">
            Access mental health resources, connect with counselors, and join our community.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
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
      </main>
    </div>
  );
};

export default Home;
