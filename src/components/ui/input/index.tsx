import { forwardRef, type InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  withSearchIcon?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, withSearchIcon = false, type = 'text', ...props }, ref) => (
    <div className="relative">
      {withSearchIcon ? (
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      ) : null}
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 text-sm text-slate-100 placeholder:text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] outline-none transition-all focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/15',
          withSearchIcon && 'pl-10',
          className,
        )}
        {...props}
      />
    </div>
  ),
)

Input.displayName = 'Input'
