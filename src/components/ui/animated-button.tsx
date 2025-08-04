import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "gradient-primary text-primary-foreground hover:scale-105 hover:shadow-glow",
        secondary: "gradient-secondary text-secondary-foreground hover:scale-105 hover:shadow-glow",
        glass: "glass-button text-foreground hover:text-primary",
        outline: "border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, animatedButtonVariants }