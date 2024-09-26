import React, { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Header from '../components/Header';
import MoodTracker from '../components/MoodTracker';
import DailyWellnessTips from '../components/DailyWellnessTips';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CommunityForum = () => {
  const [selectedTopic, setSelectedTopic] = useState('general');
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState(null);

  const [messages, setMessages] = useState({
    general: [{ text: 'Welcome to the General Discussion!', sender: 'Admin', time: '10:00 AM', mood: 'Happy' }],
    'mental-health': [],
    coping: [],
    therapy: [],
  });

  const avatars = {
    'User 1': 'https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_1280.jpg',
    'User 2': 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg',
    'User 3': 'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg',
    You: 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg',
    API: `${process.env.PUBLIC_URL}/api.png`,
    Admin: `${process.env.PUBLIC_URL}/admin.png` // Add the admin avatar path here
  };

  const topics = ['general', 'mental-health', 'coping', 'therapy'];

  const handleSendMessage = async (e) => {
    try {
      e.preventDefault();
      const url = `https://gemmie.onrender.com/api/prompt`;

      const userMessage = {
        text: message,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mood: mood?.label,
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedTopic]: [...prevMessages[selectedTopic], userMessage],
      }));

      setMessage('');

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ prompt: message }),
        headers: {
          'content-type': 'application/json',
        },
      });

      const parseRes = await response.json();
      if (parseRes.error) {
        console.log(parseRes.error, message);
      } else {
        const apiMessage = {
          text: parseRes.text.replace(/<[^>]+>/g, ''),
          sender: 'API',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          mood: null,
        };

        setMessages((prevMessages) => ({
          ...prevMessages,
          [selectedTopic]: [...prevMessages[selectedTopic], apiMessage],
        }));
      }

      setMood(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex bg-gray-100">
        <div className="w-1/4 bg-[#008080] text-white p-4 hidden md:flex flex-col mt-[3.9rem]">
          <h2 className="text-xl font-bold mb-6 text-[#E0E0E0]">Community Forum</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-200">Topics</h3>
            <ul className="mt-4">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className={`py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300 ease-in-out ${
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

        <div className={`flex-1 flex flex-col justify-between mt-[3.7rem]`}>
          <div className="flex-grow p-6 shadow-md overflow-y-auto">
            <CSSTransition key={selectedTopic} timeout={300} classNames="fade">
              <h2 className="text-xl font-bold mb-4 transition-opacity">#{selectedTopic}</h2>
            </CSSTransition>

            {selectedTopic === 'mental-health' && <DailyWellnessTips />}

            <TransitionGroup className="message-list">
              {messages[selectedTopic].map((msg, index) => (
                <CSSTransition key={index} timeout={300} classNames="fade">
                  <div className={`mb-4 flex items-start ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${msg.sender === 'You' ? 'bg-green-100' : 'bg-gray-200'} p-4 rounded-lg`}>
                      <div className="flex items-center mb-1">
                        <img src={avatars[msg.sender] || avatars['Admin']} alt={`${msg.sender} avatar`} className="w-8 h-8 rounded-full mr-2" />
                        <span className="font-bold text-indigo-600">{msg.sender}</span>
                        <span className="text-sm text-gray-500 ml-2">{msg.time}</span>
                      </div>
                      <div>{msg.sender === 'API' ? msg.text : msg.text}</div>
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>

          <div className="p-4 bg-gray-200">
            {selectedTopic === 'mental-health' && <MoodTracker onMoodSelect={setMood} />}
            <form className="flex items-center" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              />
              <button
                type="submit"
                className="ml-4 bg-[#008080] text-[#f0f0f0] p-3 rounded-lg hover:bg-[#38b570] transition"
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        <div className="w-1/4 bg-indigo-50 p-4 hidden md:flex flex-col mt-[3.9rem]">
          <h3 className="text-lg font-bold mb-4">Active Users</h3>
          <ul>
            <li className="mb-2 flex items-center">
              <img src={avatars['User 1']} alt="User 1" className="w-8 h-8 rounded-full mr-2" />
              <span>User 1</span>
            </li>
            <li className="mb-2 flex items-center">
              <img src={avatars['User 2']} alt="User 2" className="w-8 h-8 rounded-full mr-2" />
              <span>User 2</span>
            </li>
            <li className="mb-2 flex items-center">
              <img src={avatars['User 3']} alt="User 3" className="w-8 h-8 rounded-full mr-2" />
              <span>User 3</span>
            </li>
            <li className="mb-2 flex items-center">
              <img src={avatars['Admin']} alt="Admin" className="w-8 h-8 rounded-full mr-2" />
              <span>Admin</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommunityForum;
