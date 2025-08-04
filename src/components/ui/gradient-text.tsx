import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary'
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "text-gradient font-semibold",
          {
            'bg-gradient-primary': variant === 'primary',
            'bg-gradient-secondary': variant === 'secondary',
          },
          className
        )}
        style={{
          backgroundImage: variant === 'primary' 
            ? 'var(--gradient-primary)' 
            : 'var(--gradient-secondary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        {...props}
      >
        {children}
      </span>
    )
  }
)
GradientText.displayName = "GradientText"

export { GradientText }