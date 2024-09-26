import React, { useState } from 'react';
import { FaSmile, FaMeh, FaFrown, FaGrinStars } from 'react-icons/fa';

const flashEffect = `
@keyframes flash {
  0% {
    background-color: white;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: white;
  }
}
.flash {
  animation: flash 0.5s;
}
`;

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

    const moodContainer = document.getElementById('mood-container');
    moodContainer.classList.add('flash');
    setTimeout(() => {
      moodContainer.classList.remove('flash');
    }, 500);
  };

  return (
    <div id="mood-container" className="flex space-x-4 justify-center items-center mb-6">
      <style>{flashEffect}</style> 
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
