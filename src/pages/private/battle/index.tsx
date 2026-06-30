import { Gamepad2, History, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { BattleCard } from '@/components/cards/battle-card'
import { battleFeature } from '@/features/battle'

export default function BattlePage() {
  return (
    <PageShell title="Battle" subtitle="A UI-only competition hub with modes, history, and summary metrics.">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: 'Wins', value: '24' },
            { label: 'Matches', value: '38' },
            { label: 'Streak', value: '7' },
            { label: 'XP', value: '2.4k' },
          ].map((stat) => (
            <Card key={stat.label} className="p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
              <p className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</p>
            </Card>
          ))}
        </div>

        <section>
          <SectionHeading eyebrow="Modes" title="Choose a battle style" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {battleFeature.battleModes.map((mode) => (
              <BattleCard key={mode.title} mode={mode} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card className="p-6">
            <SectionHeading eyebrow="History" title="Recent battles" />
            <div className="space-y-3">
              {battleFeature.battleHistory.map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                  <Badge variant="soft">{item.status}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeading eyebrow="Stats" title="Battle performance" />
            <div className="space-y-4">
              {[
                { icon: Gamepad2, label: 'Fastest win', value: '2m 12s' },
                { icon: Trophy, label: 'Best round', value: '9 / 10' },
                { icon: History, label: 'Queue time', value: '18 sec' },
              ].map((entry) => {
                const Icon = entry.icon
                return (
                  <div key={entry.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-violet-300" />
                      <span className="text-sm text-slate-200">{entry.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{entry.value}</span>
                  </div>
                )
              })}
            </div>
            <Button className="mt-5 w-full">Find opponent</Button>
          </Card>
        </section>
      </div>
    </PageShell>
  )
}
