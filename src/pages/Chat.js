import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I assist you today?', sender: 'counselor', time: '10:15 AM' },
    { text: 'I need help with anxiety.', sender: 'user', time: '10:16 AM' },
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setInputValue('');
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 hover:bg-gray-300 p-2 rounded-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
              alt="Avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold">Counselor 1</h3>
              <p className="text-xs text-gray-600">Last message preview...</p>
            </div>
          </li>
        </ul>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="bg-white p-4 shadow">
          <div className="flex items-center space-x-4">
            <img
              src="https://media.istockphoto.com/id/1373476036/photo/female-therapist-smiles-encouragingly-at-unrecognizable-woman.jpg?s=612x612&w=0&k=20&c=aDA8hptqzOEe8yTC3QHK8eXjt7q6EQhknpAT7sITpf0="
              alt="Counselor Avatar"
              className="rounded-full w-10 h-10"
            />
            <div>
              <h3 className="text-sm font-semibold">Counselor 1</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'flex justify-end' : ''}`}>
              <div className={`p-2 rounded-lg shadow max-w-xs ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
                <p>{msg.text}</p>
              </div>
              <span className="text-xs text-gray-500 ml-2">{msg.time}</span>
            </div>
          ))}
        </div>

        <footer className="bg-white p-4 flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSend}
            className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Chat;
