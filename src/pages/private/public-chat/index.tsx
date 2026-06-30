import { Globe2, Send } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { MessageList } from '@/components/cards/message-list'
import { ChatMessage } from '@/components/cards/chat-message'
import { chatFeature } from '@/features/chat'

export default function PublicChatPage() {
  return (
    <PageShell title="Public Chat" subtitle="A community chat room with the same premium messaging language.">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr_0.7fr]">
        <MessageList threads={chatFeature.messages} active={chatFeature.messages[1]?.handle} />

        <Card className="flex min-h-[760px] flex-col p-0">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500">
                <Globe2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Community Lounge</h3>
                <p className="text-xs text-slate-500">Public room for product discussions</p>
              </div>
            </div>
            <Badge variant="soft">Live chat</Badge>
          </div>
          <div className="flex-1 space-y-4 p-5">
            {chatFeature.chatMessages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Input placeholder="Message the room..." className="flex-1" />
              <Button className="h-11 w-11 rounded-2xl p-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <h3 className="font-semibold text-white">Online now</h3>
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
