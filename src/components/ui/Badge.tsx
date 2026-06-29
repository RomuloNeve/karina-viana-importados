import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sale" | "new" | "outOfStock";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wide",
        variant === "default" && "bg-gold-light/30 text-gold-dark",
        variant === "sale" && "bg-red-100 text-red-700",
        variant === "new" && "bg-emerald-100 text-emerald-700",
        variant === "outOfStock" && "bg-gray-100 text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
