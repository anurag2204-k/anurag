import  { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import HereWeGo from './pages/HereWeGo';
import Notes from './pages/Notes';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/notes" element={<Notes theme={theme} />} />
      <Route path="/iphone-demo" element={
        <div className="h-screen w-full flex justify-center items-center bg-gray-300 dark:bg-gray-800 p-4 no-scrollbar">
          <HereWeGo theme={theme} />
        </div>
      } />
    </Routes>
  );
}

export default App;

