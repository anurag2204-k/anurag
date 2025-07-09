import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';
import { Search } from 'lucide-react';

// Mobile-optimized project card for iPhone context
const MobileProjectCard = ({ project, onClick }) => {
  const getImageUrl = (imageName) => {
    if (!imageName) return null;
    
    // Handle relative paths
    if (imageName.startsWith('./') || imageName.startsWith('../')) {
      return imageName.replace('./', '/');
    }
    
    // Handle absolute paths
    if (imageName.startsWith('/')) {
      return imageName;
    }
    
    // Default to public folder
    return `/${imageName}`;
  };

  const imageUrl = getImageUrl(project.thumbnail || project.image);

  return (
    <div 
      className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="w-full h-24 bg-slate-700 rounded-md mb-2 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center" style={{ display: imageUrl ? 'none' : 'flex' }}>
          <span className="text-white font-semibold text-sm">{project.title.charAt(0)}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-1">
        <h3 className="text-white font-semibold text-sm line-clamp-1">{project.title}</h3>
        <p className="text-slate-300 text-xs line-clamp-2">{project.shortDescription}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mt-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-slate-400 text-xs">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = ({ isIPhoneContext = false }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Filter projects based on search query only
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      return matchesSearch;
    });
    
    setFilteredProjects(filtered);
  }, [searchQuery]);

  return (
    <div className={`flex flex-col items-center py-6 px-4 min-h-screen ${
      isIPhoneContext ? 'bg-slate-900' : 'bg-gray-100'
    }`}>
      <div>
        <h1 className={`font-bold text-center mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-2 ${
          isIPhoneContext ? 'text-2xl' : 'text-4xl'
        }`}>
          My Projects
        </h1>
      </div>

      {/* Search Control - only show in desktop context */}
      {!isIPhoneContext && (
        <div className="w-full max-w-4xl mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects by name, description or technology..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className={`text-center py-8 ${isIPhoneContext ? 'text-slate-400' : 'text-gray-500'}`}>
          <p className={`mb-2 ${isIPhoneContext ? 'text-sm' : 'text-lg'}`}>No projects found matching your search</p>
          {!isIPhoneContext && (
            <button 
              className="text-blue-500 hover:underline"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Projects Grid */}
      <div className={`w-full ${
        isIPhoneContext 
          ? 'grid grid-cols-1 gap-3 max-w-xs' 
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl'
      }`}>
        {filteredProjects.map((project) => (
          isIPhoneContext ? (
            <MobileProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ) : (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          )
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
