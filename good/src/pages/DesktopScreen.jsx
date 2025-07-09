import React, { useState, useEffect } from 'react';
import { Menu, Wifi, Battery, Volume2, ChevronUp, Trash, Folder, Globe } from 'lucide-react';
import walImage from '../assets/ag.jpg';
import IPhoneScreen from './Iphone';
import MacBookDesktop from './MacBookDesktop'; 
import AboutUs from './Aboutus'; 
import Timid from './Timid'; 
import TechnologiesPage from './TechnologiesPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import app from '/app.png';
import brain from '/brain.png';
import github from '/github.png';
import linkedin from '/linkedin.png';
import me from '/me.svg';
import news from '/new.png';
import telegram from '/telegram.png';
import twitter from '/x.png';
import whatsapp from '/whatsapp.png';
import moviegig from '/film-roll.png'
import instagram from '/instagram.png'
import leetcode from '/leetcode.png'
import discord from '/discord.png'
import resume from '/resume.png'
import tictactoe from '/tictactoe.svg'

import TicTacToe from './TicTacToe ';

const DesktopScreen = ({ children, theme = 'dark' }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); 

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        setIsStartMenuOpen(false);
      }
    };

    if (isStartMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStartMenuOpen]);

  const items = [
    // { name: 'Iphone', icon: <Folder />, content: <IPhoneScreen /> },
    // { name: 'Mac book desktop', icon: <Trash />, content: <MacBookDesktop /> },
    { name: 'About me', icon: me, content: <AboutUs /> },
    // { name: 'Timid', icon: brain, content: <Timid /> },
    { name: 'Skills', icon: brain, content: <SkillsPage /> },
    { name: 'Projects', icon: app, content: <ProjectsPage /> },
    { name: 'Tic Tac Toe', icon: tictactoe, content: <TicTacToe theme={theme} /> }
  ];
  const linked = [
    { name: 'Github', icon: github, to:"https://github.com/anurag2204-k"},
    { name: 'Instagram', icon: instagram, to:"https://www.instagram.com/anuragk2204/"},
    { name: 'Leetcode', icon: leetcode, to:"https://leetcode.com/u/anurag_k22/"},
    { name: 'Linkedin', icon: linkedin, to:"https://www.linkedin.com/in/anuragk22/"},
    { name: 'Telegram', icon: telegram, to:"https://t.me/Anuragkho"},
    { name: 'Twitter', icon: twitter, to:"https://x.com/anurag_k04"},
    { name: 'Whatsapp', icon: whatsapp, to:"https://wa.me/qr/LZDEC72CM5KXP1"},
    { name: 'Resume', icon: resume, to:"https://drive.google.com/file/d/1dUvZLFfbhE0tCVq983pbVXnX8F_OuM43/view?usp=sharing"},
    ]
  const projects = [
    { name: 'MovieGig', icon: moviegig, to:"https://moviegig.onrender.com/"},
    { name: 'NewzSage', icon: news, to:"https://newz-sage.vercel.app/"},
    { name: 'Discord-clone', icon: discord, to:"https://github.com/anurag2204-k/discordd"},
  ]

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div
        className="relative border-4 border-gray-300 rounded-lg shadow-xl "
       style={{
             width: 'min(90vh * (16/9), 100vw)', 
             height: 'min(90vh, 100vw * (9/16))', 
             backgroundImage: `url(${walImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
      >
        {/* Conditionally Render Active Item Content */}
        {activeItem ? (
          <div className="absolute top-0 left-0 right-0 bottom-10 bg-gray-800 text-white overflow-y-auto no-scrollbar ">
            {/* Title Bar */}
            <div className="sticky top-0 z-50 bg-gradient-to-b from-black via-gray-600 to-gray-100 p-2 text-white flex items-center justify-between ">
              <span className="font-bold">{activeItem.name}</span>
              <button
                onClick={() => setActiveItem(null)} 
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
          <div className="flex flex-col flex-wrap py-5 pl-4 gap-4 max-h-full w-16 ">
            {items.map((item,index) => (
              <div
                key={item.name}
                className="w-16 flex flex-col items-center group cursor-pointer relative"
                onClick={() => setActiveItem(item)} 
              >
                <div className="w-12 h-12   rounded-lg mb-1 flex justify-center items-center p-1 ">
                <div className={`absolute w-full h-full rounded-full blur-[12px] opacity-50 bg-fuchsia-800`}
      ></div>
                <img src={item.icon} alt={item.name} className="w-full h-full object-cover drop-shadow-[0_0_15px_rgba(255,0,0,0.9)]" />
                </div>
                <span className="text-xs text-white text-center truncate w-full">
                  {item.name}
                </span>
                <div className="absolute top-0 left-0 w-full text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {item.name}
                </div>
              </div>
            ))}


{linked.map((item) => (
              <div
                key={item.name}
                className="w-16 flex flex-col items-center group cursor-pointer relative"
                onClick={() => window.open(item.to, '_blank')} 
              >
                <div className="w-12 h-12   rounded-lg mb-1 flex justify-center items-center p-1">
                <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-white text-center truncate w-full">
                  {item.name}
                </span>
                <div className="absolute top-0 left-0 w-full text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {item.name}
                </div>
              </div>
            ))}
{projects.map((item,index) => (
              <div
                key={item.name}
                className="w-16 flex flex-col items-center group cursor-pointer relative"
                onClick={() => window.open(item.to, '_blank')} 
              >
                <div className="w-12 h-12   rounded-lg mb-1 flex justify-center items-center p-1">
                <div className={`absolute w-full h-full rounded-full blur-[12px] opacity-40 bg-blue-400`}
      ></div>
                <img src={item.icon} alt={item.name} className="w-full h-full object-cover drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
                </div>
                <span className="text-xs text-white text-center truncate w-full underline">
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
          <div className="menu-container relative">
          <button
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
            className="px-4 py-1 bg-black text-white rounded hover:bg-zinc-800 transition-colors"
          >
            <Menu className="w-5 h-5 " />
          </button>
          </div>
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
          <div className="absolute bottom-10 left-0 w-64 bg-gray-950 text-white  rounded-tr-lg border border-b-0 border-l-0">
            <div className='p-4 '>
            <h2 className="text-xl font-bold mb-4">Start Menu</h2>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul className="space-y-2">
              <li className="hover:bg-zinc-700 p-2 rounded cursor-pointer">Will be coming soon</li>
              {/* <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Documents</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Settings</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Search</li>
              <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">Help</li> */}
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};




export default DesktopScreen;


