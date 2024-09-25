import React, { useState } from 'react';
import { FaSmile, FaMeh, FaFrown, FaGrinStars } from 'react-icons/fa';

const MoodTracker = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { icon: <FaGrinStars />, label: 'Happy' },
    { icon: <FaSmile />, label: 'Content' },
    { icon: <FaMeh />, label: 'Neutral' },
    { icon: <FaFrown />, label: 'Stressed' }
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  return (
    <div className="flex space-x-4 justify-center items-center mb-6">
      {moods.map((mood, index) => (
        <div
          key={index}
          className={`cursor-pointer p-4 rounded-full bg-gray-200 ${
            selectedMood?.label === mood.label ? 'ring-2 ring-indigo-500' : ''
          }`}
          onClick={() => handleMoodClick(mood)}
        >
          {mood.icon}
        </div>
      ))}
    </div>
  );
};

export default MoodTracker;
