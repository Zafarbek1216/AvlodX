import { Link } from 'react-router-dom'
import { Globe2, Mail, MessageCircle, Share2, Rss } from 'lucide-react'
import { publicLinks } from '@/data/mock'
import { appConfig } from '@/config'

const socials = [
  { label: 'Website', href: 'https://example.com', icon: Globe2 },
  { label: 'Email', href: 'mailto:hello@avlodx.dev', icon: Mail },
  { label: 'Community', href: 'https://example.com', icon: MessageCircle },
  { label: 'Share', href: 'https://example.com', icon: Share2 },
  { label: 'Updates', href: 'https://example.com', icon: Rss },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold">
              A
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">{appConfig.name}</p>
              <p className="text-xs text-slate-400">{appConfig.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            A polished social product shell built with React, Vite, Tailwind, and motion-first interactions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200">Company</h4>
          <div className="mt-4 space-y-3">
            {publicLinks.slice(0, 2).map((link) => (
              <Link key={link.href} to={link.href} className="block text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200">Legal</h4>
          <div className="mt-4 space-y-3">
            <Link to="/privacy" className="block text-sm text-slate-400 transition hover:text-white">Privacy</Link>
            <Link to="/terms" className="block text-sm text-slate-400 transition hover:text-white">Terms</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200">Social</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {appConfig.copyrightYear} {appConfig.name}. All rights reserved.</p>
        <p>Designed as a frontend-only premium startup interface.</p>
      </div>
    </footer>
  )
}
