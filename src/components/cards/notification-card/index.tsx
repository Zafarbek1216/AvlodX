import { Bell } from 'lucide-react'
import type { NotificationItem } from '@/data/mock'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface NotificationCardProps {
  notification: NotificationItem
}

export function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <Card className="flex items-start gap-4 p-5">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${notification.tone}`}>
        <Bell className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">{notification.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">{notification.description}</p>
          </div>
          <Badge variant="outline">{notification.time}</Badge>
        </div>
      </div>
    </Card>
  )
}
