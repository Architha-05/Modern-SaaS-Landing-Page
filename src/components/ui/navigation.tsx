import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { AnimatedButton } from './animated-button'
import { GradientText } from './gradient-text'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              <GradientText variant="primary">
                ADmyBRAND
              </GradientText>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              Sign In
            </button>
            <AnimatedButton size="sm">
              Start Free Trial
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-glass-border/30">
            <div className="p-6 space-y-4">
              <a href="#features" className="block text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="block text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#faq" className="block text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <hr className="border-glass-border/30" />
              <button className="block w-full text-left text-foreground hover:text-primary transition-colors">
                Sign In
              </button>
              <AnimatedButton className="w-full">
                Start Free Trial
              </AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}