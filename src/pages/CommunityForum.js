import React, { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Header from '../components/Header';
import MoodTracker from '../components/MoodTracker';
import SupportiveReactions from '../components/SupportiveReactions';
import DailyWellnessTips from '../components/DailyWellnessTips';
import AvatarUpload from '../components/AvatarUpload';
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

  const [avatars, setAvatars] = useState({
    'User 1': 'https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_1280.jpg',
    'User 2': 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg',
    'User 3': 'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg',
  });

  const topics = ['general', 'mental-health', 'coping', 'therapy'];

  const topicStyles = {
    general: 'bg-white',
    'mental-health': 'bg-blue-50',
    coping: 'bg-yellow-50',
    therapy: 'bg-green-50',
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages({
        ...messages,
        [selectedTopic]: [...messages[selectedTopic], { text: message, sender: 'You', time: '10:10 AM', mood: mood?.label }]
      });
      setMessage('');
      setMood(null);
    }
  };

  const handleReaction = (reaction) => {
    setMessages({
      ...messages,
      [selectedTopic]: [...messages[selectedTopic], { text: reaction, sender: 'Supporter', time: '10:11 AM', mood: null }]
    });
  };

  const handleAvatarChange = (username, newAvatar) => {
    setAvatars({
      ...avatars,
      [username]: newAvatar,
    });
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

        <div className={`flex-1 flex flex-col justify-between mt-[3.7rem] ${topicStyles[selectedTopic]}`}>
          <div className="flex-grow p-6 shadow-md overflow-y-auto">
            <CSSTransition key={selectedTopic} timeout={300} classNames="fade">
              <h2 className="text-xl font-bold mb-4 transition-opacity">#{selectedTopic}</h2>
            </CSSTransition>

            {selectedTopic === 'mental-health' && <DailyWellnessTips />}

            <TransitionGroup className="message-list">
              {messages[selectedTopic].map((msg, index) => (
                <CSSTransition key={index} timeout={300} classNames="fade">
                  <div className="mb-4">
                    <span className="font-bold text-indigo-600">{msg.sender}</span>
                    <span className="text-sm text-gray-500 ml-2">{msg.time}</span>
                    <span className={`ml-2 ${msg.mood ? 'text-yellow-500' : 'text-gray-500'}`}>
                      {msg.mood ? `(${msg.mood})` : ''}
                    </span>
                    <p className="text-gray-800">{msg.text}</p>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>

            {selectedTopic === 'mental-health' && <SupportiveReactions onReact={handleReaction} />}
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
            <li className="py-2 flex items-center">
              <AvatarUpload onAvatarChange={(newAvatar) => handleAvatarChange('User 1', newAvatar)} />
              <div>
                <span className="font-semibold">User 1</span>
                <p className="text-sm text-gray-600">Feeling Happy</p>
              </div>
            </li>
            <li className="py-2 flex items-center">
              <AvatarUpload onAvatarChange={(newAvatar) => handleAvatarChange('User 2', newAvatar)} />
              <div>
                <span className="font-semibold">User 2</span>
                <p className="text-sm text-gray-600">Feeling Stressed</p>
              </div>
            </li>
            <li className="py-2 flex items-center">
              <AvatarUpload onAvatarChange={(newAvatar) => handleAvatarChange('User 3', newAvatar)} />
              <div>
                <span className="font-semibold">User 3</span>
                <p className="text-sm text-gray-600">Feeling Motivated</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </>
  );
};

export default CommunityForum;
