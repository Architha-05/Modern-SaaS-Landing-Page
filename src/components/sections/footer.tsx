import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  Sparkles 
} from 'lucide-react'
import { GradientText } from '@/components/ui/gradient-text'
import { AnimatedButton } from '@/components/ui/animated-button'

export const Footer = () => {
  return (
    <footer className="relative py-16 px-6 mt-24">
      <div className="absolute inset-0 gradient-hero opacity-50"></div>
      
      <div className="relative z-10 container mx-auto">
        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold">
              Stay Updated with{' '}
              <GradientText variant="primary">
                AI Marketing Insights
              </GradientText>
            </h3>
            <p className="text-muted-foreground">
              Get the latest tips, strategies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-glass-background border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <AnimatedButton size="default">
                Subscribe
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                <GradientText variant="primary">
                  ADmyBRAND
                </GradientText>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionizing marketing with AI-powered tools that create, optimize, 
              and scale campaigns automatically for better results.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="p-2 rounded-lg bg-glass-overlay hover:bg-primary transition-all duration-300 text-muted-foreground hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Features',
                'Pricing',
                'Case Studies',
                'Reviews',
                'API Documentation',
                'Integrations'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                'About Us',
                'Careers',
                'Blog',
                'Press Kit',
                'Partners',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@admybrand.ai</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 AI Street<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}