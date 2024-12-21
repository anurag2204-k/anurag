import React from 'react'

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  )
}

export default ProjectCard

