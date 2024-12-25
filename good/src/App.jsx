import React from 'react';
import ArcadeWindow from './components/ArcadeWindow';
import IPhoneScreen from './pages/Iphone';
import MacBookDesktop from './pages/MacBookDesktop';
import DesktopScreen from './pages/DesktopScreen';
import HereWeGo from './pages/HereWeGo';
function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center   bg-gray-600 p-4">
      <HereWeGo/>
    </div>
  );
}

export default App;

