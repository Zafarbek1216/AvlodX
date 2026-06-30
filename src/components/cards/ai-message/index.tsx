import type { ChatBubble } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

interface AIMessageProps {
  message: ChatBubble
}

export function AIMessage({ message }: AIMessageProps) {
  return (
    <div className={cn('flex gap-3', message.mine ? 'justify-end' : 'justify-start')}>
      {!message.mine ? <Avatar name={message.name} tone={message.tone} /> : null}
      <Card
        className={cn(
          'max-w-[85%] rounded-[24px] px-4 py-3',
          message.mine
            ? 'border-violet-400/20 bg-violet-500/15 text-white'
            : 'bg-slate-900/70 text-slate-100',
        )}
      >
        <p className="text-sm leading-6">{message.text}</p>
        <p className="mt-2 text-right text-xs text-slate-500">{message.time}</p>
      </Card>
    </div>
  )
}
