
import React, { useState } from 'react';

const IndependentWindow = () => {
  const [showNewPage, setShowNewPage] = useState(false);
  const [newPageContent, setNewPageContent] = useState('');

  const handleLinkClick = () => {
    // Fetch the content for the new page and update the state
    fetchNewPageContent().then((content) => {
      setNewPageContent(content);
      setShowNewPage(true);
    });
  };

  const handleCloseNewPage = () => {
    setShowNewPage(false);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">Independent Window</h2>
      {!showNewPage ? (
        <>
          <p>This is the content of the independent window.</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleLinkClick}
          >
            Go to New Page
          </button>
        </>
      ) : (
        <div>
          <p>{newPageContent}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleCloseNewPage}
          >
            Close New Page
          </button>
        </div>
      )}
    </div>
  );
};

const fetchNewPageContent = () => {
  // Fetch the content for the new page and return it as a Promise
  return new Promise((resolve) => {
    // Simulating fetching content from a server
    setTimeout(() => {
      resolve('This is the content of the new page.');
    }, 2000);
  });
};

export default IndependentWindow;