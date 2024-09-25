import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const resourcesData = [
  {
    title: 'Managing Stress During Political Unrest',
    image: 'https://media.istockphoto.com/id/1488847775/vector/protesters-rallying-outside-parliament-vector-illustration.jpg?s=612x612&w=0&k=20&c=cIm8WuQXL002TfkbpQ9G2DINw9hGcnRqnNC_sUUd9jc=',
    date: 'September 25, 2024',
    author: 'Dr. Jane Doe',
    content: `
      Political unrest can be overwhelming, leaving individuals feeling helpless. 
      It’s important to manage stress during such times. Start by focusing on what you can control—your thoughts, emotions, and actions. 
      Practice mindfulness, limit media exposure, and engage in calming activities such as yoga or meditation. 
      Seek support from friends, family, or mental health professionals.
    `,
  },
  {
    title: 'Coping with Anxiety During Social Movements',
    image: 'https://cdn.pixabay.com/photo/2019/08/09/13/52/depression-4395124_1280.jpg',
    date: 'September 22, 2024',
    author: 'Dr. Emily Smith',
    content: `
      In the face of social movements, anxiety can creep in as we face the unknown. 
      It’s important to acknowledge your feelings rather than suppress them. 
      Try grounding techniques, such as deep breathing exercises or focusing on your surroundings. 
      Journaling can also help express these emotions. Stay connected with those who share your values to foster a sense of community.
    `,
  },
  {
    title: 'Understanding Trauma and Recovery',
    image: 'https://cdn.pixabay.com/photo/2021/06/27/20/32/lighthouse-6369963_1280.jpg',
    date: 'September 15, 2024',
    author: 'Dr. John Thompson',
    content: `
      Trauma can have lasting effects on mental and emotional well-being. 
      The first step toward recovery is acknowledging the trauma. 
      Therapy can play a crucial role in processing traumatic events. 
      Engaging in activities that promote physical and emotional well-being, such as exercise or creative hobbies, is also helpful.
    `,
  },
];

const Resources = () => {
  return (
    <>
        <Header />
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <main className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-4xl font-bold text-center mb-12">Mental Health Resources</h1>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8">Featured Articles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {resourcesData.slice(0, 2).map((resource, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                            {resource.date} | By {resource.author}
                            </p>
                            <p className="text-gray-700">
                            {resource.content.slice(0, 150)}...
                            </p>
                            <a
                            href="#e"
                            className="inline-block mt-4 text-indigo-600 hover:underline"
                            >
                            Read More
                            </a>
                        </div>
                        ))}
                    </div>
                </section>

                <section className="grid md:grid-cols-3 gap-8">
                {resourcesData.map((resource, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        {resource.date} | By {resource.author}
                    </p>
                    <p className="text-gray-700">
                        {resource.content.slice(0, 100)}...
                    </p>
                    <a
                        href="res"
                        className="inline-block mt-4 text-indigo-600 hover:underline"
                    >
                        Read More
                    </a>
                    </div>
                ))}
                </section>
            </main>

            <Footer />
        </div>
    </>
  );
};

export default Resources;
