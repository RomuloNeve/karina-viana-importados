import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          variant === "primary" &&
            "bg-gold-dark hover:bg-gold text-white shadow-md hover:shadow-lg",
          variant === "secondary" &&
            "bg-cream hover:bg-gold-light/30 text-brown-dark border border-gold/30",
          variant === "outline" &&
            "border-2 border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white",
          variant === "ghost" &&
            "text-brown-dark hover:bg-cream hover:text-gold-dark",
          // Sizes
          size === "sm" && "text-sm px-4 py-2 gap-1.5",
          size === "md" && "text-sm px-6 py-3 gap-2",
          size === "lg" && "text-base px-8 py-4 gap-2.5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
