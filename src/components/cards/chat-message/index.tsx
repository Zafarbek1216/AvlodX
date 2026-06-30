import type { ChatBubble } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/cn'

interface ChatMessageProps {
  message: ChatBubble
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={cn('flex gap-3', message.mine ? 'justify-end' : 'justify-start')}>
      {!message.mine ? <Avatar name={message.name} tone={message.tone} /> : null}
      <div
        className={cn(
          'max-w-[80%] rounded-[24px] border px-4 py-3 shadow-lg shadow-black/20',
          message.mine
            ? 'border-violet-400/25 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/15 text-white'
            : 'border-white/10 bg-slate-900/75 text-slate-100',
        )}
      >
        <p className="text-sm leading-6">{message.text}</p>
        <p className="mt-2 text-right text-xs text-slate-500">{message.time}</p>
      </div>
    </div>
  )
}
