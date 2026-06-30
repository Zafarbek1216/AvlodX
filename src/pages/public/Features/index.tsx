import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { featureCards } from '@/data/mock'

export default function FeaturesPage() {
  return (
    <PageShell
      title="Features"
      subtitle="A route-rich product shell with reusable pieces for feed, chat, profile, AI, battles, and settings."
    >
      <div className="space-y-8">
        <section>
          <SectionHeading eyebrow="Feature set" title="Built to cover the entire product surface" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="p-6">
            <Badge variant="soft">Core routes</Badge>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                'Feed and discovery panels',
                'Profile and user profile layouts',
                'Discord-like messaging shells',
                'AI assistant interface',
                'Battles and leaderboards',
                'Settings and legal pages',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.2),transparent_33%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.14),transparent_33%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-200/80">System</p>
              <h3 className="mt-4 font-display text-3xl font-bold text-white">Everything is reusable, but nothing feels generic.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Button, card, avatar, badge, navbar, sidebar, and content patterns are designed to scale with the app.
              </p>
              <Link
                to="/feed"
                className="mt-6 inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/35"
              >
                View feed
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </PageShell>
  )
}
