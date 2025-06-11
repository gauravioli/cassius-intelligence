
import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface CommandMessage {
  id: string;
  content: string;
  type: 'user' | 'agent';
  agent?: string;
  timestamp: string;
}

const CommandInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<CommandMessage[]>([
    {
      id: '1',
      content: 'Cassius AI is ready. What growth initiative can I help you execute?',
      type: 'agent',
      agent: 'Strategy Agent',
      timestamp: '12:34 PM'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: CommandMessage = {
      id: Date.now().toString(),
      content: input,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: CommandMessage = {
        id: (Date.now() + 1).toString(),
        content: getAgentResponse(input),
        type: 'agent',
        agent: 'Strategy Agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);

    setInput('');
  };

  const getAgentResponse = (userInput: string): string => {
    if (userInput.toLowerCase().includes('tiktok')) {
      return '🎯 TikTok Influencer Agent activated. Scanning 2.3k creators in your niche. Found 12 high-engagement candidates with 50k+ followers. Preparing outreach sequence...';
    }
    if (userInput.toLowerCase().includes('reddit')) {
      return '🔍 Reddit Plug Agent scanning trending posts. Found 8 viral threads in r/entrepreneur and r/startups. Crafting contextual engagement strategy...';
    }
    if (userInput.toLowerCase().includes('content')) {
      return '✨ Content Creation Agent analyzing your brand voice. Generating 10 high-converting post variations across platforms. ETA: 3 minutes.';
    }
    return '🚀 Strategy Agent processing your request. Deploying optimal growth framework. Multiple agents coordinating execution...';
  };

  return (
    <div className="glass rounded-2xl p-6 grain h-96 flex flex-col">
      <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-glass-border">
        <Sparkles className="w-5 h-5 text-neon-pink" />
        <h2 className="text-lg font-semibold text-white">Command Interface</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-neon-pink/20 border border-neon-pink/30 text-white'
                  : 'glass-light text-white'
              }`}
            >
              {message.type === 'agent' && (
                <p className="text-xs text-neon-teal mb-1 font-medium">{message.agent}</p>
              )}
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tell Cassius what to execute..."
          className="flex-1 glass-light rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
        />
        <button
          type="submit"
          className="glass-light rounded-xl px-4 py-3 text-neon-pink hover:bg-neon-pink/20 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CommandInterface;
