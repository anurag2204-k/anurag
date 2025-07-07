import React, { useState, useEffect } from 'react'
import { Menu, Wifi, Battery, Volume2, ChevronUp } from 'lucide-react'
import walImage from '../assets/ag.jpg'


const DesktopScreen = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-[1280px] mx-auto bg-[#9AA6B2] rounded-lg shadow-xl overflow-hidden border-4 border-gray-300">
      <div className="relative aspect-[16/9]  bg-cover bg-center "  style={{ backgroundImage: `url(${walImage})` }}>
        {/* Desktop Icons */}
        {/* <div className="absolute top-4 left-4 space-y-4">
          {['My Computer', 'Recycle Bin', 'My Documents', 'Network'].map((icon, index) => (
            <div key={icon} className="flex flex-col items-center w-20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1"></div>
              <span className="text-xs text-white text-center">{icon}</span>
            </div>
          ))}
        </div> */}
        

        {/* this will work for smarpohone */}
        {/* <div className="flex flex-wrap py-4 pl-4 gap-4 max-h-full max-w-full">
  {['My Computer', 'Recycle Bin', 'My Documents', 'Network', 'lakdfj', 'adfa', 'adfad', 'adfad', 'adfad', 'adfad'].map(
    (icon, index) => (
      <div key={icon} className="w-16 flex flex-col items-center group relative">
        <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1"></div>
        <span className="text-xs text-white text-center truncate w-full">
          {icon}
        </span>
        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 shadow-lg">
          {icon}
        </span>
      </div>
    )
  )}
</div> */}
<div className='flex flex-col flex-wrap py-4 pl-4 gap-4 max-h-full w-16'>
  {['My Computer', 'Recycle Bin', 'My Documents', 'Network', 'lakdfj', 'adfa', 'adfad', 'adfad', 'adfad', 'adfad', 'adfad', 'adfad'].map((icon, index) => (
    <div key={icon} className="w-16 flex flex-col items-center group">
      <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1"></div>
      <span className="text-xs text-white text-center truncate w-full group-hover:whitespace-normal group-hover:overflow-visible group-hover:break-words">
        {icon}
      </span>
    </div>
  ))}
</div>











        {/* Main Content Area
        <div className="absolute top-0 left-0 right-0 bottom-10 overflow-auto no-scrollbar p-4">
          {children}
        </div> */}

        {/* Taskbar */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-800 flex items-center px-2">
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
  )
}

export default DesktopScreen

