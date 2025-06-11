
import React from 'react';
import { FileText, Download, Eye, Copy, Share2 } from 'lucide-react';

const OutputViewer: React.FC = () => {
  const recentOutputs = [
    {
      id: 1,
      title: 'TikTok Influencer Intelligence Report',
      type: 'Campaign Analysis',
      description: 'Comprehensive analysis of 127 fitness influencers with detailed engagement metrics and outreach recommendations.',
      timestamp: '2 hours ago',
      status: 'completed',
      campaign: 'TikTok Battleplan Campaign #1'
    },
    {
      id: 2,
      title: 'LinkedIn B2B Prospect Database',
      type: 'Lead Generation',
      description: 'Curated list of 340 qualified prospects in the SaaS industry with contact information and engagement scores.',
      timestamp: '5 hours ago',
      status: 'completed',
      campaign: 'LinkedIn Prospecting Campaign #2'
    },
    {
      id: 3,
      title: 'Content Calendar Q1 2024',
      type: 'Content Strategy',
      description: 'Strategic content calendar with 90 days of optimized posts across all social media platforms.',
      timestamp: '1 day ago',
      status: 'completed',
      campaign: 'Content Strategy Campaign #3'
    }
  ];

  return (
    <div className="space-y-6">
      {recentOutputs.map((output) => (
        <div key={output.id} className="glass-task rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl glass-button purple-glow">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-readable-dark group-hover:text-purple-700 transition-colors">
                  {output.title}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    {output.type}
                  </span>
                  <span className="text-xs text-readable">
                    {output.timestamp}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="glass-button rounded-lg p-2 hover:bg-purple-50/30 transition-all">
                <Eye className="w-4 h-4 text-purple-600" />
              </button>
              <button className="glass-button rounded-lg p-2 hover:bg-purple-50/30 transition-all">
                <Copy className="w-4 h-4 text-purple-600" />
              </button>
              <button className="glass-button rounded-lg p-2 hover:bg-purple-50/30 transition-all">
                <Download className="w-4 h-4 text-purple-600" />
              </button>
              <button className="glass-button rounded-lg p-2 hover:bg-purple-50/30 transition-all">
                <Share2 className="w-4 h-4 text-purple-600" />
              </button>
            </div>
          </div>
          
          <p className="text-readable text-sm leading-relaxed mb-4">
            {output.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-purple-200/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs gradient-text-purple font-medium">Powered by {output.campaign}</span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-medium">
              {output.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutputViewer;
