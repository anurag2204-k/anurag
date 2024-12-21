import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer rounded-lg overflow-hidden aspect-video"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Project screenshot ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Selected project screenshot"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;

