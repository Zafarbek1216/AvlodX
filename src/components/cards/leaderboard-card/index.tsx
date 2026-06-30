import type { LeaderboardEntry } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { formatNumber } from '@/utils'

interface LeaderboardCardProps {
  entry: LeaderboardEntry
}

export function LeaderboardCard({ entry }: LeaderboardCardProps) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-lg font-bold text-white">
        #{entry.rank}
      </div>
      <Avatar name={entry.name} tone={entry.tone} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold text-white">{entry.name}</h3>
          {entry.rank <= 3 ? <Badge variant="warning">Top</Badge> : null}
        </div>
        <p className="truncate text-sm text-slate-400">{entry.handle}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-white">{formatNumber(entry.points)}</p>
        <p className="text-xs text-slate-500">{entry.wins} wins</p>
      </div>
    </Card>
  )
}
