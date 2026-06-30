import { CalendarDays, Medal, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { tournaments } from '@/data/mock'

export default function TournamentsPage() {
  return (
    <PageShell title="Tournaments" subtitle="Upcoming competitive events with schedule cards and a simple bracket preview.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow="Upcoming" title="Event schedule" />
          <div className="space-y-4">
            {tournaments.map((tournament, index) => (
              <Card key={tournament.title} className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{tournament.title}</h3>
                      {index === 0 ? <Badge variant="soft">Featured</Badge> : null}
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{tournament.type}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {tournament.date}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5">
                        <Trophy className="h-3.5 w-3.5" />
                        {tournament.prize}
                      </span>
                    </div>
                  </div>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br ${tournament.tone}`}>
                    <Medal className="h-7 w-7 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="space-y-5 p-6">
          <SectionHeading eyebrow="Bracket" title="Preview panel" />
          <div className="space-y-3">
            {['Qualifiers', 'Quarterfinals', 'Semifinals', 'Grand final'].map((stage, index) => (
              <div key={stage} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-200">{stage}</span>
                  <Badge variant={index === 3 ? 'soft' : 'outline'}>{index + 1}</Badge>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full">Join tournament</Button>
        </Card>
      </div>
    </PageShell>
  )
}
