import React from 'react'
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield,
  Sparkles,
  TrendingUp 
} from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'
import { GradientText } from '@/components/ui/gradient-text'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Creation",
    description: "Generate high-converting ads, social media posts, and marketing copy in seconds using advanced AI models.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track campaign performance with comprehensive analytics and get actionable insights to optimize ROI."
  },
  {
    icon: Zap,
    title: "Automated Optimization",
    description: "Let AI automatically optimize your campaigns for better performance, saving time and increasing results."
  },
  {
    icon: Globe,
    title: "Multi-Platform Integration",
    description: "Seamlessly connect with all major advertising platforms and social media channels from one dashboard."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption ensures your data and campaigns are always protected."
  },
  {
    icon: Sparkles,
    title: "Creative Assistant",
    description: "Get unlimited design variations and creative suggestions to keep your campaigns fresh and engaging."
  },
  {
    icon: TrendingUp,
    title: "Performance Prediction",
    description: "Predict campaign outcomes before launch with AI models trained on millions of successful campaigns."
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-section">
            Powerful Features That{' '}
            <GradientText variant="primary">
              Drive Results
            </GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to create, manage, and optimize successful marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-80"  // fixed height for uniform card sizes
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the future of marketing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-button text-primary hover:text-primary-foreground">
              Explore All Features
            </button>
            <button className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
