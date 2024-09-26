import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <h3 className="font-semibold text-lg">{question}</h3>
        {isOpen ? (
          <FaMinus className="text-indigo-500" />
        ) : (
          <FaPlus className="text-indigo-500" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="mt-2 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide counseling, community support forums, and a range of mental wellness resources.',
    },
    {
      question: 'How can I book a session?',
      answer: 'You can book a session directly through our app by selecting a counselor and choosing a time slot.',
    },
    {
      question: 'Is my information confidential?',
      answer: 'Yes, we prioritize your privacy and ensure that all information shared is kept confidential.',
    },
    {
      question: 'Can I switch counselors?',
      answer: 'Yes, you can switch counselors at any time through your account settings.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel a session up to 24 hours in advance without penalty.',
    },
    {
      question: 'Do you offer group sessions?',
      answer: 'Yes, we offer group sessions on various mental health topics throughout the month.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 container mx-auto px-[8rem] bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      <div className="text-lg text-gray-700">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
