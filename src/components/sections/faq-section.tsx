import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GradientText } from '@/components/ui/gradient-text'

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer: "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your business data, target audience, and campaign objectives. It then generates optimized content, suggests targeting parameters, and automatically adjusts campaigns for maximum performance. The AI learns from millions of successful campaigns to provide data-driven recommendations."
  },
  {
    question: "Can I integrate it with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND integrates seamlessly with over 100+ popular marketing platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Shopify, HubSpot, Salesforce, and many more. Our API also allows for custom integrations with your existing tech stack."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start. You can create unlimited campaigns, test all AI features, and experience the full power of our platform risk-free."
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models achieve 90%+ accuracy in performance predictions based on historical data from over 1 million campaigns. The system continuously learns and improves its predictions as it processes more data, making it increasingly accurate over time."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including 24/7 chat support, detailed documentation, video tutorials, and webinar training sessions. Professional and Enterprise plans include priority support with faster response times and dedicated account managers."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Security is our top priority. We use bank-level encryption (AES-256), comply with GDPR and SOC 2 standards, and undergo regular security audits. Your data is stored in secure, geographically distributed data centers with multiple backup systems."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your current billing period, and you can export all your data before cancellation."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most customers see improvements within the first week of using ADmyBRAND. Typical results include 30-50% better click-through rates, 25-40% lower cost per acquisition, and 200-300% improvement in overall ROI within the first month."
  }
]

export const FAQSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-section">
            Frequently Asked{' '}
            <GradientText variant="primary">
              Questions
            </GradientText>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-glass-border/30"
                >
                  <AccordionTrigger className="text-left hover:text-primary text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button text-primary hover:text-primary-foreground">
                Contact Support
              </button>
              <button className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}