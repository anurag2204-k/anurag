import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const SkillCard = ({ skill, darkMode }) => (
  <div className={`border rounded-md p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 flex items-center space-x-1.5
    ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
    {skill.icon && <skill.icon className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />}
    <span className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
      {skill.name}
    </span>
  </div>
);

const SubcategorySection = ({ subcategory, darkMode }) => (
  <div className="mb-4">
    <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
      {subcategory.name}
    </h4>
    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
      {subcategory.skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} darkMode={darkMode}/>
      ))}
    </div>
  </div>
);

const CategorySection = ({ category , darkMode}) => (
  <div className={`rounded-md p-4 mb-6 shadow-md
    ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
    <h3
      className={`text-xl font-bold mb-3 text-transparent bg-clip-text
        ${darkMode
          ? 'bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500'
          : 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600'}
      `}
    >
      {category.category}
</h3>
    {category.subcategories ? (
      category.subcategories.map((subcategory, index) => (
        <SubcategorySection key={index} subcategory={subcategory} darkMode={darkMode}/>
      ))
    ) : (
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} darkMode={darkMode}/>
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
    <div className={`min-h-screen  ${darkMode ? ' bg-zinc-950' : 'bg-gray-50'}`}>
      <div className="container mx-auto py-6 px-3 sm:py-8 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            My Skills & Tech Stack
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-1 sm:p-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 transition-all duration-200 shadow-sm"
          >
            {darkMode ? (
              <SunIcon className="w-4 h-4 text-yellow-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-gray-800" />
            )}
          </button>
        </div>
        <div className="space-y-6 ">
          {skillsData.map((category, index) => (
            <CategorySection key={index} category={category} darkMode={darkMode}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
