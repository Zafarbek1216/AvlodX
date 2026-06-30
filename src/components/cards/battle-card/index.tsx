import { ArrowRight } from 'lucide-react'
import type { BattleMode } from '@/data/mock'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface BattleCardProps {
  mode: BattleMode
}

export function BattleCard({ mode }: BattleCardProps) {
  return (
    <Card className="relative overflow-hidden p-5">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${mode.tone}`} />
      <Badge variant="soft" className="mb-4">
        {mode.label}
      </Badge>
      <h3 className="text-lg font-semibold text-white">{mode.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{mode.description}</p>
      <Button variant="secondary" size="sm" className="mt-5 w-full">
        Explore
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  )
}
