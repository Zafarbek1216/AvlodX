import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Input } from '@/components/ui/input'

export interface SearchBarProps {
  placeholder?: string
  className?: string
  suffix?: ReactNode
}

export function SearchBar({ placeholder = 'Search', className, suffix }: SearchBarProps) {
  return (
    <div className={cn('relative flex items-center gap-3', className)}>
      <div className="relative flex-1">
        <Input withSearchIcon placeholder={placeholder} className="pr-4" />
      </div>
      {suffix}
    </div>
  )
}
