import * as React from "react"
import { LucideIcon } from "lucide-react"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  highlight?: boolean
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon: Icon, title, description, highlight = false, ...props }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="hover"
        className={cn(
          "group text-center",
          highlight && "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5",
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300 group-hover:scale-110",
            highlight 
              ? "bg-gradient-primary text-primary-foreground animate-glow" 
              : "bg-glass-overlay text-primary"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </GlassCard>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }