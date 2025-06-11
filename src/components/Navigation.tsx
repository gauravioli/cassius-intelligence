
import React, { useState } from 'react';
import { Home, Bot, BarChart3, Settings, Sparkles } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'agents', label: 'Agents', icon: Bot },
    { id: 'campaigns', label: 'Campaigns', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <nav className="glass rounded-2xl p-6 grain mb-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-r from-cassius-gold-500 to-cassius-accent-violet glow-gold">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Cassius AI</h1>
          <p className="text-sm text-cassius-purple-300">Command Center</p>
        </div>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-cassius-gold-500/20 border border-cassius-gold-500/30 text-white glow-gold'
                  : 'text-cassius-purple-300 hover:text-white hover:bg-glass-light'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
