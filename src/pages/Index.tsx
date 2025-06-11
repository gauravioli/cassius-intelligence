import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Swords, 
  Sparkles, 
  Target, 
  Users, 
  Brain, 
  Shield, 
  Crown, 
  Paperclip, 
  AtSign, 
  Plus, 
  ImageIcon, 
  Mic, 
  MessageSquare,
  BarChart3,
  TrendingUp,
  Zap,
  Mail,
  Settings,
  UserPlus,
  Menu,
  User,
  History,
  FileText,
  Database,
  CreditCard,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger, 
  SidebarInset 
} from "@/components/ui/sidebar";
import OutputViewer from '@/components/OutputViewer';
import MetricsPanel from '@/components/MetricsPanel';
import DataVisualization from '@/components/DataVisualization';
import FeaturesPage from '@/components/FeaturesPage';
import OnboardingFlow from '@/components/OnboardingFlow';

interface OnboardingData {
  businessName: string;
  businessType: string;
  industry: string;
  targetAudience: string;
  goals: string[];
  brandVoice: string;
  experience: string;
  budget: string;
  priorities: string[];
}

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [processingStage, setProcessingStage] = useState('');
  const [processingComplete, setProcessingComplete] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [selectedInfluencers, setSelectedInfluencers] = useState<any[]>([]);
  const [showInfluencerSelection, setShowInfluencerSelection] = useState(false);
  const [messagingProgress, setMessagingProgress] = useState(0);
  const [isMessaging, setIsMessaging] = useState(false);
  const [messagingResults, setMessagingResults] = useState<any[]>([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [showFeaturesPage, setShowFeaturesPage] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [onboardingData, setOnboardingData] = useState<OnboardingData | null>(null);
  const { toast } = useToast();
  
  const prompts = [
    "Find TikTok influencers in fitness niche with 50k+ followers...",
    "Create viral Reddit strategy for my SaaS product...",
    "Write SEO blog post about productivity hacks...",
    "Generate cold email sequences for B2B outreach...",
    "Analyze competitor social media performance...",
    "Build content calendar for next quarter...",
    "Deploy your next growth campaign..."
  ];

  // Enhanced Sidebar menu items
  const menuItems = [
    { 
      title: "Overview", 
      icon: BarChart3, 
      url: "#",
      description: "Dashboard & metrics"
    },
    { 
      title: "Active Campaigns", 
      icon: Target, 
      url: "#",
      description: "Running campaigns"
    },
    { 
      title: "Chat History", 
      icon: History, 
      url: "#",
      description: "Previous conversations"
    },
    { 
      title: "Outputs", 
      icon: FileText, 
      url: "#",
      description: "Generated content"
    },
    { 
      title: "Analytics", 
      icon: TrendingUp, 
      url: "#",
      description: "Performance data"
    },
    { 
      title: "Integrations", 
      icon: Zap, 
      url: "#",
      description: "Connected platforms"
    },
    { 
      title: "Data Sources", 
      icon: Database, 
      url: "#",
      description: "Connected data"
    },
    { 
      title: "Inbox", 
      icon: Mail, 
      url: "#",
      description: "Messages & alerts"
    }
  ];

  const accountItems = [
    { 
      title: "Account", 
      icon: User, 
      url: "#",
      description: "Profile settings"
    },
    { 
      title: "Billing", 
      icon: CreditCard, 
      url: "#",
      description: "Subscription & usage"
    },
    { 
      title: "Settings", 
      icon: Settings, 
      url: "#",
      description: "App preferences"
    },
    { 
      title: "Invite Team", 
      icon: UserPlus, 
      url: "#",
      description: "Add team members"
    },
    { 
      title: "Help & Support", 
      icon: HelpCircle, 
      url: "#",
      description: "Get assistance"
    }
  ];

  // Check for existing onboarding data on mount
  useEffect(() => {
    const savedOnboardingData = localStorage.getItem('cassius-onboarding');
    if (savedOnboardingData) {
      const data = JSON.parse(savedOnboardingData);
      setOnboardingData(data);
      setOnboardingComplete(true);
    }
  }, []);

  const processTikTokInfluencerRequest = (campaignName: string) => {
    setIsProcessing(true);
    setProcessingComplete(false);
    setResults([]);
    setShowInfluencerSelection(false);
    setShowAnalytics(false);
    
    const stages = [
      {name: 'Initializing Cassius AI Systems', duration: 300},
      {name: 'Scanning TikTok Creator Database', duration: 400},
      {name: 'Analyzing Engagement Patterns', duration: 350},
      {name: 'Calculating Response Probabilities', duration: 300},
      {name: 'Preparing Campaign Strategy', duration: 250}
    ];
    
    let currentProgress = 0;
    const totalDuration = stages.reduce((sum, stage) => sum + stage.duration, 0);
    
    const influencers = [
      { 
        id: 1, name: '@FitnessByJake', followers: '387.5K', engagementRate: '5.2%', 
        niche: 'Strength Training', responseRate: '43%', bestTimeToContact: '3-5 PM EST',
        avgViews: '25.3K', lastPost: '2 hours ago', brand: 'Premium Tier',
        email: 'business@fitnessbyjake.com', price: '$850/post'
      },
      { 
        id: 2, name: '@AlexFitJourney', followers: '195.3K', engagementRate: '7.8%', 
        niche: 'Weight Loss', responseRate: '62%', bestTimeToContact: '11 AM-1 PM EST',
        avgViews: '18.7K', lastPost: '4 hours ago', brand: 'Rising Star',
        email: 'alex@fitjourney.co', price: '$420/post'
      },
      { 
        id: 3, name: '@YogaWithMaria', followers: '876.2K', engagementRate: '4.1%', 
        niche: 'Yoga & Mindfulness', responseRate: '27%', bestTimeToContact: '7-9 AM EST',
        avgViews: '42.1K', lastPost: '1 hour ago', brand: 'Elite Creator',
        email: 'partnerships@yogawithmaria.com', price: '$1,200/post'
      },
      { 
        id: 4, name: '@TrainingWithTom', followers: '126.7K', engagementRate: '9.3%', 
        niche: 'HIIT Workouts', responseRate: '51%', bestTimeToContact: '6-8 PM EST',
        avgViews: '15.2K', lastPost: '3 hours ago', brand: 'High Engagement',
        email: 'tom@trainingwithtom.fit', price: '$380/post'
      },
      { 
        id: 5, name: '@NutritionNicole', followers: '245.8K', engagementRate: '6.7%', 
        niche: 'Diet & Nutrition', responseRate: '39%', bestTimeToContact: '9-11 AM EST',
        avgViews: '19.8K', lastPost: '5 hours ago', brand: 'Expert Authority',
        email: 'nicole@nutritionexpert.com', price: '$560/post'
      },
      { 
        id: 6, name: '@RunWithRebecca', followers: '163.4K', engagementRate: '8.2%', 
        niche: 'Running', responseRate: '47%', bestTimeToContact: '4-6 PM EST',
        avgViews: '16.9K', lastPost: '6 hours ago', brand: 'Consistent Creator',
        email: 'rebecca@runwithrebecca.com', price: '$440/post'
      }
    ];
    
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setCurrentStage(index);
        setProcessingStage(stage.name);
        
        const intervalId = setInterval(() => {
          currentProgress += 5;
          const overallProgress = Math.min(Math.round((currentProgress / totalDuration) * 100), 100);
          setProcessingProgress(overallProgress);
          
          if (currentProgress >= totalDuration) {
            clearInterval(intervalId);
            
            if (index === stages.length - 1) {
              setProcessingComplete(true);
              setResults(influencers);
              setIsProcessing(false);
              setShowInfluencerSelection(true);
              
              // Add AI response to chat
              const aiMessage = {
                id: Date.now(),
                content: `Found ${influencers.length} high-potential TikTok influencers in the fitness niche. Ready for campaign deployment.`,
                type: 'agent',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              };
              setMessages(prev => [...prev, aiMessage]);
            }
          }
        }, stage.duration / 20);
        
      }, stages.slice(0, index).reduce((sum, s) => sum + s.duration, 0));
    });
  };

  const handleInfluencerSelect = (influencer: any) => {
    setSelectedInfluencers(prev => {
      const isSelected = prev.find(inf => inf.id === influencer.id);
      if (isSelected) {
        return prev.filter(inf => inf.id !== influencer.id);
      } else {
        return [...prev, influencer];
      }
    });
  };

  const startMessagingCampaign = () => {
    setIsMessaging(true);
    setMessagingProgress(0);
    setShowInfluencerSelection(false);
    
    const progressInterval = setInterval(() => {
      setMessagingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsMessaging(false);
          setShowAnalytics(true);
          
          // Simulate messaging results
          const results = selectedInfluencers.map((inf, index) => ({
            name: inf.name,
            status: 'sent',
            readTime: index < 3 ? `${5 + index * 2} min ago` : null,
            reply: index < 2 ? [
              "Hey! This looks interesting. Can you send me more details?",
              "Love this concept! When can we start?"
            ][index] : null
          }));
          setMessagingResults(results);
          
          return 100;
        }
        return prev + 25;
      });
    }, 1500);
  };

  const handleSuggestedAction = (action: string) => {
    setInputValue(action);
    setShowTypewriter(false);
    toast({
      title: "✨ Cassius Ready",
      description: `Campaign prepared: ${action}`,
      duration: 3000,
    });
  };

  const activeTasks = [
    {
      title: 'TikTok Influencer Campaign',
      status: showAnalytics ? 'completed' : isMessaging ? 'executing' : showInfluencerSelection ? 'pending' : 'active',
      progress: showAnalytics ? 100 : isMessaging ? messagingProgress : showInfluencerSelection ? 85 : 67,
      description: showAnalytics ? 'Campaign deployed successfully. Monitoring responses and engagement.' :
                   isMessaging ? 'Executing personalized outreach to selected TikTok influencers...' :
                   showInfluencerSelection ? 'Awaiting influencer selection for campaign deployment.' :
                   'Scanning TikTok creator networks for partnership opportunities...',
      priority: 'high',
      campaign: campaigns.length > 0 ? campaigns[campaigns.length - 1].name : 'TikTok Marketing Campaign #1'
    },
    {
      title: 'SEO Content Optimization',
      status: 'active',
      progress: 78,
      description: 'Analyzing keyword opportunities and preparing content recommendations.',
      priority: 'medium',
      campaign: 'Content Strategy Campaign #3'
    },
    {
      title: 'Social Media Analytics',
      status: 'monitoring',
      progress: 42,
      description: 'Continuous monitoring of engagement metrics across all platforms.',
      priority: 'low',
      campaign: 'Analytics Monitoring Campaign #2'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    if (!showTypewriter) return;
    
    const currentPrompt = prompts[currentPromptIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentPrompt.length) {
        setTypewriterText(currentPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
        }, 2500);
      }
    }, 70);

    return () => clearInterval(typeInterval);
  }, [currentPromptIndex, showTypewriter]);

  const handleInputFocus = () => {
    setShowTypewriter(false);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setShowTypewriter(true);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isProcessing) return;
    
    // Add user message to chat history
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setShowChatHistory(true);
    
    const query = inputValue.toLowerCase();
    
    // Create new campaign
    const campaignId = campaigns.length + 1;
    const campaignName = `${getWorkspaceName()} Campaign #${campaignId}`;
    
    if (query.includes('tiktok') && (query.includes('influencer') || query.includes('creator'))) {
      const newCampaign = {
        id: campaignId,
        name: campaignName,
        type: 'TikTok Influencer',
        status: 'active',
        createdAt: new Date().toISOString()
      };
      setCampaigns(prev => [...prev, newCampaign]);
      processTikTokInfluencerRequest(campaignName);
    } else {
      // Add AI response
      setTimeout(() => {
        const aiMessage = {
          id: Date.now() + 1,
          content: 'Processing your request with Cassius Intelligence. Let me analyze the best approach for this campaign...',
          type: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 1000);
      
      toast({
        title: "Processing Command",
        description: "Cassius is analyzing your request",
      });
    }
  };

  const handleTaskSelect = (prompt: string) => {
    setInputValue(prompt);
    setShowTypewriter(false);
    setShowFeaturesPage(false);
    toast({
      title: "✨ Task Selected",
      description: `Ready to deploy: ${prompt.substring(0, 50)}...`,
      duration: 3000,
    });
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion.text);
    setShowTypewriter(false);
  };

  const handleShowFeatures = () => {
    setShowFeaturesPage(true);
  };

  const handleBackFromFeatures = () => {
    setShowFeaturesPage(false);
  };

  // Personalized suggestions based on onboarding data
  const getPersonalizedSuggestions = () => {
    if (!onboardingData) {
      return [
        { text: "Find LinkedIn B2B prospects in SaaS industry", icon: Target, category: "Lead Generation" },
        { text: "Generate viral Twitter thread about AI trends", icon: Sparkles, category: "Content Creation" },
        { text: "Create YouTube influencer outreach campaign", icon: Users, category: "Influencer Marketing" },
        { text: "Build content calendar for Q1 2024", icon: Brain, category: "Strategy Planning" },
        { text: "Analyze competitor pricing and positioning", icon: TrendingUp, category: "Market Research" }
      ];
    }

    const suggestions = [];
    const { businessType, goals } = onboardingData;

    // Business type specific suggestions
    if (businessType === 'saas') {
      suggestions.push(
        { text: "Find B2B prospects on LinkedIn for SaaS outreach", icon: Target, category: "Lead Generation" },
        { text: "Create product demo content for social media", icon: Sparkles, category: "Content Creation" }
      );
    } else if (businessType === 'ecommerce') {
      suggestions.push(
        { text: "Find fashion influencers for product collaborations", icon: Users, category: "Influencer Marketing" },
        { text: "Create viral TikTok content for product showcases", icon: Sparkles, category: "Content Creation" }
      );
    } else if (businessType === 'startup') {
      suggestions.push(
        { text: "Build waitlist and pre-launch buzz campaign", icon: Target, category: "Launch Strategy" },
        { text: "Create thought leadership content on industry trends", icon: Brain, category: "Content Creation" }
      );
    } else {
      suggestions.push(
        { text: `Find potential clients in ${businessType} industry`, icon: Target, category: "Lead Generation" },
        { text: `Create content showcasing ${businessType} expertise`, icon: Sparkles, category: "Content Creation" }
      );
    }

    // Goal-based suggestions
    if (goals.includes('awareness')) {
      suggestions.push({ text: "Launch brand awareness campaign across social platforms", icon: TrendingUp, category: "Brand Building" });
    }
    if (goals.includes('leads')) {
      suggestions.push({ text: "Set up automated lead generation funnel", icon: Zap, category: "Lead Generation" });
    }
    if (goals.includes('content')) {
      suggestions.push({ text: "Generate month's worth of content in your brand voice", icon: Brain, category: "Content Strategy" });
    }

    // Fill remaining slots with general suggestions
    while (suggestions.length < 5) {
      suggestions.push(
        { text: "Analyze competitor pricing and positioning", icon: TrendingUp, category: "Market Research" },
        { text: "Build content calendar for next quarter", icon: Brain, category: "Strategy Planning" }
      );
    }

    return suggestions.slice(0, 5);
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    setOnboardingData(data);
    setOnboardingComplete(true);
    localStorage.setItem('cassius-onboarding', JSON.stringify(data));
    
    toast({
      title: "🎉 Welcome to Cassius!",
      description: `Your ${data.businessName} workspace is ready. Let's start growing your business!`,
      duration: 4000,
    });
  };

  const getWorkspaceName = () => {
    return onboardingData?.businessName || 'Your Workspace';
  };

  // If showing features page, render it instead of main dashboard
  if (showFeaturesPage) {
    return <FeaturesPage onTaskSelect={handleTaskSelect} onBack={handleBackFromFeatures} />;
  }

  // If onboarding isn't complete, show onboarding flow
  if (!onboardingComplete) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative font-inter">
        {/* Completely Hidden Sidebar by Default */}
        <Sidebar collapsible="offcanvas" variant="sidebar" className="z-50">
          <SidebarContent className="glass-oracle border-r border-purple-200/30 bg-transparent backdrop-blur-xl">
            <div className="p-4 border-b border-purple-200/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div className="group-data-[collapsible=icon]:hidden">
                  <h2 className="text-sm font-bold text-readable-purple">Cassius</h2>
                  <p className="text-xs text-readable">Marketing AI</p>
                </div>
              </div>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel className="text-readable-purple font-semibold uppercase tracking-wider text-xs px-4 py-3">
                Workspace
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 px-2">
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="text-readable-dark hover:text-readable-purple hover:bg-purple-50/20 transition-colors rounded-xl px-3 py-2 w-full flex items-center space-x-3">
                        <a href={item.url} className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <div className="group-data-[collapsible=icon]:hidden">
                            <span className="font-medium text-sm">{item.title}</span>
                            <p className="text-xs text-readable opacity-70">{item.description}</p>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-readable-purple font-semibold uppercase tracking-wider text-xs px-4 py-3">
                Account
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 px-2">
                  {accountItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="text-readable-dark hover:text-readable-purple hover:bg-purple-50/20 transition-colors rounded-xl px-3 py-2 w-full flex items-center space-x-3">
                        <a href={item.url} className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <div className="group-data-[collapsible=icon]:hidden">
                            <span className="font-medium text-sm">{item.title}</span>
                            <p className="text-xs text-readable opacity-70">{item.description}</p>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto p-4 border-t border-purple-200/20 group-data-[collapsible=icon]:hidden">
              <button className="flex items-center space-x-3 text-readable hover:text-readable-purple transition-colors w-full text-left">
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          {/* Header */}
          <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-200/20 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors text-readable-purple border border-purple-200/30 flex items-center justify-center">
                    <Menu className="w-5 h-5" />
                  </SidebarTrigger>
                  <h1 className="text-xl font-bold text-purple-700" style={{ letterSpacing: '-0.02em' }}>cassius</h1>
                </div>
                <div className="glass-oracle rounded-xl p-4 subtle-glow">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-readable-purple">{getWorkspaceName()} Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Interface with Enhanced 3D Bevel */}
          <div className="relative z-30 px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="glass-chat-3d-enhanced rounded-3xl p-10 subtle-glow">
                <form onSubmit={handleSearchSubmit} className="flex space-x-6 mb-6">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      disabled={isProcessing}
                      className="flex-1 glass-oracle rounded-2xl px-8 py-6 text-readable-dark focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-lg bg-transparent border border-purple-200/30 w-full placeholder-slate-400"
                    />
                    {showTypewriter && !inputValue && (
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 typewriter-text pointer-events-none">
                        {typewriterText}
                        <span className="animate-pulse text-purple-500">|</span>
                      </div>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="glass-oracle rounded-2xl px-12 py-6 text-readable-purple hover:bg-purple-50/10 transition-colors font-semibold tracking-wide disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        <span>PROCESSING</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Swords className="w-5 h-5" />
                        <span>DEPLOY</span>
                      </div>
                    )}
                  </button>
                </form>

                {/* Chat Action Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <Paperclip className="w-4 h-4 text-readable-purple" />
                  </button>
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <AtSign className="w-4 h-4 text-readable-purple" />
                  </button>
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <Plus className="w-4 h-4 text-readable-purple" />
                  </button>
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <ImageIcon className="w-4 h-4 text-readable-purple" />
                  </button>
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <Mic className="w-4 h-4 text-readable-purple" />
                  </button>
                  <button className="glass-oracle rounded-xl p-3 hover:bg-purple-50/10 transition-colors">
                    <MessageSquare className="w-4 h-4 text-readable-purple" />
                  </button>
                </div>

                {/* Chat History */}
                {showChatHistory && messages.length > 0 && (
                  <div className="mt-8 space-y-4 max-h-64 overflow-y-auto">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          message.type === 'user' 
                            ? 'glass-oracle text-readable-dark' 
                            : 'glass-oracle text-readable-dark'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs text-readable mt-2">{message.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Processing State */}
                {isProcessing && (
                  <div className="mt-8 animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-readable-purple font-medium text-lg">{processingStage}</span>
                      </div>
                      <span className="text-readable-purple font-bold text-xl">{processingProgress}%</span>
                    </div>
                    <div className="glass-task rounded-full h-6 border border-purple-200/30 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400/60 to-purple-600/40 backdrop-blur-sm rounded-full transition-all duration-500"
                        style={{ width: `${processingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {/* Influencer Selection */}
                {showInfluencerSelection && (
                  <div className="mt-10 animate-fade-in">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-bold text-slate-700">Select Influencers for Outreach</h3>
                      <div className="text-slate-500 font-medium">
                        {selectedInfluencers.length} selected
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {results.map((influencer, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => handleInfluencerSelect(influencer)}
                          className={`glass-item rounded-2xl p-6 border cursor-pointer transition-colors ${
                            selectedInfluencers.find(inf => inf.id === influencer.id) 
                              ? 'border-purple-400/40 purple-glow' 
                              : 'border-purple-200/20 hover:border-purple-300/30'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-slate-700 font-bold text-lg">{influencer.name}</h4>
                            <div className="text-right">
                              <span className="text-purple-600 font-bold">{influencer.followers}</span>
                              <div className="text-sm text-slate-500">{influencer.price}</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Engagement:</span>
                              <span className="text-slate-700 font-medium">{influencer.engagementRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Response:</span>
                              <span className="text-slate-700 font-medium">{influencer.responseRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Avg Views:</span>
                              <span className="text-slate-700 font-medium">{influencer.avgViews}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Last Post:</span>
                              <span className="text-slate-700 font-medium">{influencer.lastPost}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-medium">
                        Estimated campaign cost: ${selectedInfluencers.reduce((sum, inf) => sum + parseInt(inf.price.replace('$', '').replace('/post', '')), 0).toLocaleString()}
                      </span>
                      <button 
                        onClick={startMessagingCampaign}
                        disabled={selectedInfluencers.length === 0}
                        className="glass-panel rounded-xl px-10 py-4 text-purple-600 hover:bg-purple-50/10 transition-colors font-bold purple-glow disabled:opacity-50"
                      >
                        DEPLOY CAMPAIGN
                      </button>
                    </div>
                  </div>
                )}

                {/* Messaging Progress */}
                {isMessaging && (
                  <div className="mt-10 animate-fade-in">
                    <h3 className="text-xl font-bold text-slate-700 mb-6">Cassius Deploying Campaign...</h3>
                    <div className="space-y-4">
                      {selectedInfluencers.map((inf, idx) => (
                        <div key={idx} className="glass-item rounded-xl p-5 flex justify-between items-center">
                          <span className="text-slate-700 font-medium">{inf.name}</span>
                          <div className="flex items-center space-x-3">
                            {messagingProgress > (idx * 25) && (
                              <span className="text-purple-600 text-sm font-medium">Message Sent</span>
                            )}
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <div className="glass-item rounded-full h-4 border border-purple-200/30 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400/60 to-purple-600/40 backdrop-blur-sm rounded-full transition-all duration-500"
                          style={{ width: `${messagingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics Dashboard */}
                {showAnalytics && (
                  <div className="mt-10 animate-fade-in">
                    <h3 className="text-xl font-bold text-slate-700 mb-6">Campaign Analytics - Live Results</h3>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="glass-item rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600">{messagingResults.filter(r => r.status === 'sent').length}</div>
                        <div className="text-sm text-slate-500 mt-1">Messages Sent</div>
                      </div>
                      <div className="glass-item rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-500">{messagingResults.filter(r => r.readTime).length}</div>
                        <div className="text-sm text-slate-500 mt-1">Messages Read</div>
                      </div>
                      <div className="glass-item rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-700">{messagingResults.filter(r => r.reply).length}</div>
                        <div className="text-sm text-slate-500 mt-1">Replies Received</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {messagingResults.map((result, idx) => (
                        <div key={idx} className="glass-item rounded-xl p-5">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <span className="text-slate-700 font-medium">{result.name}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                result.reply ? 'bg-purple-100 text-purple-700' :
                                result.readTime ? 'bg-purple-50 text-purple-600' :
                                'bg-slate-100 text-slate-600'
                              }`}>
                                {result.reply ? 'Replied' : result.readTime ? 'Read' : 'Sent'}
                              </span>
                            </div>
                            {result.readTime && (
                              <span className="text-slate-500 text-sm">Read {result.readTime}</span>
                            )}
                          </div>
                          {result.reply && (
                            <div className="mt-3 p-4 bg-purple-50/50 rounded-lg border-l-3 border-purple-400">
                              <span className="text-purple-700 text-sm">"{result.reply}"</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Active Tasks - Left */}
                <div className="glass-oracle rounded-3xl p-8 subtle-glow">
                  <h2 className="section-title mb-8">ACTIVE TASKS</h2>
                  <div className="space-y-6">
                    {activeTasks.map((task, index) => (
                      <div key={index} className="glass-oracle rounded-2xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-3 h-3 rounded-full ${
                            task.status === 'completed' ? 'bg-purple-600' : 
                            task.status === 'executing' ? 'bg-purple-500 animate-pulse' : 
                            task.status === 'pending' ? 'bg-purple-400' : 
                            'bg-purple-300 animate-pulse'
                          }`}></div>
                          <span className="gradient-text-purple font-bold text-sm tracking-wider uppercase">{task.status}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            task.priority === 'high' ? 'bg-purple-100 text-readable-purple' :
                            task.priority === 'medium' ? 'bg-purple-50 text-readable-purple' :
                            'bg-slate-100 text-readable'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                        
                        <h3 className="text-readable-dark font-bold text-lg mb-3">{task.title}</h3>
                        <p className="text-readable text-sm leading-relaxed mb-4">{task.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-readable tracking-wider">Progress</span>
                            <span className="text-xs gradient-text-purple font-bold">{task.progress}%</span>
                          </div>
                          <div className="glass-oracle rounded-full h-3 border border-purple-200/30 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-400/60 to-purple-600/40 backdrop-blur-sm rounded-full transition-all duration-500"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-3 border-t border-purple-200/20">
                          <Crown className="w-3 h-3 text-readable-gold" />
                          <span className="text-xs gradient-text-gold">Powered by {task.campaign}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Suggestions - Right */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="section-title">SUGGESTIONS</h2>
                    <button 
                      onClick={handleShowFeatures}
                      className="text-xs text-readable-purple hover:text-purple-700 transition-colors font-medium tracking-wider uppercase"
                    >
                      See More →
                    </button>
                  </div>
                  {getPersonalizedSuggestions().map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(action)}
                      className="glass-suggestion-enhanced rounded-2xl p-6 w-full text-left group transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl glass-oracle flex items-center justify-center group-hover:gold-glow transition-colors">
                            <action.icon className="w-6 h-6 text-readable-gold" />
                          </div>
                          <div className="text-xs gradient-text-gold font-medium tracking-wider uppercase">{action.category}</div>
                        </div>
                      </div>
                      
                      <p className="text-readable-dark text-base font-medium leading-relaxed group-hover:text-readable-purple transition-colors mb-4">
                        {action.text}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-readable-gold" />
                          <span className="text-sm gradient-text-gold">Cassius Ready</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm gradient-text-purple opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Execute →</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Latest Output - Full Width */}
              <div className="glass-oracle rounded-3xl p-8 subtle-glow mb-8">
                <h2 className="section-title mb-8">LATEST OUTPUT</h2>
                <OutputViewer />
              </div>

              {/* Analytics Sections */}
              <div className="space-y-16">
                <MetricsPanel />
                <DataVisualization />
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
