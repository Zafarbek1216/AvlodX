import { cn } from '@/lib/cn'

export interface AvatarProps {
  name: string
  tone?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8 text-[11px]',
  md: 'h-10 w-10 text-xs',
  lg: 'h-14 w-14 text-sm',
  xl: 'h-20 w-20 text-lg',
}

export function Avatar({ name, tone = 'from-violet-500 to-fuchsia-500', src, size = 'md', className }: AvatarProps) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div
      className={cn(
        'relative shrink-0 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br text-white shadow-lg shadow-black/30',
        tone,
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-semibold">{initials}</div>
      )}
    </div>
  )
}
