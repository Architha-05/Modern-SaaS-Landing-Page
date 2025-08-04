import * as React from "react"
import { Star } from "lucide-react"
import { GlassCard } from "./glass-card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { cn } from "@/lib/utils"

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ 
    className, 
    name, 
    role, 
    company, 
    content, 
    avatar, 
    rating = 5,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="hover"
        className={cn("p-6 h-full", className)}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          
          {/* Content */}
          <blockquote className="flex-1 mb-6">
            <p className="text-foreground leading-relaxed">
              "{content}"
            </p>
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-glass-overlay text-foreground">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="font-semibold text-foreground text-sm">
                {name}
              </div>
              <div className="text-muted-foreground text-xs">
                {role} at {company}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }