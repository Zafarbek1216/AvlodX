import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export interface PageShellProps {
  title: string
  subtitle?: string
  children: ReactNode
  action?: ReactNode
  className?: string
}

export function PageShell({ title, subtitle, children, action, className }: PageShellProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn('space-y-6', className)}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/75">AvlodX</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
          {subtitle ? <p className="max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">{subtitle}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </motion.section>
  )
}
