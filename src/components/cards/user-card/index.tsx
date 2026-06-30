import { MessageCircle, UserPlus } from 'lucide-react'
import type { UserCardData } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface UserCardProps {
  user: UserCardData
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-4">
        <Avatar name={user.name} tone={user.tone} size="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold text-white">{user.name}</h3>
            {user.status ? <Badge variant="success">{user.status}</Badge> : null}
          </div>
          <p className="truncate text-sm text-slate-400">{user.handle}</p>
          <p className="mt-1 text-sm text-slate-500">{user.title}</p>
          {user.followers ? <p className="mt-2 text-xs text-slate-500">{user.followers} followers</p> : null}
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Button variant="secondary" size="sm" className="flex-1">
          <UserPlus className="h-4 w-4" />
          Follow
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <MessageCircle className="h-4 w-4" />
          Chat
        </Button>
      </div>
    </Card>
  )
}
