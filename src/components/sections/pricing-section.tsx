import React from 'react'
import { PricingCard } from '@/components/ui/pricing-card'
import { GradientText } from '@/components/ui/gradient-text'

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and solopreneurs starting their AI marketing journey.",
    features: [
      "Up to 5 campaigns",
      "AI content generation",
      "Basic analytics",
      "Email support",
      "Template library",
      "Social media integration"
    ],
    buttonText: "Start Free Trial",
    popular: false,
    highlighted: false
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses that need advanced features and better performance.",
    features: [
      "Unlimited campaigns",
      "Advanced AI features",
      "Real-time analytics",
      "Priority support",
      "Custom templates",
      "Multi-platform management",
      "A/B testing",
      "Team collaboration"
    ],
    buttonText: "Get Started",
    popular: true,
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with custom requirements and dedicated support.",
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Advanced security",
      "Training & onboarding",
      "SLA guarantee"
    ],
    buttonText: "Contact Sales",
    popular: false,
    highlighted: false
  }
]

export const PricingSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-section">
            Simple, Transparent{' '}
            <GradientText variant="primary">
              Pricing
            </GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the perfect plan for your business. Start with our free trial 
            and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                highlighted={plan.highlighted}
              />
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 space-y-6">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-xl font-semibold mb-4">
              All plans include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>✓ 14-day free trial</div>
              <div>✓ No setup fees</div>
              <div>✓ Cancel anytime</div>
              <div>✓ 99.9% uptime SLA</div>
              <div>✓ GDPR compliant</div>
              <div>✓ Regular updates</div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Need a custom solution? <span className="text-primary hover:underline cursor-pointer">Contact our sales team</span> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}