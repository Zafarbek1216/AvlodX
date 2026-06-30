import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { LeaderboardCard } from '@/components/cards/leaderboard-card'
import { leaderboardFeature } from '@/features/leaderboard'

export default function LeaderboardPage() {
  return (
    <PageShell title="Leaderboard" subtitle="Top students ranked by points, wins, and community activity.">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
            <Button variant="secondary">Filter</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {leaderboardFeature.leaderboardFilters.map((filter, index) => (
              <Badge key={filter} variant={index === 0 ? 'soft' : 'outline'}>
                {filter}
              </Badge>
            ))}
          </div>
        </Card>

        <section>
          <SectionHeading eyebrow="Top students" title="Ranked by points" />
          <div className="space-y-3">
            {leaderboardFeature.leaderboard.map((entry) => (
              <LeaderboardCard key={entry.handle} entry={entry} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
