
import React, { useState, useEffect } from 'react';
import { Crown, Shield, Sword, Target, Users, Zap } from 'lucide-react';

interface LegionMember {
  name: string;
  title: string;
  status: 'active' | 'idle' | 'deployed';
  icon: any;
  currentMission?: string;
  efficiency: number;
  victories: number;
}

const RomanLegion: React.FC = () => {
  const [legionMembers, setLegionMembers] = useState<LegionMember[]>([
    {
      name: 'Cassius',
      title: 'Strategus Maximus',
      status: 'active',
      icon: Crown,
      currentMission: 'Orchestrating Q1 growth campaign',
      efficiency: 94,
      victories: 47
    },
    {
      name: 'Marcus',
      title: 'Content Centurion',
      status: 'deployed',
      icon: Sword,
      currentMission: 'Creating viral content across 5 platforms',
      efficiency: 87,
      victories: 32
    },
    {
      name: 'Quintus',
      title: 'Outreach Commander',
      status: 'active',
      icon: Target,
      currentMission: 'Engaging 127 TikTok influencers',
      efficiency: 91,
      victories: 28
    },
    {
      name: 'Lucius',
      title: 'Reddit Reconnaissance',
      status: 'active',
      icon: Shield,
      currentMission: 'Monitoring 12 subreddits for opportunities',
      efficiency: 89,
      victories: 35
    },
    {
      name: 'Gaius',
      title: 'Analytics Tribune',
      status: 'idle',
      icon: Users,
      currentMission: 'Preparing performance reports',
      efficiency: 96,
      victories: 41
    }
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLegionMembers(prev => prev.map(member => ({
        ...member,
        efficiency: Math.min(100, member.efficiency + (Math.random() - 0.5) * 2),
        victories: member.status === 'active' && Math.random() > 0.95 ? member.victories + 1 : member.victories
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'deployed': return 'text-yellow-400';
      case 'idle': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-400 animate-pulse';
      case 'deployed': return 'bg-yellow-400 animate-pulse';
      case 'idle': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass rounded-2xl p-6 metallic">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-xl glass glow-gold metallic-gold">
            <Users className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold hero-text">AI LEGION</h2>
            <p className="text-sm text-purple-300">Elite Digital Warriors</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="glass-light rounded-xl p-3">
            <p className="text-2xl font-bold text-green-400">5</p>
            <p className="text-xs text-gray-400">Active</p>
          </div>
          <div className="glass-light rounded-xl p-3">
            <p className="text-2xl font-bold text-yellow-400">183</p>
            <p className="text-xs text-gray-400">Victories</p>
          </div>
          <div className="glass-light rounded-xl p-3">
            <p className="text-2xl font-bold text-purple-400">91%</p>
            <p className="text-xs text-gray-400">Efficiency</p>
          </div>
        </div>
      </div>

      {/* Legion Members */}
      <div className="space-y-4">
        {legionMembers.map((member, index) => {
          const Icon = member.icon;
          return (
            <div key={member.name} className="glass rounded-2xl p-4 metallic hover:glow-gold transition-all duration-300">
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <div className="p-2 rounded-lg glass-light glow-violet metallic">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getStatusDot(member.status)}`}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-sm">{member.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-medium">{Math.round(member.efficiency)}%</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-purple-300 mb-2">{member.title}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${getStatusColor(member.status)}`}>
                        {member.status.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-400">{member.victories} victories</span>
                    </div>
                    
                    {member.currentMission && (
                      <p className="text-xs text-gray-300 leading-relaxed">{member.currentMission}</p>
                    )}
                    
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 transition-all duration-1000"
                        style={{ width: `${member.efficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Battle Statistics */}
      <div className="glass rounded-2xl p-4 metallic">
        <h3 className="font-bold text-white text-sm mb-3 flex items-center space-x-2">
          <Target className="w-4 h-4 text-yellow-400" />
          <span>Today's Campaigns</span>
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">TikTok Outreach</span>
            <span className="text-xs text-green-400 font-medium">+23 responses</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Reddit Engagement</span>
            <span className="text-xs text-yellow-400 font-medium">8 threads active</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Content Creation</span>
            <span className="text-xs text-purple-400 font-medium">12 posts queued</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomanLegion;
