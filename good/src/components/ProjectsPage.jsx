import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';
import { Search } from 'lucide-react';

const ProjectsPage = () => {
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
    <div className="bg-gray-100 flex flex-col items-center py-12 px-4 min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-2">
          My Projects
        </h1>
      </div>

      {/* Search Control */}
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

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          <p className="text-lg mb-2">No projects found matching your search</p>
          <button 
            className="text-blue-500 hover:underline"
            onClick={() => setSearchQuery('')}
          >
            Clear search
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
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
