import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      timestamp: new Date(),
      sender: 'user', 
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
