import React from 'react'
import { Battery, Signal, Wifi } from 'lucide-react'
import walImage from '../assets/ag.jpg';


const IPhoneScreen = ({ children }) => {
  return (
    <div className="   ">
      <div className="relative bg-black rounded-[60px] shadow-xl border-8 border-black aspect-[9/18]" 
      style={{
        width: 'min(90vh * (9/18), 100vw)', // Constrain width by both aspect ratio and viewport width
        height: 'min(90vh, 100vw * (18/9))', // Constrain height by both aspect ratio and viewport height
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
            <div>9:41</div>
            <div className="flex items-center space-x-2">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>
          
          {/* Content Area */}
          <div className="p-4 h-[calc(100%-2rem)]">
            {children || (
              <div className="flex items-center justify-center h-full text-gray-400">
                Add your content here
              </div>
            )}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default IPhoneScreen

