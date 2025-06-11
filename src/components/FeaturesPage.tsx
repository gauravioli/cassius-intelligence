import React from 'react';
import { 
  Users, 
  Target, 
  FileText, 
  Share2, 
  Heart, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Rocket,
  Eye,
  DollarSign,
  MessageSquare,
  Globe,
  Handshake,
  Gift,
  Palette,
  Award,
  Crown,
  ArrowLeft,
  Search,
  Brain,
  Calendar,
  Mail,
  Camera,
  Megaphone,
  Settings,
  LineChart,
  MousePointer
} from 'lucide-react';

interface FeatureTask {
  title: string;
  description: string;
  prompt: string;
}

interface FeatureCategory {
  id: number;
  title: string;
  icon: any;
  description: string;
  color: string;
  tasks: FeatureTask[];
}

interface FeaturesPageProps {
  onTaskSelect: (prompt: string) => void;
  onBack: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onTaskSelect, onBack }) => {
  const featureCategories: FeatureCategory[] = [
    {
      id: 1,
      title: "Market & Customer Research",
      icon: Search,
      description: "Deep dive into your target market and customer behavior",
      color: "purple",
      tasks: [
        {
          title: "Customer Persona Development",
          description: "Generates personas based on target audience behaviour scraped from Reddit, Twitter, and forums",
          prompt: "Create detailed customer personas for my business by analyzing social media behavior and forum discussions"
        },
        {
          title: "Competitor Analysis", 
          description: "Produces live competitor reports with positioning summaries, pricing models, and feature matrices",
          prompt: "Generate a comprehensive competitor analysis report with positioning, pricing, and feature comparison"
        },
        {
          title: "Social Listening & Trends",
          description: "Scrapes social media + forums to identify trends and surface whitespace insights. Live feed report",
          prompt: "Monitor social media trends and identify market opportunities in my industry"
        }
      ]
    },
    {
      id: 2,
      title: "Positioning & Strategy",
      icon: Target,
      description: "Refine your market position and go-to-market strategy",
      color: "blue",
      tasks: [
        {
          title: "Value Proposition Clarity",
          description: "Refines and tests multiple versions of your UVP with AI feedback loops",
          prompt: "Help me refine and test multiple versions of my unique value proposition"
        },
        {
          title: "GTM Planning",
          description: "Generates a timeline and checklist for launch, including assets and distribution strategies",
          prompt: "Create a comprehensive go-to-market plan with timeline and launch checklist"
        },
        {
          title: "Channel Prioritisation",
          description: "Recommends top acquisition channels based on your product, audience, and budget",
          prompt: "Analyze and prioritize the best marketing channels for my product and target audience"
        }
      ]
    },
    {
      id: 3,
      title: "Content Ideation & Creation",
      icon: FileText,
      description: "Generate and optimize content across all platforms",
      color: "green",
      tasks: [
        {
          title: "Longform Creation",
          description: "Writes SEO blogs, emails, or scripts with voice tone matching. Can post to CMS",
          prompt: "Write SEO-optimized blog posts and long-form content that matches my brand voice"
        },
        {
          title: "Shortform Creation",
          description: "Generates IG carousels, Twitter threads, TikToks, hooks and captions per platform",
          prompt: "Create engaging short-form content for Instagram, Twitter, and TikTok"
        },
        {
          title: "Content Repurposing",
          description: "Turns a blog into 5 formats: Twitter thread, carousel, script, email, and blog",
          prompt: "Repurpose my existing content into multiple formats across different platforms"
        },
        {
          title: "SEO/LLM-EO",
          description: "Reviews your site and provides ranking suggestions. Optionally modifies meta content",
          prompt: "Audit my website for SEO opportunities and improve search rankings"
        }
      ]
    },
    {
      id: 4,
      title: "Distribution & Scheduling",
      icon: Share2,
      description: "Automate content distribution across platforms",
      color: "orange",
      tasks: [
        {
          title: "Multi-platform Posting",
          description: "Automatically posts content to IG, Twitter, TikTok, LinkedIn, and blogs",
          prompt: "Set up automated content posting across all my social media platforms"
        },
        {
          title: "Smart Timing",
          description: "Learns best engagement windows and posts at ideal times",
          prompt: "Optimize my posting schedule based on audience engagement patterns"
        },
        {
          title: "Email Newsletter Management",
          description: "Writes weekly newsletters, builds email lists, and handles sends via Mailchimp/Beehiiv",
          prompt: "Create and manage email newsletters with automated list building"
        }
      ]
    },
    {
      id: 5,
      title: "Influencer & Community Outreach",
      icon: Heart,
      description: "Connect with influencers and engage communities",
      color: "pink",
      tasks: [
        {
          title: "Influencer Discovery",
          description: "Scrapes TikTok/IG for niche influencers by follower count and engagement",
          prompt: "Find relevant influencers in my niche with high engagement rates"
        },
        {
          title: "Outreach Automation",
          description: "Emails and DMs influencers with promo opportunity messages",
          prompt: "Create personalized outreach campaigns for influencer partnerships"
        },
        {
          title: "Community Engagement",
          description: "Participates in subreddit or Discord convos, subtly plugging your product",
          prompt: "Engage with relevant communities and forums to build brand awareness"
        }
      ]
    },
    {
      id: 6,
      title: "Lead Gen & Conversion",
      icon: Zap,
      description: "Generate and convert leads effectively",
      color: "yellow",
      tasks: [
        {
          title: "Cold Lead Sourcing",
          description: "Scrapes relevant lead info via LinkedIn, Apollo, and Reddit for outreach",
          prompt: "Source high-quality leads from LinkedIn and other platforms for outreach"
        },
        {
          title: "Landing Page Creation",
          description: "Instantly builds a waitlist or landing page with embedded forms",
          prompt: "Create high-converting landing pages with embedded lead capture forms"
        },
        {
          title: "CTA Optimisation",
          description: "Tests different CTA variants for clicks and conversions",
          prompt: "Optimize my call-to-action buttons for maximum conversion rates"
        },
        {
          title: "A/B Testing",
          description: "Helps you run and evaluate A/B variants for landing pages or emails",
          prompt: "Set up A/B tests for my landing pages and email campaigns"
        }
      ]
    },
    {
      id: 7,
      title: "Funnel & CRM Automation",
      icon: Settings,
      description: "Automate your sales funnel and customer relationships",
      color: "indigo",
      tasks: [
        {
          title: "Lead Tracking",
          description: "Tracks who clicked what, interacted where, and scores leads accordingly",
          prompt: "Set up comprehensive lead tracking and scoring system"
        },
        {
          title: "CRM Setup",
          description: "Auto-sets up CRM (e.g., Streak or HubSpot Lite) and syncs lead data",
          prompt: "Configure and optimize my CRM system with automated lead data sync"
        },
        {
          title: "Nurture Flows",
          description: "Creates and launches drip email campaigns to warm leads over time",
          prompt: "Create automated email nurture sequences for lead conversion"
        }
      ]
    },
    {
      id: 8,
      title: "Analytics & Feedback",
      icon: BarChart3,
      description: "Track performance and gather insights",
      color: "teal",
      tasks: [
        {
          title: "Attribution",
          description: "Tracks source of leads by UTM/behavior and maps ROI per channel",
          prompt: "Set up marketing attribution tracking to measure ROI by channel"
        },
        {
          title: "Marketing ROI",
          description: "Connects campaign activities to site metrics and revenue estimates",
          prompt: "Analyze marketing ROI and connect campaigns to revenue impact"
        },
        {
          title: "Content Feedback",
          description: "Gathers qualitative feedback from polls, comments, and auto-summarises learnings",
          prompt: "Collect and analyze content feedback to improve performance"
        }
      ]
    },
    {
      id: 9,
      title: "Launch & Hype Building",
      icon: Rocket,
      description: "Build momentum for your product launch",
      color: "red",
      tasks: [
        {
          title: "Waitlist Building",
          description: "Creates branded waitlist form and embeds API-ready widget for your site",
          prompt: "Build an effective waitlist campaign with branded forms and widgets"
        },
        {
          title: "Launch Roadmap",
          description: "Builds a daily/weekly plan from today to launch",
          prompt: "Create a detailed launch roadmap with daily tasks and milestones"
        },
        {
          title: "PR & Buzz Generation",
          description: "Finds relevant reporters, drafts cold emails, and submits to Product Hunt/Reddit/etc",
          prompt: "Generate PR buzz and media coverage for my product launch"
        }
      ]
    },
    {
      id: 10,
      title: "Conversion-Focused UX",
      icon: MousePointer,
      description: "Improve conversion through better UX design",
      color: "purple",
      tasks: [
        {
          title: "Landing Page Review",
          description: "Reviews landing page or app UI and suggests improvements to layout, copy, CTA hierarchy",
          prompt: "Audit my landing page UX and suggest conversion improvements"
        },
        {
          title: "Wireframe Generation",
          description: "Optionally generates a Figma wireframe or Loom-style walkthrough",
          prompt: "Create wireframes and UX improvements for better conversion rates"
        }
      ]
    },
    {
      id: 11,
      title: "Pricing & Monetisation",
      icon: DollarSign,
      description: "Optimize your pricing strategy",
      color: "green",
      tasks: [
        {
          title: "Pricing Strategy",
          description: "Suggests pricing tiers based on comps and buyer personas",
          prompt: "Develop an optimal pricing strategy based on market analysis"
        },
        {
          title: "Willingness-to-Pay Analysis",
          description: "Simulates customer willingness-to-pay based on existing SaaS models",
          prompt: "Analyze customer willingness-to-pay for my product features"
        },
        {
          title: "Pricing Page Creation",
          description: "Outputs a simple pricing page draft",
          prompt: "Create an effective pricing page that converts visitors"
        }
      ]
    },
    {
      id: 12,
      title: "Customer Interview Simulator",
      icon: MessageSquare,
      description: "AI-powered customer validation",
      color: "blue",
      tasks: [
        {
          title: "Interview Simulation",
          description: "Simulates 5–10 customer profiles and asks/answers founder-inputted questions",
          prompt: "Run AI customer interviews to validate my product assumptions"
        },
        {
          title: "Objection Analysis",
          description: "Extracts top objections, pain points, and motivations",
          prompt: "Identify common customer objections and pain points"
        }
      ]
    },
    {
      id: 13,
      title: "Landing Page Split Testing",
      icon: Globe,
      description: "Test multiple messaging approaches",
      color: "orange",
      tasks: [
        {
          title: "Multi-variant Generation",
          description: "Generates 3–5 micro-landing pages with different messaging angles",
          prompt: "Create multiple landing page variants to test different messaging"
        },
        {
          title: "Performance Tracking",
          description: "Deploys them with unique links and tracks CTR/conversion",
          prompt: "Set up landing page split tests with conversion tracking"
        }
      ]
    },
    {
      id: 14,
      title: "Partnership Sourcing",
      icon: Handshake,
      description: "Find collaboration opportunities",
      color: "indigo",
      tasks: [
        {
          title: "Partner Discovery",
          description: "Scrapes and suggests aligned brands or tools for collaboration",
          prompt: "Find potential partnership opportunities with aligned brands"
        },
        {
          title: "Outreach Campaigns",
          description: "Generates cold outreach DMs/emails and suggests collab formats",
          prompt: "Create partnership outreach campaigns with collaboration ideas"
        }
      ]
    },
    {
      id: 15,
      title: "Affiliate Program Setup",
      icon: Gift,
      description: "Build referral and affiliate channels",
      color: "pink",
      tasks: [
        {
          title: "Program Structure",
          description: "Creates affiliate terms, structure, and tracking links",
          prompt: "Set up a comprehensive affiliate program with tracking"
        },
        {
          title: "Onboarding Materials",
          description: "Writes copy for affiliate onboarding page",
          prompt: "Create affiliate onboarding materials and promotional assets"
        }
      ]
    },
    {
      id: 16,
      title: "Ad Creative Generation",
      icon: Palette,
      description: "Create high-performing ad assets",
      color: "red",
      tasks: [
        {
          title: "Creative Assets",
          description: "Generates image + video ad scripts, headlines, hooks, UGC prompts",
          prompt: "Generate high-converting ad creatives and video scripts"
        },
        {
          title: "Video Variants",
          description: "Connects with tools like Creatomate to auto-generate video variants",
          prompt: "Create multiple video ad variants for testing"
        }
      ]
    },
    {
      id: 17,
      title: "Earned Media Discovery",
      icon: Award,
      description: "Find press and mention opportunities",
      color: "yellow",
      tasks: [
        {
          title: "Media Opportunities",
          description: "Finds subreddit flairs, FB groups, HARO-like platforms, or blogs for features",
          prompt: "Discover earned media opportunities and press coverage options"
        },
        {
          title: "Pitch Creation",
          description: "Drafts copy/pitch to submit and can auto-submit if APIs allow",
          prompt: "Create compelling media pitches for press coverage"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: "border-purple-300/40 bg-purple-50/30 text-purple-700 hover:bg-purple-50/50",
      blue: "border-blue-300/40 bg-blue-50/30 text-blue-700 hover:bg-blue-50/50",
      green: "border-green-300/40 bg-green-50/30 text-green-700 hover:bg-green-50/50",
      orange: "border-orange-300/40 bg-orange-50/30 text-orange-700 hover:bg-orange-50/50",
      pink: "border-pink-300/40 bg-pink-50/30 text-pink-700 hover:bg-pink-50/50",
      yellow: "border-yellow-300/40 bg-yellow-50/30 text-yellow-700 hover:bg-yellow-50/50",
      indigo: "border-indigo-300/40 bg-indigo-50/30 text-indigo-700 hover:bg-indigo-50/50",
      teal: "border-teal-300/40 bg-teal-50/30 text-teal-700 hover:bg-teal-50/50",
      red: "border-red-300/40 bg-red-50/30 text-red-700 hover:bg-red-50/50"
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-gold-50/20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-200/30 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="glass-oracle rounded-xl p-3 hover:bg-purple-50/20 transition-colors text-readable-purple border border-purple-200/30 flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-purple-700" style={{ letterSpacing: '-0.02em' }}>
                  Cassius Intelligence Features
                </h1>
                <p className="text-readable mt-1">Complete marketing automation suite powered by AI agents</p>
              </div>
            </div>
            <div className="glass-oracle rounded-xl p-4 subtle-glow">
              <div className="flex items-center space-x-3">
                <Crown className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-readable-purple">17 Feature Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featureCategories.map((category) => (
              <div key={category.id} className="glass-oracle rounded-3xl p-8 subtle-glow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-readable-dark">{category.title}</h3>
                    <p className="text-sm text-readable">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.tasks.map((task, taskIndex) => (
                    <button
                      key={taskIndex}
                      onClick={() => onTaskSelect(task.prompt)}
                      className="glass-item rounded-xl p-4 w-full text-left group hover:purple-glow transition-all"
                    >
                      <h4 className="font-semibold text-readable-dark group-hover:text-purple-700 transition-colors mb-2">
                        {task.title}
                      </h4>
                      <p className="text-sm text-readable leading-relaxed">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-purple-200/20">
                        <span className="text-xs text-readable-purple font-medium">Click to Deploy →</span>
                        <Brain className="w-4 h-4 text-readable-gold opacity-60" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage; 