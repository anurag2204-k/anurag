import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const handleLinkClick = (e, url) => {
    e.stopPropagation(); // Prevent card onClick from firing
    window.open(url, '_blank');
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden mt-4">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-transparent bg-gradient-to-r from-gray-800 to-white bg-clip-text text-xl font-bold mb-2 truncate">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
          {project.githubUrl && (
            <button
              onClick={(e) => handleLinkClick(e, project.githubUrl)}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={(e) => handleLinkClick(e, project.liveUrl)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
