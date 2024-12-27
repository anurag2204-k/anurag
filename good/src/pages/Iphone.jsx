import { useState, useEffect } from 'react';
import React from 'react'
import { Battery, Signal, Wifi } from 'lucide-react'
import walImage from '../assets/ag.jpg';
import AboutUs from './Aboutus';
import SkillsPage from './SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import app from '/app.png';
import brain from '/brain.png';
import github from '/github.png';
import linkedin from '/linkedin.png';
import me from '/me.svg';
import news from '/news.jpg';
import telegram from '/telegram.png';
import twitter from '/x.png';
import whatsapp from '/whatsapp.png';
import moviegig from '/film-roll.png'
import instagram from '/instagram.png'


const IPhoneScreen = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeItem, setActiveItem] = useState(null); 
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { name: 'About me', icon: me, content: <AboutUs /> },
    { name: 'Skills', icon: brain, content: <SkillsPage /> },
    { name: 'Projects', icon: app, content: <ProjectsPage /> }
  ]

  const linked = [
    { name: 'Github', icon: github, to: "https://github.com/anurag2204-k" },
    { name: 'Linkedin', icon: linkedin, to: "https://www.linkedin.com/in/anuragk22/" },
    { name: 'Telegram', icon: telegram, to: "https://t.me/Anuragkho" },
    { name: 'Instagram', icon: instagram, to: "https://www.instagram.com/anuragk2204/" },
    { name: 'Twitter', icon: twitter, to: "https://x.com/anurag_k04" },
    { name: 'Whatsapp', icon: whatsapp, to: "https://wa.me/qr/LZDEC72CM5KXP1" },
    { name: 'NewzSage', icon: news, to: "https://newz-sage.vercel.app/" },
    { name: 'MovieGig', icon: moviegig, to: "https://moviegig.onrender.com/" },
  ]

  return (
    <div className="   ">
      <div className="relative bg-black rounded-[60px] shadow-xl border-8 border-black aspect-[9/18]"
        style={{
          width: 'min(90vh * (9/18), 100vw)',
          height: 'min(90vh, 100vw * (18/9))',
          backgroundImage: `url(${walImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-3xl z-10"></div>

        {/* Screen */}
        <div className="relative   h-full rounded-[46px] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2   text-white text-xs font-medium">
            <div>              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center space-x-2">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 h-[calc(100%-2rem)] max-h-full overflow-y-auto">
  <div className="flex items-center justify-center h-full text-gray-400">
    {activeItem ? (
      <div className="absolute top-[30px] left-0 right-0 bottom-0 bg-gray-800 text-white overflow-y-auto">
        {/* Title Bar */}
        <div className="sticky top-0 z-50 bg-gray-950  p-2 text-white flex items-center justify-between">
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
      <div className="flex   flex-wrap items-start justify-start gap-4 max-h-full w-full overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center group cursor-pointer relative w-12 "
            onClick={() => setActiveItem(item)} 
          >
            <div className="w-12 h-12 rounded-lg mb-1 flex justify-center items-center p-1">
              <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs  text-white text-center truncate w-full">
              {item.name}
            </span>
            <div className="absolute top-0 left-0 w-full text-white text-xs  px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {item.name}
            </div>
          </div>
        ))}

        {linked.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center group cursor-pointer relative w-12"
            onClick={() => window.open(item.to, '_blank')} 
          >
            <div className="w-12 h-12 rounded-lg mb-1 flex justify-center items-center p-1">
              <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs  text-white text-center truncate w-full">
              {item.name}
            </span>
            <div className="absolute top-0 left-0 w-full text-white text-xs  px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default IPhoneScreen

