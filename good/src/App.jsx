import React from 'react';
import ArcadeWindow from './components/ArcadeWindow';
import IPhoneScreen from './pages/Iphone';
import MacBookDesktop from './pages/MacBookDesktop';
import DesktopScreen from './pages/DesktopScreen';
function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center   bg-gray-900 p-4">
      <DesktopScreen />
    </div>
  );
}

export default App;

