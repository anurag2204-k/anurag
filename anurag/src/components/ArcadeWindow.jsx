import React, { useState } from 'react';
  import * as Tabs from '@radix-ui/react-tabs';
import { IconHome, IconGame, IconSettings, IconInfo } from './Icons';
import GameContent from './GameContent';

const ArcadeWindow = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: <IconHome />, content: <HomeContent /> },
    { id: 'game', icon: <IconGame />, content: <GameContent /> },
    { id: 'settings', icon: <IconSettings />, content: <SettingsContent /> },
    { id: 'info', icon: <IconInfo />, content: <InfoContent /> },
    { id: 'infso', icon: <IconInfo />, content: <InfoContent /> },
  ];

  return (
    <div className="w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden shadow-neon">
      <div className="bg-gray-800 p-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <h2 className="text-neon-blue font-bold">Blade Runner Arcade</h2>
      </div>
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex bg-gray-800">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              className={`flex-1 p-4 text-center focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-700 text-neon-blue'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-neon-blue'
              }`}
            >
              {tab.icon}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content key={tab.id} value={tab.id} className="p-4">
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

const HomeContent = () => (
  <div className="text-neon-pink">
    <h3 className="text-2xl font-bold mb-4">Welcome to Blade Runner Arcade</h3>
    <p>Experience the future of gaming in a neon-lit cyberpunk world.</p>
  </div>
);

const SettingsContent = () => (
  <div className="text-neon-green">
    <h3 className="text-2xl font-bold mb-4">Settings</h3>
    <p>Customize your arcade experience here.</p>
  </div>
);

const InfoContent = () => (
  <div className="text-neon-yellow">
    <h3 className="text-2xl font-bold mb-4">Information</h3>
    <p>Learn more about the Blade Runner Arcade and its features.</p>
  </div>
);

export default ArcadeWindow;

