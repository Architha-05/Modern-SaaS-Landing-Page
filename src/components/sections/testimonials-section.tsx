import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { GradientText } from '@/components/ui/gradient-text'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We've seen a 300% increase in lead generation and our campaign creation time has dropped by 80%. The AI suggestions are incredibly accurate.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content: "The automated optimization feature alone pays for the entire subscription. Our ROI improved by 250% within the first month. This platform is a game-changer for any serious marketing team.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Digital Marketing Manager",
    company: "BrandBoost",
    content: "I was skeptical about AI marketing tools, but ADmyBRAND proved me wrong. The content quality is outstanding, and the multi-platform management saves us hours every day. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    company: "ScaleUp Solutions",
    content: "The analytics and insights are phenomenal. We can now predict campaign performance with incredible accuracy. The platform has become an essential part of our marketing stack.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Specialist",
    company: "InnovateCorp",
    content: "The creative assistant feature is brilliant. It generates so many unique ideas that we never would have thought of. Our engagement rates have doubled since we started using it.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Alex Johnson",
    role: "Founder",
    company: "StartupLaunch",
    content: "As a startup, we needed powerful marketing tools without the enterprise price tag. ADmyBRAND gives us enterprise-level capabilities at a fraction of the cost. Absolutely love it!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
]

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Helper to get 3 testimonials starting from currentIndex, wrapping around
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return result
  }
  const visibleTestimonials = getVisibleTestimonials()

  // Auto-play advancing by 1 every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-section">
            What Our{' '}
            <GradientText variant="primary">
              Customers Say
            </GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of marketing professionals who have transformed their
            campaigns with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 glass-button p-3 rounded-full hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 glass-button p-3 rounded-full hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                // Remove animation class for now
                // className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold">
              <GradientText variant="primary">4.9/5</GradientText>
            </div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              <GradientText variant="primary">10,000+</GradientText>
            </div>
            <div className="text-muted-foreground text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              <GradientText variant="primary">98%</GradientText>
            </div>
            <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              <GradientText variant="primary">24/7</GradientText>
            </div>
            <div className="text-muted-foreground text-sm">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
