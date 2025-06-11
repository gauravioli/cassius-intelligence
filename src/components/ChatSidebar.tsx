
import React, { useState, useEffect } from 'react';
import { Send, Sparkles, Bot, Target, Search, Users, Zap } from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'agent' | 'progress';
  agent?: string;
  timestamp: string;
  isTyping?: boolean;
  progressData?: {
    step: string;
    current: number;
    total: number;
    details?: string[];
  };
}

const ChatSidebar: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: '⚔️ **Cassius AI** is online and ready for battle.\n\nWhat growth initiative shall we execute today, Commander?',
      type: 'agent',
      agent: 'Cassius',
      timestamp: '12:34 PM'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    // Simulate typing indicator
    setTimeout(() => {
      const typingMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: '',
        type: 'agent',
        agent: 'Cassius',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isTyping: true
      };
      setMessages(prev => [...prev, typingMessage]);
    }, 500);

    // Process request and show live updates
    if (input.toLowerCase().includes('tiktok') || input.toLowerCase().includes('influencer')) {
      simulateTikTokSearch(input);
    } else if (input.toLowerCase().includes('reddit')) {
      simulateRedditSearch(input);
    } else {
      simulateGeneralResponse(input);
    }

    setInput('');
  };

  const simulateTikTokSearch = (userInput: string) => {
    // Remove typing indicator and start progress
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      
      const activationMessage: ChatMessage = {
        id: Date.now().toString(),
        content: '🎯 **AGENT ACTIVATION SEQUENCE**\n\n▰▰▰ **TikTok Hunter** deploying...\n\n*Scanning 2.3k creators in target demographics*',
        type: 'agent',
        agent: 'TikTok Hunter',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, activationMessage]);
    }, 1000);

    // Progress updates
    const progressSteps = [
      { step: 'Scanning Creator Database', current: 1, total: 5, details: ['Found 847 fitness creators', 'Analyzing engagement rates...'] },
      { step: 'Filtering by Follower Count', current: 2, total: 5, details: ['127 creators with 50k+ followers', 'Checking authenticity scores...'] },
      { step: 'Analyzing Content Quality', current: 3, total: 5, details: ['High engagement rates detected', 'Content alignment: 94%'] },
      { step: 'Preparing Outreach Strategy', current: 4, total: 5, details: ['Crafting personalized messages', 'Scheduling optimal send times'] },
      { step: 'Deployment Ready', current: 5, total: 5, details: ['12 priority targets identified', 'Outreach sequence prepared'] }
    ];

    progressSteps.forEach((step, index) => {
      setTimeout(() => {
        const progressMessage: ChatMessage = {
          id: `progress-${Date.now()}-${index}`,
          content: '',
          type: 'progress',
          agent: 'TikTok Hunter',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          progressData: step
        };
        setMessages(prev => [...prev, progressMessage]);
      }, 2000 + (index * 1500));
    });

    // Final response
    setTimeout(() => {
      const finalMessage: ChatMessage = {
        id: (Date.now() + 100).toString(),
        content: '✨ **MISSION ACCOMPLISHED**\n\n**Target Analysis Complete:**\n• 12 high-value creators identified\n• Average engagement: 8.4%\n• Estimated reach: 2.1M users\n\n**Next Actions:**\n• Outreach sequences prepared\n• Personalized pitches crafted\n• Optimal timing scheduled\n\n*Ready for deployment on your command, Commander.*',
        type: 'agent',
        agent: 'TikTok Hunter',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, finalMessage]);
      setIsProcessing(false);
    }, 10000);
  };

  const simulateRedditSearch = (userInput: string) => {
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      
      const activationMessage: ChatMessage = {
        id: Date.now().toString(),
        content: '🔍 **REDDIT RECONNAISSANCE INITIATED**\n\n▰▰▰ **Lucius** scanning the forums...\n\n*Infiltrating r/entrepreneur, r/startups...*',
        type: 'agent',
        agent: 'Lucius',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, activationMessage]);
    }, 1000);

    // Simulate progress for Reddit
    setTimeout(() => {
      const finalMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: '🚀 **RECONNAISSANCE COMPLETE**\n\n**Intel Gathered:**\n• 8 viral threads identified\n• 147 engagement opportunities\n• Optimal timing windows mapped\n\n**Strategic Recommendations:**\n• High-value discussions in r/entrepreneur\n• Trending topics aligned with your niche\n• Contextual engagement strategy prepared\n\n*Awaiting orders to engage, Commander.*',
        type: 'agent',
        agent: 'Lucius',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, finalMessage]);
      setIsProcessing(false);
    }, 4000);
  };

  const simulateGeneralResponse = (userInput: string) => {
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      
      const agentResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: '⚔️ **CASSIUS STRATEGIC ANALYSIS**\n\n*Processing your directive...*\n\n**Recommended Approach:**\n• Multi-agent coordination activated\n• Growth framework deployment ready\n• Legion standing by for execution\n\n*What specific battlefield shall we conquer first, Commander?*',
        type: 'agent',
        agent: 'Cassius',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentResponse]);
      setIsProcessing(false);
    }, 2000);
  };

  const renderProgressMessage = (message: ChatMessage) => {
    const { progressData } = message;
    if (!progressData) return null;

    const progressPercentage = (progressData.current / progressData.total) * 100;

    return (
      <div className="glass-light rounded-2xl p-4 space-y-3 metallic animate-fade-in">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-purple-400 animate-pulse" />
          <p className="text-purple-400 font-medium text-sm">{message.agent}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-white font-medium text-sm">{progressData.step}</p>
            <span className="text-yellow-400 text-xs">{progressData.current}/{progressData.total}</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 transition-all duration-500 shimmer"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          {progressData.details && (
            <div className="space-y-1 pt-2 border-t border-gray-700/30">
              {progressData.details.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-green-400" />
                  <p className="text-gray-300 text-xs">{detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-80 h-screen glass-chat flex flex-col relative">
      <div className="absolute inset-0 shimmer opacity-5 rounded-2xl"></div>
      
      {/* Header */}
      <div className="relative z-10 p-6 border-b border-yellow-400/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-xl glass glow-gold metallic-gold">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold hero-text">Cassius AI</h1>
            <p className="text-sm text-purple-300">Growth Command Center</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'progress' ? (
              renderProgressMessage(message)
            ) : (
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl relative transition-all duration-300 ${
                  message.type === 'user'
                    ? 'glass metallic-gold text-white glow-gold'
                    : 'glass-light text-white metallic'
                } ${message.isTyping ? 'animate-pulse' : 'animate-fade-in'}`}
              >
                {message.type === 'agent' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-3 h-3 text-purple-400" />
                    <p className="text-xs text-purple-400 font-medium">{message.agent}</p>
                  </div>
                )}
                {message.isTyping ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                ) : (
                  <div className="text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                )}
                <p className="text-xs text-gray-400 mt-2">{message.timestamp}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="relative z-10 p-4 border-t border-yellow-400/10">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Command your legion..."
            disabled={isProcessing}
            className="flex-1 glass-light rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 text-sm metallic disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="glass-light rounded-xl px-4 py-3 text-yellow-400 hover:bg-yellow-400/10 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/30 glow-gold metallic-gold disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSidebar;
