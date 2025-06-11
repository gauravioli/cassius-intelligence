import React, { useState } from 'react';
import { Crown, ArrowRight, Building, Users, Target } from 'lucide-react';

interface OnboardingData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  goals: string[];
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingData>({
    businessName: '',
    businessType: '',
    targetAudience: '',
    goals: []
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const updateFormData = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const businessTypes = [
    { id: 'saas', label: 'SaaS/Software' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'service', label: 'Service Business' },
    { id: 'startup', label: 'Early Startup' },
    { id: 'agency', label: 'Agency/Consulting' },
    { id: 'creator', label: 'Creator/Influencer' }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
              <Crown className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-readable-dark">Welcome to Cassius Intelligence</h2>
              <p className="text-lg text-readable max-w-2xl mx-auto leading-relaxed">
                Let's personalize your AI marketing experience in just a few steps.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="Enter your business name"
                className="w-full glass-oracle rounded-xl px-6 py-4 text-readable-dark focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-transparent border border-purple-200/20"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-readable-dark">What type of business are you?</h3>
            <div className="grid grid-cols-2 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => updateFormData('businessType', type.id)}
                  className={`glass-item rounded-xl p-4 text-left transition-all ${
                    formData.businessType === type.id ? 'purple-glow border-purple-300/40' : ''
                  }`}
                >
                  <span className="font-medium text-readable-dark">{type.label}</span>
                </button>
              ))}
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
        <div className="glass-oracle rounded-3xl p-12 subtle-glow">
          {renderStep()}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleNext}
              disabled={currentStep === 0 && !formData.businessName}
              className="glass-panel rounded-xl px-8 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold flex items-center space-x-2 disabled:opacity-50"
            >
              <span>{currentStep === 3 ? 'Complete Setup' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow; 