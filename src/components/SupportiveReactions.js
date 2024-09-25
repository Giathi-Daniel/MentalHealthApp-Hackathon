import React from 'react';

const SupportiveReactions = ({ onReact }) => {
  const reactions = [
    'Stay strong 💪',
    'You’re not alone 💙',
    'Take it one step at a time 🧘‍♀️',
    'I’m here for you 🤗'
  ];

  return (
    <div className="flex space-x-4">
      {reactions.map((reaction, index) => (
        <button
          key={index}
          className="bg-indigo-100 text-indigo-700 p-2 rounded-lg hover:bg-indigo-200 transition"
          onClick={() => onReact(reaction)}
        >
          {reaction}
        </button>
      ))}
    </div>
  );
};

export default SupportiveReactions;
