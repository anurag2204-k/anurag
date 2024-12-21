import React, { useState, useEffect } from 'react';
import { Menu, Wifi, Battery, Volume2, ChevronUp, Trash, Folder, Globe } from 'lucide-react';
import walImage from '../assets/ag.jpg';
import IPhoneScreen from './Iphone'; // Example content for "My Computer"
import MacBookDesktop from './MacBookDesktop'; // Example content for "My Documents"
import AboutUs from './Aboutus'; // Example content for "Recycle Bin"
import Timid from './Timid'; // Example content for "Network"
import TechnologiesPage from './TechnologiesPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from '../components/ProjectsPage';

const DesktopScreen = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // Track the active item

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { name: 'Iphone', icon: <Folder />, content: <IPhoneScreen /> },
    { name: 'Mac book desktop', icon: <Trash />, content: <MacBookDesktop /> },
    { name: 'About us', icon: <Folder />, content: <AboutUs /> },
    { name: 'Timid', icon: <Globe />, content: <Timid /> },
    { name: 'Skills', icon: <Globe />, content: <SkillsPage /> },
    { name: 'Projects', icon: <Globe />, content: <ProjectsPage /> }
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div
        className="relative border-4 border-gray-300 rounded-lg shadow-xl"
       style={{
             width: 'min(90vh * (16/9), 100vw)', // Constrain width by both aspect ratio and viewport width
             height: 'min(90vh, 100vw * (9/16))', // Constrain height by both aspect ratio and viewport height
             backgroundImage: `url(${walImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
      >
        {/* Conditionally Render Active Item Content */}
        {activeItem ? (
          <div className="absolute top-0 left-0 right-0 bottom-10 bg-gray-800 text-white overflow-y-scroll">
            {/* Title Bar */}
            <div className="sticky top-0 z-50 bg-gray-700 p-2 text-white flex items-center justify-between ">
              <span className="font-bold">{activeItem.name}</span>
              <button
                onClick={() => setActiveItem(null)} // Close active item
                className="text-xl text-white hover:text-red-500"
              >
                &times;
              </button>
            </div>

            {/* Render the content for the active item */}
            {activeItem.content}
          </div>
        ) : (
          /* Main Desktop Content */
          <div className="flex flex-col flex-wrap py-5 pl-4 gap-4 max-h-full w-16">
            {items.map((item) => (
              <div
                key={item.name}
                className="w-16 flex flex-col items-center group cursor-pointer relative"
                onClick={() => setActiveItem(item)} // Set active item
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1 flex justify-center items-center">
                  {item.icon} {/* Render item icon */}
                </div>
                <span className="text-xs text-white text-center truncate w-full">
                  {item.name}
                </span>
                <div className="absolute top-0 left-0 w-full text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Taskbar */}
        <div className="absolute bottom-0 left-0 right-0 h-10  flex items-center px-2" style={{
    background: 'linear-gradient(to right, #491220, #1c2425, #491220)',
  }}>
          <button
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4 text-white">
            <ChevronUp className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
            <span className="text-sm">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        {/* Start Menu */}
        {isStartMenuOpen && (
          <div className="absolute bottom-10 left-0 w-64 bg-gray-800 text-white p-4 rounded-tr-lg">
            <h2 className="text-xl font-bold mb-4">Start Menu</h2>
            <ul className="space-y-2">
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Programs</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Documents</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Settings</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Search</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Help</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopScreen;
