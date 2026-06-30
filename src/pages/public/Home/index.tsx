import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { Avatar } from '@/components/ui/avatar'
import { featureCards, productStats, suggestedUsers } from '@/data/mock'

export default function HomePage() {
  return (
    <PageShell
      title="Home"
      subtitle="AvlodX is a premium social product shell for creators, builders, and communities. The entire experience here is frontend-only and fully routed."
    >
      <div className="space-y-8">
        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <Card className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_35%)]" />
            <div className="relative">
              <Badge variant="soft">Launch-ready interface</Badge>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A social workspace with the polish of Linear and the warmth of a creator community.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Feeds, profiles, battles, leaderboards, AI chat, and settings are already laid out with reusable components and mock data.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/feed"
                  className="inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/35"
                >
                  Open app
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  Explore features
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {productStats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                    <p className="mt-3 font-display text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader>
                <div>
                  <CardTitle>Product signal</CardTitle>
                  <CardDescription>Designed to feel premium on desktop and mobile.</CardDescription>
                </div>
                <Badge variant="warning">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Growing
                </Badge>
              </CardHeader>
              <div className="space-y-3">
                {['Fast routing', 'Reusable cards', 'Responsive shell', 'Dark theme'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <Sparkles className="h-4 w-4 text-violet-300" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div>
                  <CardTitle>Suggested people</CardTitle>
                  <CardDescription>Mock discovery panel with social proof.</CardDescription>
                </div>
              </CardHeader>
              <div className="space-y-3">
                {suggestedUsers.slice(0, 3).map((user) => (
                  <div key={user.handle} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <Avatar name={user.name} tone={user.tone} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">{user.name}</p>
                      <p className="truncate text-xs text-slate-400">{user.title}</p>
                    </div>
                    <Badge variant="soft">{user.followers}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="What you get"
            title="A cohesive product language"
            description="Every page shares the same visual system while still feeling tailored to the route and task."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6">
            <CardHeader>
              <div>
                <CardTitle>Community rhythm</CardTitle>
                <CardDescription>Popular subjects drive the discovery loop.</CardDescription>
              </div>
            </CardHeader>
            <div className="space-y-3">
              {['React', 'TypeScript', 'Motion design', 'Product thinking', 'Growth', 'Community'].map((topic, index) => (
                <div key={topic} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-200">{topic}</span>
                  <Badge variant={index < 2 ? 'soft' : 'outline'}>Trending</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200/80">Get started</p>
              <h3 className="mt-4 max-w-xl font-display text-3xl font-bold text-white">Ship a premium UI without backend complexity.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                This foundation already covers your routing, reusable components, and the visual tone from the reference image.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Create account
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </PageShell>
  )
}
