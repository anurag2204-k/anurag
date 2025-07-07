import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const MobileSkillCard = ({ skill, darkMode }) => {
  // Map skill names to image URLs (using common CDN sources)
  const getSkillImage = (skillName) => {
    const skillImages = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'JavaScript (ES6+)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      'OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg',
      'JWT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/JSON_Web_Token_Logo.svg/512px-JSON_Web_Token_Logo.svg.png',
      'ORM tools (Prisma, Sequelize, TypeORM)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
      'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/512px-Scikit_learn_logo_small.svg.png',
      'Keras': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/512px-Keras_logo.svg.png',
      'Matplotlib': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/512px-Matplotlib_icon.svg.png',
      'Seaborn': 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
      'Tableau': 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
    };
    
    return skillImages[skillName] || null;
  };

  const imageUrl = getSkillImage(skill.name);

  return (
    <div className={`border rounded-md p-1.5 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 flex flex-col items-center space-y-1
      ${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-200'}`}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={skill.name}
          className="w-4 h-4 object-contain"
          onError={(e) => {
            // Fallback to icon if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      ) : null}
      {skill.icon && (
        <skill.icon 
          className={`w-4 h-4 ${imageUrl ? 'hidden' : 'block'} ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} 
        />
      )}
      <span className={`text-xs font-medium text-center leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
        {skill.name}
      </span>
    </div>
  );
};

const MobileSubcategorySection = ({ subcategory, darkMode }) => (
  <div className="mb-3">
    <h4 className={`text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>
      {subcategory.name}
    </h4>
    <div className="grid grid-cols-4 gap-1.5">
      {subcategory.skills.map((skill, index) => (
        <MobileSkillCard key={index} skill={skill} darkMode={darkMode}/>
      ))}
    </div>
  </div>
);

const MobileCategorySection = ({ category, darkMode }) => (
  <div className={`rounded-md p-2.5 mb-3 shadow-sm
    ${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'}`}>
    <h3
      className={`text-sm font-bold mb-2 text-transparent bg-clip-text
        ${darkMode
          ? 'bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500'
          : 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600'}
      `}
    >
      {category.category}
    </h3>
    {category.subcategories ? (
      category.subcategories.map((subcategory, index) => (
        <MobileSubcategorySection key={index} subcategory={subcategory} darkMode={darkMode}/>
      ))
    ) : (
      <div className="grid grid-cols-4 gap-1.5">
        {category.skills.map((skill, index) => (
          <MobileSkillCard key={index} skill={skill} darkMode={darkMode}/>
        ))}
      </div>
    )}
  </div>
);

const MobileSkillsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen w-full ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="w-full py-3 px-2.5">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            Skills & Tech Stack
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-1 rounded-full bg-gradient-to-r from-slate-200 to-slate-400 hover:from-slate-300 hover:to-slate-500 transition-all duration-200 shadow-sm"
          >
            {darkMode ? (
              <SunIcon className="w-3 h-3 text-yellow-400" />
            ) : (
              <MoonIcon className="w-3 h-3 text-slate-800" />
            )}
          </button>
        </div>
        <div className="space-y-3 w-full">
          {skillsData.map((category, index) => (
            <MobileCategorySection key={index} category={category} darkMode={darkMode}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSkillsPage;
