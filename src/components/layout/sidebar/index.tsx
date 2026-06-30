import { NavLink, Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/cn'
import { sidebarItems } from '@/data/mock'
import { appConfig } from '@/config'

export interface SidebarProps {
  mobile?: boolean
}

export function Sidebar({ mobile = false }: SidebarProps) {
  return (
    <aside className={cn('h-full w-full shrink-0 border-white/10 bg-slate-950/55 px-4 py-5', mobile ? 'flex flex-col' : 'hidden lg:flex lg:w-[290px] lg:flex-col lg:border-r lg:h-screen')}>
      <Link to="/feed" className="mb-6 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold">
          A
        </div>
        <div>
          <p className="font-display text-xl font-bold leading-none">{appConfig.name}</p>
          <p className="text-xs text-slate-400">{appConfig.studioLabel}</p>
        </div>
      </Link>

      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-violet-500/15 text-white ring-1 ring-violet-400/30'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white',
                )
              }
            >
              <Icon className="h-4 w-4 text-slate-400 transition group-hover:text-violet-200" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/7 to-white/3 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-200/80">Create</p>
        <h3 className="mt-2 text-lg font-semibold text-white">Share a new post</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">Compose a post, add media, and publish to your community in one polished flow.</p>
        <Button className="mt-4 w-full">
          <Plus className="h-4 w-4" />
          Create post
        </Button>
      </div>

      <div className="mt-auto flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-3">
        <Avatar name="Abdullah Developer" size="md" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Abdullah Developer</p>
          <p className="truncate text-xs text-slate-400">@abdullah</p>
        </div>
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
      </div>
    </aside>
  )
}
