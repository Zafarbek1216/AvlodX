import { Circle, Send } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { MessageList } from '@/components/cards/message-list'
import { ChatMessage } from '@/components/cards/chat-message'
import { chatFeature } from '@/features/chat'

export default function MessagesPage() {
  return (
    <PageShell title="Messages" subtitle="A Discord-like direct messaging layout with three-column structure.">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr_0.8fr]">
        <MessageList threads={chatFeature.messages} active={chatFeature.messages[0]?.handle} />

        <Card className="flex min-h-[760px] flex-col p-0">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <Avatar name="Dev Team" tone="from-violet-500 to-fuchsia-500" />
              <div>
                <h3 className="font-semibold text-white">Dev Team</h3>
                <p className="text-xs text-slate-500">5 members online</p>
              </div>
            </div>
            <Badge variant="soft">Room active</Badge>
          </div>

          <div className="flex-1 space-y-4 p-5">
            {chatFeature.chatMessages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button className="h-11 w-11 rounded-2xl p-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Online</h3>
            <Circle className="h-3 w-3 fill-emerald-400 text-emerald-400" />
          </div>
          <div className="space-y-3">
            {chatFeature.friends.map((friend) => (
              <div key={friend.handle} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Avatar name={friend.name} tone={friend.tone} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{friend.name}</p>
                  <p className="truncate text-xs text-slate-400">{friend.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}
