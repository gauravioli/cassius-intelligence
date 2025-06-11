import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TrendingUp, MessageSquare, Target } from 'lucide-react';

const DataVisualization: React.FC = () => {
  const growthData = [
    { month: 'Jan', growth: 12, outreach: 850, conversions: 34 },
    { month: 'Feb', growth: 19, outreach: 1200, conversions: 52 },
    { month: 'Mar', growth: 27, outreach: 1800, conversions: 78 },
    { month: 'Apr', growth: 34, outreach: 2400, conversions: 95 },
  ];

  return (
    <div className="glass-oracle rounded-3xl p-8 subtle-glow mb-8">
      <h2 className="section-title mb-8">ANALYTICS DASHBOARD</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <div className="glass-panel rounded-2xl p-6 purple-glow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-xl glass-button gold-glow">
              <TrendingUp className="w-5 h-5 text-readable-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-readable-dark">Growth Trajectory</h3>
              <p className="text-sm text-readable">Powered by Cassius Marketing</p>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 51, 234, 0.1)" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Area
                  type="monotone"
                  dataKey="growth"
                  stroke="#d4af37"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#growthGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Outreach Volume */}
        <div className="glass-panel rounded-2xl p-6 purple-glow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-xl glass-button gold-glow">
              <MessageSquare className="w-5 h-5 text-readable-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-readable-dark">Outreach Volume</h3>
              <p className="text-sm text-readable">Community Engagement Campaign</p>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 51, 234, 0.1)" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Bar dataKey="outreach" fill="#8b45ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Tracking */}
        <div className="glass-panel rounded-2xl p-6 purple-glow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-xl glass-button gold-glow">
              <Target className="w-5 h-5 text-readable-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-readable-dark">Conversion Tracking</h3>
              <p className="text-sm text-readable">Content Creation Campaign</p>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 51, 234, 0.1)" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Line
                  type="monotone"
                  dataKey="conversions"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
