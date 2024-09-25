import React, { useState } from 'react';
import { FaHashtag, FaSmile, FaUserFriends } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Header from '../components/Header';
import MoodTracker from '../components/MoodTracker';
import SupportiveReactions from '../components/SupportiveReactions';
import DailyWellnessTips from '../components/DailyWellnessTips';

const CommunityForum = () => {
  const [selectedTopic, setSelectedTopic] = useState('general');
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Welcome to the General Discussion!', sender: 'Admin', time: '10:00 AM', mood: 'Happy' }
  ]);

  const topics = ['general', 'mental-health', 'coping', 'therapy'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You', time: '10:10 AM', mood: mood?.label }]);
      setMessage('');
      setMood(null);
    }
  };

  const handleReaction = (reaction) => {
    setMessages([...messages, { text: reaction, sender: 'Supporter', time: '10:11 AM', mood: null }]);
  };

  return (
    <>
      <Header />
      <div className="h-screen flex bg-gray-100">
        <div className="w-1/4 bg-indigo-600 text-white p-4 hidden md:flex flex-col">
          <h2 className="text-xl font-bold mb-6">Community Forum</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-200">Topics</h3>
            <ul className="mt-4">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className={`py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-700 transition ${
                    selectedTopic === topic ? 'bg-indigo-700' : ''
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  <FaHashtag className="inline-block mr-2" /> {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-grow p-6 bg-white shadow-md overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">#{selectedTopic}</h2>
            <DailyWellnessTips />

            <div>
              {messages.map((msg, index) => (
                <div key={index} className="mb-4">
                  <span className="font-bold text-indigo-600">{msg.sender}</span>
                  <span className="text-sm text-gray-500 ml-2">{msg.time}</span>
                  <span className={`ml-2 ${msg.mood ? 'text-yellow-500' : 'text-gray-500'}`}>
                    {msg.mood ? `(${msg.mood})` : ''}
                  </span>
                  <p className="text-gray-800">{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Supportive Reactions */}
            <SupportiveReactions onReact={handleReaction} />
          </div>

          {/* Mood Tracker and Message Input */}
          <div className="p-4 bg-gray-200">
            <MoodTracker onMoodSelect={setMood} />
            <form className="flex items-center" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="ml-4 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* User List */}
        <div className="w-1/4 bg-indigo-50 p-4 hidden md:flex flex-col">
          <h3 className="text-lg font-bold mb-4">Active Users</h3>
          <ul>
            <li className="py-2 flex items-center">
              <FaSmile className="text-indigo-600 mr-2" /> User 1
            </li>
            <li className="py-2 flex items-center">
              <FaSmile className="text-indigo-600 mr-2" /> User 2
            </li>
            <li className="py-2 flex items-center">
              <FaSmile className="text-indigo-600 mr-2" /> User 3
            </li>
          </ul>
        </div>
      </div>
    </>
    
  );
};

export default CommunityForum;
