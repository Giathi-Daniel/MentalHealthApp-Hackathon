import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChatProvider } from './contexts/ChatContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import ForgotPassword from './pages/ForgotPassword';
import Counselors from './pages/counselors';
import CommunityForum from './pages/CommunityForum';
import Resources from './pages/Resources';

function App() {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/counselors" element={<Counselors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forum" element={<CommunityForum />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
}

export default App;
