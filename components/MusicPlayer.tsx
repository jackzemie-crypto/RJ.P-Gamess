import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Library, Clock, Grid, Settings } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'unreleased', label: 'Unreleased', icon: Grid },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-1 min-h-[calc(100vh-80px)] flex flex-row bg-black"
    >
      {/* Sidebar Navigation */}
      <div className="w-64 bg-black border-r border-white/10 p-4 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={24} />
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <iframe 
          src="https://monochrome.tf/" 
          className="w-full h-full border-none"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          title="RJ.P Games Music Player"
        />
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
