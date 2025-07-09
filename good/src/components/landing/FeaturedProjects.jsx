import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Github, ExternalLink, Calendar, Users, Code, Zap } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto  no-scrollbar shadow-2xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {project.shortDescription}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>
          </div>

          {project.thumbnail && (
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Key Features
              </h3>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                {project.features?.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden">
          {/* Project Image */}
          <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Code className="w-16 h-16 text-slate-400" />
              </div>
            )}
            
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6"
            >
              <div className="flex gap-2">
                {project.liveUrl && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                )}
                {project.githubUrl && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-xs text-slate-600 dark:text-slate-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs text-slate-500 dark:text-slate-400 rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Project Stats */}
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Code className="w-4 h-4" />
                  {project.technologies?.length || 0}
                </span>
                {project.features && (
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {project.features.length}
                  </span>
                )}
              </div>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-purple-50/50 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600 uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Projects That Define Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A carefully curated selection of projects that showcase my passion for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#all-projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default FeaturedProjects;
