import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const SkillCard = ({ skill }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2">
    {skill.icon && <skill.icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />}
    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
  </div>
);

const SubcategorySection = ({ subcategory }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">{subcategory.name}</h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {subcategory.skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const CategorySection = ({ category }) => (
  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 mb-8 shadow-lg">
    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{category.category}</h3>
    {category.subcategories ? (
      category.subcategories.map((subcategory, index) => (
        <SubcategorySection key={index} subcategory={subcategory} />
      ))
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    )}
  </div>
);

const SkillsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-200 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">My Skills & Tech Stack</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
          <div className="space-y-8">
            {skillsData.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

