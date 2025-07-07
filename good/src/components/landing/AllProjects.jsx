import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Search, Filter, Github, ExternalLink, Code, Zap, Calendar, Eye, Heart } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
        {/* Project Image */}
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code className="w-12 h-12 text-slate-400" />
            </div>
          )}
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center"
          >
            <div className="flex gap-3">
              {project.liveUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              )}
              {project.githubUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                >
                  <Github className="w-5 h-5" />
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank');
                  } else {
                    // If no live URL, trigger the card click to open modal
                    onProjectClick(project);
                  }
                }}
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies?.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-xs text-slate-600 dark:text-slate-400 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs text-slate-500 dark:text-slate-400 rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                {project.technologies?.length || 0}
              </span>
              {project.features && (
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {project.features.length}
                </span>
              )}
            </div>
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              View →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.technologies?.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTech = selectedTech === 'All' || project.technologies?.includes(selectedTech);
      
      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech]);

  const popularTechs = allTechnologies.slice(1, 9); // Top 8 technologies

  return (
    <section id="all-projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-slate-900/50 dark:via-purple-900/10 dark:to-slate-800/50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Grid className="w-6 h-6 text-pink-600" />
            <span className="text-sm font-medium text-pink-600 uppercase tracking-wider">Complete Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Every Project Tells a Story
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            From simple experiments to complex applications, each project represents a journey of learning, 
            problem-solving, and creative expression in the world of technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all duration-300 text-slate-700 dark:text-slate-300"
              />
            </div>
            
            {/* Popular Tech Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <motion.button
                onClick={() => setSelectedTech('All')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTech === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                } backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50`}
              >
                All
              </motion.button>
              {popularTechs.map(tech => (
                <motion.button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  } backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <span className="text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50">
            {filteredProjects.length} of {projects.length} projects
            {selectedTech !== 'All' && ` using ${selectedTech}`}
          </span>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-4">
                No projects found
              </h3>
              <p className="text-slate-500 dark:text-slate-500 mb-6">
                Try adjusting your search or explore different technologies
              </p>
              <motion.button
                onClick={() => {setSearchTerm(''); setSelectedTech('All');}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { 
              number: projects.length, 
              label: "Total Projects", 
              color: "from-blue-600 to-purple-600",
              icon: Code
            },
            { 
              number: allTechnologies.length - 1, 
              label: "Technologies", 
              color: "from-purple-600 to-pink-600",
              icon: Zap
            },
            { 
              number: projects.filter(p => p.liveUrl).length, 
              label: "Live Demos", 
              color: "from-pink-600 to-red-600",
              icon: ExternalLink
            },
            { 
              number: projects.filter(p => p.githubUrl).length, 
              label: "Open Source", 
              color: "from-green-600 to-blue-600",
              icon: Github
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
