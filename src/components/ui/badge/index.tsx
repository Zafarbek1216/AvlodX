import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'soft' | 'outline' | 'success' | 'warning'

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-white border-white/10',
  soft: 'bg-violet-500/12 text-violet-200 border-violet-400/20',
  outline: 'bg-transparent text-slate-200 border-white/15',
  success: 'bg-emerald-500/12 text-emerald-200 border-emerald-400/20',
  warning: 'bg-amber-500/12 text-amber-200 border-amber-400/20',
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
