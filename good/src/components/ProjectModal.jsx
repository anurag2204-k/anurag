import React, { useState } from 'react';
import { XIcon, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-[90%] max-w-4xl h-[90%] max-h-[90%] overflow-hidden relative flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-transparent bg-gradient-to-r from-gray-800 via-gray-500 to-black bg-clip-text text-lg md:text-2xl font-bold truncate">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close Modal"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          <p className="text-gray-600 mb-6 text-sm md:text-base">{project.description}</p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-transparent bg-gradient-to-r from-gray-800 via-gray-500 to-black bg-clip-text text-lg md:text-xl font-semibold mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-transparent bg-gradient-to-r from-gray-800 via-gray-500 to-black bg-clip-text text-lg md:text-xl font-semibold mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Project Images */}
          <div className="mb-6">
            <h3 className="text-transparent bg-gradient-to-r from-gray-800 via-gray-500 to-black bg-clip-text text-lg md:text-xl font-semibold mb-2">
              Project Images
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-lg overflow-hidden aspect-video"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-60"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size project screenshot"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
