import React, { useState } from 'react'
import { Apple, Wifi, Battery, Search, Calendar, Clock } from 'lucide-react'
import walImage from '../assets/ag.jpg' 


const MacBookDesktop= ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-[1280px]  mx-auto bg-[#f0f0f0] rounded-lg shadow-xl overflow-hidden" style={{
      width: 'min(90vh * (16/9.5), 100vw)', // Constrain width by both aspect ratio and viewport width
      height: 'min(90vh, 100vw * (9.5/16))', // Constrain height by both aspect ratio and viewport height
      backgroundImage: `url(${walImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="relative aspect-[16/9.5] bg-[url('/wallpaper.jpg')] bg-cover bg-center">
        {/* Menu Bar */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-black bg-opacity-20 backdrop-blur-md text-white flex items-center justify-between px-4 text-xs">
          <div className="flex items-center space-x-4">
            <Apple className="w-4 h-4" />
            <span className="font-semibold">Finder</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span>Window</span>
            <span>Help</span>
          </div>
          <div className="flex items-center space-x-4">
            <Battery className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Search className="w-4 h-4" />
            <Calendar className="w-4 h-4" />
            <Clock className="w-4 h-4" />
            <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="absolute top-6 left-0 right-0 bottom-16 overflow-auto p-4">
          {children || (
            <div className="flex items-center justify-center h-full text-white text-xl">
              Your desktop content here
            </div>
          )}
        </div>

        {/* Dock */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl p-2 flex space-x-2">
          {['finder', 'safari', 'messages', 'mail', 'maps', 'photos', 'facetime', 'calendar', 'contacts', 'reminders', 'notes', 'music'].map((app) => (
            <div key={app} className="w-12 h- bg-gray-200 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">
              {app[0].toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MacBookDesktop

