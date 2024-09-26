const SupportiveReactions = ({ onReact }) => {
  const reactions = ['Stay strong', 'I’m here for you', 'You’re not alone'];

  const handleReactionClick = (reaction) => {
    onReact(reaction);
  };

  return (
    <div className="mt-4">
      {reactions.map((reaction, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-blue-600 transition bounce"
          onClick={() => handleReactionClick(reaction)}
        >
          {reaction}
        </button>
      ))}
    </div>
  );
};

export default SupportiveReactions;
