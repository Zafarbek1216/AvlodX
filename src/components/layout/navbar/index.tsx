import { Link, NavLink } from 'react-router-dom'
import {
  Bell,
  Inbox,
  Menu,
  Search,
  Settings2,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { SearchBar } from '@/components/ui/search-bar'
import { cn } from '@/lib/cn'
import { publicLinks } from '@/data/mock'
import { appConfig } from '@/config'

export interface NavbarProps {
  variant: 'public' | 'main' | 'auth'
  onMenuClick?: () => void
}

const actionLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'group inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200',
    isActive
      ? 'border-violet-400/40 bg-violet-500/15 text-violet-100'
      : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white',
  )

export function Navbar({ variant, onMenuClick }: NavbarProps) {
  if (variant === 'auth') {
    return (
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold">
              A
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">{appConfig.name}</p>
              <p className="text-xs text-slate-400">{appConfig.tagline}</p>
            </div>
          </Link>
          <Badge variant="soft" className="hidden sm:inline-flex">
            Frontend only
          </Badge>
        </div>
      </header>
    )
  }

  if (variant === 'public') {
    return (
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold">
              A
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">{appConfig.name}</p>
              <p className="text-xs text-slate-400">{appConfig.shortTagline}</p>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {publicLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Link
            to="/search"
            className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link
            to="/login"
            className="hidden items-center rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/35"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
    )
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/feed" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold">
            A
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg font-bold leading-none">AvlodX</p>
            <p className="text-xs text-slate-400">Creator dashboard</p>
          </div>
        </Link>

        <div className="hidden flex-1 lg:block">
          <SearchBar placeholder="Search people, posts, subjects..." className="mx-auto max-w-2xl" />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <NavLink to="/notifications" className={actionLinkClass} aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </NavLink>
          <NavLink to="/messages" className={actionLinkClass} aria-label="Messages">
            <Inbox className="h-4 w-4" />
          </NavLink>
          <NavLink to="/ai" className={actionLinkClass} aria-label="AI">
            <Sparkles className="h-4 w-4" />
          </NavLink>
          <NavLink to="/settings" className={actionLinkClass} aria-label="Settings">
            <Settings2 className="h-4 w-4" />
          </NavLink>
          <Link to="/profile" className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10 sm:flex">
            <Avatar name="Abdullah Developer" size="sm" />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-white">Abdullah</p>
              <p className="text-xs text-slate-400">@abdullah</p>
            </div>
            <UserRound className="h-4 w-4 text-slate-400" />
          </Link>
        </div>
      </div>
    </header>
  )
}
