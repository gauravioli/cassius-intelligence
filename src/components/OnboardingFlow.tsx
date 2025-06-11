import React, { useState } from 'react';
import { 
  Crown, ArrowRight, Building, Users, Target, Briefcase, Trophy, 
  Zap, TrendingUp, MapPin, Shield, Sword, Coins, Scroll
} from 'lucide-react';

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

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingData>({
    businessName: '',
    businessType: '',
    industry: '',
    targetAudience: '',
    goals: [],
    brandVoice: '',
    experience: '',
    budget: '',
    priorities: []
  });

  const totalSteps = 8;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }));
  };

  const businessTypes = [
    { id: 'saas', label: 'SaaS/Software', icon: Shield },
    { id: 'ecommerce', label: 'E-commerce', icon: Coins },
    { id: 'service', label: 'Service Business', icon: Sword },
    { id: 'startup', label: 'Early Startup', icon: Trophy },
    { id: 'agency', label: 'Agency/Consulting', icon: Crown },
    { id: 'creator', label: 'Creator/Influencer', icon: Scroll }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 
    'Real Estate', 'Fitness', 'Food & Beverage', 'Travel', 'Other'
  ];

  const goals = [
    { id: 'awareness', label: 'Increase Brand Awareness', icon: TrendingUp },
    { id: 'leads', label: 'Generate More Leads', icon: Target },
    { id: 'sales', label: 'Boost Sales', icon: Coins },
    { id: 'content', label: 'Create Better Content', icon: Scroll },
    { id: 'engagement', label: 'Improve Engagement', icon: Users },
    { id: 'automation', label: 'Automate Marketing', icon: Zap }
  ];

  const brandVoices = [
    'Professional & Authoritative', 'Friendly & Conversational', 
    'Bold & Innovative', 'Trustworthy & Reliable', 'Creative & Playful'
  ];

  const experiences = [
    'Complete Beginner', 'Some Experience', 'Intermediate', 'Advanced', 'Expert'
  ];

  const budgets = [
    'Under $1,000/month', '$1,000-$5,000/month', '$5,000-$15,000/month', 
    '$15,000-$50,000/month', 'Over $50,000/month'
  ];

  const priorities = [
    { id: 'speed', label: 'Fast Results' },
    { id: 'quality', label: 'High Quality' },
    { id: 'cost', label: 'Cost Effectiveness' },
    { id: 'scale', label: 'Scalability' },
    { id: 'innovation', label: 'Innovation' }
  ];

  const getStepIcon = (step: number) => {
    const icons = [Crown, Building, MapPin, Users, Target, Scroll, Trophy, Sword];
    const IconComponent = icons[step];
    return <IconComponent className="w-6 h-6 text-purple-600" />;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.businessName.trim() !== '';
      case 1: return formData.businessType !== '';
      case 2: return formData.industry !== '';
      case 3: return formData.targetAudience.trim() !== '';
      case 4: return formData.goals.length > 0;
      case 5: return formData.brandVoice !== '';
      case 6: return formData.experience !== '';
      case 7: return formData.budget !== '' && formData.priorities.length > 0;
      default: return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
              <Crown className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-readable-dark">Welcome to Cassius AI</h2>
              <p className="text-lg text-readable max-w-2xl mx-auto leading-relaxed">
                Your AI-powered marketing intelligence platform. Let's personalize your experience in just a few steps.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="Enter your business name"
                className="w-full glass-oracle rounded-xl px-6 py-4 text-readable-dark placeholder-readable/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-white/10 border border-purple-200/20"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">What type of business are you?</h3>
              <p className="text-readable">This helps us customize your marketing strategies</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {businessTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => updateFormData('businessType', type.id)}
                    className={`glass-item rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 ${
                      formData.businessType === type.id 
                        ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                        : 'hover:border-purple-200/40'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-100/50 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="font-semibold text-readable-dark">{type.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">What industry are you in?</h3>
              <p className="text-readable">We'll tailor recommendations to your industry</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => updateFormData('industry', industry)}
                  className={`glass-item rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 ${
                    formData.industry === industry 
                      ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                      : 'hover:border-purple-200/40'
                  }`}
                >
                  <span className="font-medium text-readable-dark">{industry}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">Who is your target audience?</h3>
              <p className="text-readable">Describe your ideal customers</p>
            </div>
            <div className="space-y-4">
              <textarea
                value={formData.targetAudience}
                onChange={(e) => updateFormData('targetAudience', e.target.value)}
                placeholder="e.g., Small business owners aged 25-45 who are tech-savvy and looking to grow their online presence..."
                rows={4}
                className="w-full glass-oracle rounded-xl px-6 py-4 text-readable-dark placeholder-readable/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-white/10 border border-purple-200/20 resize-none"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">What are your main goals?</h3>
              <p className="text-readable">Select all that apply</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {goals.map((goal) => {
                const IconComponent = goal.icon;
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleArrayValue('goals', goal.id)}
                    className={`glass-item rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 ${
                      formData.goals.includes(goal.id) 
                        ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                        : 'hover:border-purple-200/40'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-100/50 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="font-semibold text-readable-dark">{goal.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">What's your brand voice?</h3>
              <p className="text-readable">How do you want to communicate with your audience?</p>
            </div>
            <div className="space-y-3">
              {brandVoices.map((voice) => (
                <button
                  key={voice}
                  onClick={() => updateFormData('brandVoice', voice)}
                  className={`w-full glass-item rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 ${
                    formData.brandVoice === voice 
                      ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                      : 'hover:border-purple-200/40'
                  }`}
                >
                  <span className="font-medium text-readable-dark">{voice}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">Your marketing experience level?</h3>
              <p className="text-readable">This helps us adjust our recommendations</p>
            </div>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <button
                  key={exp}
                  onClick={() => updateFormData('experience', exp)}
                  className={`w-full glass-item rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 ${
                    formData.experience === exp 
                      ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                      : 'hover:border-purple-200/40'
                  }`}
                >
                  <span className="font-medium text-readable-dark">{exp}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-readable-dark mb-4">Final details</h3>
              <p className="text-readable">Help us understand your budget and priorities</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-readable-dark mb-3">Monthly marketing budget</h4>
                <div className="grid grid-cols-1 gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => updateFormData('budget', budget)}
                      className={`glass-item rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 ${
                        formData.budget === budget 
                          ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                          : 'hover:border-purple-200/40'
                      }`}
                    >
                      <span className="font-medium text-readable-dark">{budget}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-readable-dark mb-3">What matters most to you? (Select up to 3)</h4>
                <div className="grid grid-cols-2 gap-3">
                  {priorities.map((priority) => (
                    <button
                      key={priority.id}
                      onClick={() => toggleArrayValue('priorities', priority.id)}
                      disabled={!formData.priorities.includes(priority.id) && formData.priorities.length >= 3}
                      className={`glass-item rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                        formData.priorities.includes(priority.id) 
                          ? 'purple-glow border-purple-300/60 bg-purple-50/30' 
                          : 'hover:border-purple-200/40'
                      }`}
                    >
                      <span className="font-medium text-readable-dark">{priority.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-gold-50/20 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-readable">Step {currentStep + 1} of {totalSteps}</span>
            <span className="text-sm text-readable">{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-purple-100/30 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Icons */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  index <= currentStep 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-100/50 text-purple-400'
                }`}>
                  {getStepIcon(index)}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-purple-600' : 'bg-purple-100/50'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-oracle rounded-3xl p-12 subtle-glow">
          {renderStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 text-readable hover:text-readable-dark transition-colors disabled:opacity-0 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>{currentStep === totalSteps - 1 ? 'Complete Setup' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow; 