import React, { useState, useEffect } from 'react';

const DailyWellnessTips = () => {
  const tips = [
    'Take a deep breath and remind yourself, you are strong.',
    'It’s okay to ask for help when you need it.',
    'Self-care is not selfish, it’s essential.',
    'Remember, progress is progress, no matter how small.'
  ];

  const [currentTip, setCurrentTip] = useState('');

  useEffect(() => {
    const tipIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(tips[tipIndex]);
  }, []);

  return (
    <div className="bg-indigo-50 p-4 rounded-lg shadow-md mb-6">
      <p className="text-indigo-600 font-semibold text-center">
        {currentTip}
      </p>
    </div>
  );
};

export default DailyWellnessTips;
