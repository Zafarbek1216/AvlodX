import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, Sparkles, Shield, Users } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Card } from '@/components/ui/card'
import { RouteTransition } from '@/components/content/route-transition'
import { appConfig } from '@/config'

const highlights = [
  { icon: Sparkles, title: 'Premium motion', text: 'Smooth transitions and glossy surfaces throughout the experience.' },
  { icon: Users, title: 'Community-first', text: 'Social cards, leaderboards, and discovery are always one click away.' },
  { icon: Shield, title: 'Frontend only', text: 'A clean foundation without backend logic, auth flows, or API dependencies.' },
  { icon: Bot, title: 'Future-ready', text: 'Easy to extend with new routes, sections, and product ideas later.' },
]

export function AuthLayout() {
  return (
    <div className="min-h-screen">
      <Navbar variant="auth" />
      <main className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <section className="flex flex-col justify-between rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-950/40 to-cyan-500/10 p-8">
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/80">{appConfig.name}</p>
              <h1 className="max-w-xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A premium social workspace for builders, creators, and communities.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Start with a polished frontend foundation. The routing, layouts, and reusable UI are already ready for your product vision.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="p-5">
                  <Icon className="h-5 w-5 text-violet-300" />
                  <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="flex items-center justify-center">
          <Card className="w-full max-w-xl p-0">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm font-medium text-slate-300">Welcome to {appConfig.name}</p>
              <p className="text-xs text-slate-500">Enter the UI-only experience</p>
            </div>
            <div className="p-6">
              <RouteTransition />
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
