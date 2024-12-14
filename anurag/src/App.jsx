import React from 'react';
import ArcadeWindow from './components/ArcadeWindow';
import IPhoneScreen from './pages/Iphone';
import MacBookDesktop from './pages/MacBookDesktop';
import DesktopScreen from './pages/DesktopScreen';
function App() {
  return (
  // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  //   <IPhoneScreen>
  //     {/* You can add your icons or content here */}
  //     <div className="grid grid-cols-4 gap-4">
  //       {[...Array(12)].map((_, i) => (
  //         <div key={i} className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
  //           App {i + 1}
  //         </div>
  //       ))}
  //     </div>
  //   </IPhoneScreen>
  // </div>
  
//   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//   <MacBookDesktop>
//     <div className="grid grid-cols-4 gap-4">
//       {[...Array(8)].map((_, i) => (
//         <div key={i} className="aspect-square bg-white bg-opacity-30 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-white">
//           <div className="w-1/5 h-1/5 bg-blue-500 rounded-xl mb-2"></div>
//           <span className="text-sm">Folder {i + 1}</span>
//         </div>
//       ))}
//     </div>
//   </MacBookDesktop>
// </div>
<div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
<DesktopScreen>
</DesktopScreen>
</div>
  );
}

export default App;

