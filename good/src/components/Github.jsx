import React from 'react';

const Github = () => {
  const handleClick = () => {
    window.open('https://github.com/anurag2204-k', '_blank'); // Replace with your GitHub URL
  };

  return (
    <div onClick={handleClick} className="w-12 h-12 bg-blue-500 rounded-lg mb-1 flex justify-center items-center cursor-pointer">
      <img src="/app.png" alt="GitHub" className="w-full h-full object-cover" />
    </div>
  );
};

export default Github;
