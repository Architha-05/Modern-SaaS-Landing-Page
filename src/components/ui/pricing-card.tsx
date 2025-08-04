import * as React from "react"
import { Check } from "lucide-react"
import { GlassCard } from "./glass-card"
import { AnimatedButton } from "./animated-button"
import { Badge } from "./badge"
import { GradientText } from "./gradient-text"
import { cn } from "@/lib/utils"

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
  highlighted?: boolean
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    className, 
    name, 
    price, 
    description, 
    features, 
    buttonText, 
    popular = false,
    highlighted = false,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="hover"
        className={cn(
          "relative p-8 h-full",
          highlighted && "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5 scale-105",
          className
        )}
        {...props}
      >
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
              Most Popular
            </Badge>
          </div>
        )}
        
        <div className="flex flex-col h-full">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {name}
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">
                {highlighted ? (
                  <GradientText variant="primary">{price}</GradientText>
                ) : (
                  <span className="text-foreground">{price}</span>
                )}
              </span>
              {price !== "Custom" && (
                <span className="text-muted-foreground ml-1">/month</span>
              )}
            </div>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>
          
          <div className="flex-1 mb-8">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <AnimatedButton
            variant={highlighted ? "primary" : "outline"}
            size="lg"
            className="w-full"
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </GlassCard>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard }