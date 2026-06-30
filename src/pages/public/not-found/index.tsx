import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[70vh] place-items-center p-8 text-center">
      <Card className="relative max-w-2xl overflow-hidden p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_30%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_32%)]" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Sparkles className="h-10 w-10 text-violet-300" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/80">Lost in orbit</p>
          <h1 className="mt-4 font-display text-5xl font-bold text-white">404</h1>
          <h2 className="mt-2 text-2xl font-semibold text-white">Page not found</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            The route you tried to open does not exist. The shell is still intact, so you can head back to the main experience anytime.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/feed"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/35"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to feed
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
