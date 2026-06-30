import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function SectionHeading({ eyebrow, title, description, action, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className="space-y-2">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/80">{eyebrow}</p> : null}
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
          {description ? <p className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">{description}</p> : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
