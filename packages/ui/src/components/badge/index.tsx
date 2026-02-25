import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:     "border-transparent bg-[var(--mds-color-brand-primary)] text-[var(--mds-color-neutral-0)]",
        secondary:   "border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-[var(--mds-color-text-secondary)]",
        outline:     "border-[var(--mds-color-border-default)] text-[var(--mds-color-text-primary)]",
        success:     "border-transparent bg-green-500/20 text-green-400 border-green-500/30",
        warning:     "border-transparent bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        error:       "border-transparent bg-red-500/20 text-red-400 border-red-500/30",
        info:        "border-transparent bg-blue-500/20 text-blue-400 border-blue-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
