import { Search } from 'lucide-react'
import type { MessageThread } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/cn'

interface MessageListProps {
  threads: MessageThread[]
  active?: string
}

export function MessageList({ threads, active }: MessageListProps) {
  return (
    <Card className="space-y-4 p-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          placeholder="Search chats"
          className="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/55 pl-10 pr-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400/60"
        />
      </div>
      <div className="space-y-2">
        {threads.map((thread) => (
          <div
            key={thread.handle}
            className={cn(
              'flex items-center gap-3 rounded-2xl border px-3 py-3 transition',
              active === thread.handle
                ? 'border-violet-400/30 bg-violet-500/12'
                : 'border-white/10 bg-white/5 hover:bg-white/10',
            )}
          >
            <Avatar name={thread.name} tone={thread.tone} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-white">{thread.name}</p>
                <span className="text-xs text-slate-500">{thread.time}</span>
              </div>
              <p className="truncate text-xs text-slate-400">{thread.lastMessage}</p>
            </div>
            {thread.unread ? <Badge variant="soft" className="px-2 py-0.5">New</Badge> : null}
          </div>
        ))}
      </div>
    </Card>
  )
}
