import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Fire & Ice Premium Variants
        fire: "bg-fire text-white shadow-fire hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-fire/20 font-semibold",
        ice: "bg-ice text-white shadow-ice hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-ice/20 font-semibold", 
        "fire-outline": "border-2 border-fire bg-fire/5 text-fire hover:bg-fire hover:text-white transition-all duration-300 font-semibold",
        "ice-outline": "border-2 border-ice bg-ice/5 text-ice hover:bg-ice hover:text-white transition-all duration-300 font-semibold",
        "fire-ghost": "text-fire hover:bg-fire/10 hover:text-fire font-medium",
        "ice-ghost": "text-ice hover:bg-ice/10 hover:text-ice font-medium",
        duality: "bg-gradient-to-r from-fire to-ice text-white shadow-premium hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-bold",
        premium: "bg-gradient-to-r from-fire/20 to-ice/20 border border-primary/20 text-foreground hover:from-fire/30 hover:to-ice/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-12 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
