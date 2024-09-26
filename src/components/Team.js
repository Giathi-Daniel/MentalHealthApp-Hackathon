import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamMember = ({ name, title, image, bio, socialLinks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="h-32 w-32 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <p className="mt-2 text-gray-500">{bio}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {socialLinks.map((link) => (
          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Jane Doe',
      title: 'Licensed Psychologist',
      image: 'https://cdn.pixabay.com/photo/2017/09/06/20/36/doctor-2722941_1280.jpg',
      bio: 'With over 10 years of experience, Dr. Doe specializes in trauma and PTSD counseling.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
    {
      name: 'John Smith',
      title: 'Clinical Social Worker',
      image: 'https://cdn.pixabay.com/photo/2021/06/09/01/41/worker-6322043_1280.jpg',
      bio: 'John has a passion for helping individuals navigate their mental health challenges.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
    {
      name: 'Sara Lee',
      title: 'Mental Health Advocate',
      image: 'https://media.istockphoto.com/id/576590528/photo/business-woman-holding-folder-with-documents.jpg?s=612x612&w=0&k=20&c=DatbKUjcU2L1ZzHxYbZAVg0yhailabkQin6ptAPFjeQ=',
      bio: 'Sara uses her experiences to advocate for mental health awareness and education.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
    {
      name: 'Michael Brown',
      title: 'Therapist',
      image: 'https://cdn.pixabay.com/photo/2018/03/27/16/24/corporal-3266508_1280.jpg',
      bio: 'Michael focuses on cognitive behavioral therapy and helps clients achieve their goals.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
    {
      name: 'Emily Johnson',
      title: 'Wellness Coach',
      image: 'https://cdn.pixabay.com/photo/2016/08/02/16/32/coach-1563998_1280.jpg',
      bio: 'Emily helps individuals create and maintain a healthy lifestyle through positive habits.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
    {
      name: 'David Wilson',
      title: 'Counseling Intern',
      image: 'https://cdn.pixabay.com/photo/2013/04/03/06/08/counseling-99740_1280.jpg',
      bio: 'David is currently completing his internship, focusing on providing support and resources.',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: <FaFacebook size={20} /> },
        { platform: 'Twitter', url: '#', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: '#', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: '#', icon: <FaInstagram size={20} /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-xs mx-4 mb-8">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
