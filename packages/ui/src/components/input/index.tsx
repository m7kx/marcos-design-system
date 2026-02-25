import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, hint, prefix, suffix, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-[var(--mds-color-text-primary)]">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {prefix && (
            <div className="absolute left-3 text-[var(--mds-color-text-muted)]">{prefix}</div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border bg-[var(--mds-color-bg-secondary)] px-3 py-2 text-sm",
              "text-[var(--mds-color-text-primary)] placeholder:text-[var(--mds-color-text-muted)]",
              "border-[var(--mds-color-border-default)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mds-color-brand-primary)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-shadow",
              error && "border-red-500 focus-visible:ring-red-500",
              prefix && "pl-9",
              suffix && "pr-9",
              className
            )}
            ref={ref}
            {...props}
          />
          {suffix && (
            <div className="absolute right-3 text-[var(--mds-color-text-muted)]">{suffix}</div>
          )}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {hint && !error && <p className="text-xs text-[var(--mds-color-text-muted)]">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
