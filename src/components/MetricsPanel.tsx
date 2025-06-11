import React from 'react';
import { TrendingUp, Users, Calendar, Crown, Shield, Target } from 'lucide-react';

const MetricsPanel: React.FC = () => {
  const metrics = [
    {
      label: 'Growth Rate',
      value: '+34%',
      change: '+12% this week',
      icon: TrendingUp,
      color: 'gradient-text-purple',
      campaign: 'TikTok Marketing Campaign #1',
      campaignIcon: Crown,
    },
    {
      label: 'Active Campaigns',
      value: '8',
      change: '3 launched today',
      icon: Calendar,
      color: 'gradient-text-gold',
      campaign: 'Content Strategy Campaign #3',
      campaignIcon: Target,
    },
    {
      label: 'Outreach Volume',
      value: '2.4k',
      change: '+890 this week',
      icon: Users,
      color: 'gradient-text-purple',
      campaign: 'Community Engagement Campaign #2',
      campaignIcon: Shield,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const CampaignIcon = metric.campaignIcon;
        return (
          <div key={index} className="glass-oracle rounded-2xl p-6 gradient-bg-purple hover:scale-105 transition-all duration-300 group subtle-glow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl glass-button ${index === 1 ? 'gold-glow' : 'purple-glow'} transition-all`}>
                <Icon className={`w-6 h-6 ${metric.color === 'gradient-text-purple' ? 'text-purple-600' : 'text-yellow-600'}`} />
              </div>
              <div className="text-right">
                <p className={`text-3xl font-bold mb-1 text-readable-dark`}>{metric.value}</p>
                <p className="text-xs text-readable-dark font-medium">{metric.label}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <p className={`text-sm font-medium text-readable-dark`}>{metric.change}</p>
            </div>

            <div className="flex items-center space-x-2 pt-3 border-t border-purple-200/30">
              <div className="p-1.5 rounded-lg bg-gold-100/20 border border-gold-300/20">
                <CampaignIcon className="w-3 h-3 text-readable-gold" />
              </div>
              <div>
                <p className="text-xs gradient-text-gold font-medium">Powered by {metric.campaign}</p>
                <p className="text-xs text-readable">Cassius Intelligence</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsPanel;
