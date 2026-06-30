import { Check, X } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface FriendCardProps {
  name: string
  handle: string
  note?: string
  status?: string
  tone: string
  compact?: boolean
}

export function FriendCard({ name, handle, note, status, tone, compact = false }: FriendCardProps) {
  return (
    <Card className={compact ? 'p-4' : 'p-5'}>
      <div className="flex items-center gap-4">
        <Avatar name={name} tone={tone} size={compact ? 'md' : 'lg'} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-semibold text-white">{name}</h3>
            {status ? <Badge variant="success">{status}</Badge> : null}
          </div>
          <p className="truncate text-sm text-slate-400">{handle}</p>
          {note ? <p className="mt-1 text-sm text-slate-500">{note}</p> : null}
        </div>
      </div>
      {!compact ? (
        <div className="mt-5 flex gap-2">
          <Button variant="secondary" size="sm" className="flex-1">
            <Check className="h-4 w-4" />
            Accept
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <X className="h-4 w-4" />
            Decline
          </Button>
        </div>
      ) : null}
    </Card>
  )
}
