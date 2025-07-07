import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Brain, 
  Sparkles,
  Globe,
  Server,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-blue-500" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-600" },
      { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-slate-700" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", color: "bg-cyan-500" },
      { name: "Shadcn/UI", iconUrl: "https://ui.shadcn.com/favicon.ico", color: "bg-purple-500" },
      { name: "Vue.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "bg-green-500" },
      { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-600" },
      { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-blue-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-600" },
      { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "bg-gray-700" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-500" },
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-blue-700" },
      { name: "Prisma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "bg-indigo-600" },
      { name: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "bg-pink-500" },
      { name: "REST APIs", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg", color: "bg-orange-500" },
      { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "bg-yellow-600" }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-500" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-blue-600" },
      { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "bg-red-600" },
      { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "bg-blue-700" },
      { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-orange-500" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-600" },
      { name: "Go", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", color: "bg-cyan-600" },
      { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "bg-purple-600" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-orange-600" },
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-600" },
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "bg-yellow-600" },
      { name: "Vercel", iconUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png", color: "bg-black" },
      { name: "Netlify", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "bg-teal-500" },
      { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "bg-blue-600" },
      { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "bg-purple-600" },
      { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "bg-orange-500" }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-purple-900/30"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                } backdrop-blur-sm border border-white/20 dark:border-slate-700/50`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredSkill(skillIndex)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300">
                {/* Tech Icon */}
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to a generic code icon if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "30+", label: "Technologies", color: "from-blue-500 to-cyan-500" },
            { number: "3+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
            { number: "15+", label: "Projects Built", color: "from-green-500 to-emerald-500" },
            { number: "∞", label: "Learning", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
