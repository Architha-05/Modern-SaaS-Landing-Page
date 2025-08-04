import React from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/animated-button'
import { GradientText } from '@/components/ui/gradient-text'
import { Badge } from '@/components/ui/badge'
import heroDashboard from '@/assets/hero-dashboard.jpg'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float" >
        <div className="w-24 h-24 rounded-full bg-gradient-secondary opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-40 right-40 animate-float" >
        <div className="w-12 h-12 rounded-full bg-accent opacity-30 blur-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Headline */}
          <div className=" space-y-6 mt-20" >
            <h1 className="text-hero">
              Transform Your Marketing with{' '}
              <GradientText variant="primary">
                ADmyBRAND AI Suite
              </GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionize your marketing strategy with AI-powered tools that create, optimize, 
              and scale your campaigns automatically. Get better results in less time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center" >
            <AnimatedButton size="xl" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            
            <AnimatedButton variant="glass" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </AnimatedButton>
          </div>

          {/* Hero Image */}
          <div className="pt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 hover-lift">
                <img
                  src="/src/assets/hero-dashboard.jpg"
                  alt="ADmyBRAND AI Suite Dashboard"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              {/* Floating stats badges */}
              <div className="absolute -top-4 -left-4 glass rounded-lg p-3 animate-float">
                <div className="text-sm font-semibold text-primary">↗ 87% CTR</div>
              </div>
              <div className="absolute top-1/2 -right-8 glass rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-semibold text-secondary">⚡ Auto-Optimized</div>
              </div>
              <div className="absolute -bottom-6 left-1/4 glass rounded-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-sm font-semibold text-accent">🎯 95% Accuracy</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up pt-24" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  <GradientText variant="primary">10,000+</GradientText>
                </div>
                <div className="text-muted-foreground text-sm mt-2">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  <GradientText variant="primary">300%</GradientText>
                </div>
                <div className="text-muted-foreground text-sm mt-2">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  <GradientText variant="primary">24/7</GradientText>
                </div>
                <div className="text-muted-foreground text-sm mt-2">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}