
import React from 'react';
import { Crown, Shield, Users, Video, FileText, TrendingUp } from 'lucide-react';

interface AgentCardProps {
  name: string;
  type: 'strategy' | 'reddit' | 'tiktok' | 'content' | 'seo';
  status: 'active' | 'idle' | 'processing';
  currentAction: string;
  lastUpdate: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  name, 
  type, 
  status, 
  currentAction, 
  lastUpdate, 
  metrics = [] 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'strategy': return Crown; // Roman Emperor/General
      case 'reddit': return Shield; // Roman Legionnaire Shield
      case 'tiktok': return Users; // Roman Centurion (leading troops)
      case 'content': return FileText; // Roman Scribe
      case 'seo': return TrendingUp; // Roman Standard Bearer
      default: return Crown;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'active': return 'text-yellow-400';
      case 'processing': return 'text-purple-400';
      case 'idle': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getGlowClass = () => {
    switch (status) {
      case 'active': return 'glow-golden';
      case 'processing': return 'glow-purple';
      default: return '';
    }
  };

  const Icon = getIcon();

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden hover:scale-105 transition-all duration-300 group">
      {status === 'active' && (
        <div className="absolute inset-0 shimmer opacity-20"></div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl glass-golden ${getGlowClass()}`}>
              <Icon className={`w-6 h-6 ${getStatusColor()}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  status === 'active' ? 'bg-yellow-400 animate-pulse' : 
                  status === 'processing' ? 'bg-purple-400 animate-pulse' : 'bg-gray-400'
                }`}></div>
                <span className="text-sm text-gray-300 capitalize tracking-wider">{status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-white/90 text-sm mb-2">{currentAction}</p>
          <p className="text-gray-400 text-xs">{lastUpdate}</p>
        </div>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, index) => (
              <div key={index} className="glass-item rounded-lg p-3 border border-yellow-400/10">
                <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
                <p className="text-white font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCard;
