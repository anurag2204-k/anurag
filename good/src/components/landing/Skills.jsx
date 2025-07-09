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
      { name: "React.js", icon: "⚛️", color: "bg-blue-500" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-600" },
      { name: "Next.js", icon: "▲", color: "bg-slate-700" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
      { name: "Framer Motion", icon: "🎭", color: "bg-purple-500" },
      { name: "Vue.js", icon: "💚", color: "bg-green-500" },
      { name: "HTML5", icon: "🌐", color: "bg-orange-600" },
      { name: "CSS3", icon: "🖌️", color: "bg-blue-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "🟢", color: "bg-green-600" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-700" },
      { name: "MongoDB", icon: "🍃", color: "bg-green-500" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700" },
      { name: "Prisma", icon: "🔺", color: "bg-indigo-600" },
      { name: "GraphQL", icon: "🔗", color: "bg-pink-500" },
      { name: "REST APIs", icon: "🔌", color: "bg-orange-500" },
      { name: "Firebase", icon: "🔥", color: "bg-yellow-600" }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", icon: "🟨", color: "bg-yellow-500" },
      { name: "Python", icon: "🐍", color: "bg-blue-600" },
      { name: "Java", icon: "☕", color: "bg-red-600" },
      { name: "C++", icon: "⚡", color: "bg-blue-700" },
      { name: "SQL", icon: "📊", color: "bg-orange-500" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-600" },
      { name: "Go", icon: "🔵", color: "bg-cyan-600" },
      { name: "PHP", icon: "🔧", color: "bg-purple-600" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: "🌿", color: "bg-orange-600" },
      { name: "Docker", icon: "🐳", color: "bg-blue-600" },
      { name: "AWS", icon: "☁️", color: "bg-yellow-600" },
      { name: "Vercel", icon: "▲", color: "bg-black" },
      { name: "Netlify", icon: "🌐", color: "bg-teal-500" },
      { name: "VS Code", icon: "💻", color: "bg-blue-600" },
      { name: "Figma", icon: "🎨", color: "bg-purple-600" },
      { name: "Postman", icon: "📮", color: "bg-orange-500" }
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
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
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
