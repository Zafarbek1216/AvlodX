import { Send, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { AIMessage } from '@/components/cards/ai-message'
import { aiFeature } from '@/features/ai'

export default function AiPage() {
  return (
    <PageShell title="AI" subtitle="A polished assistant interface with history, suggestions, and a chat canvas.">
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr_0.85fr]">
        <Card className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">History</h3>
            <Badge variant="soft">Recent</Badge>
          </div>
          <div className="space-y-2">
            {['Launch plan', 'Post draft', 'Profile review', 'Battle strategy'].map((item, index) => (
              <div key={item} className={`rounded-2xl border px-4 py-3 text-sm ${index === 0 ? 'border-violet-400/30 bg-violet-500/12 text-white' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex min-h-[760px] flex-col p-0">
          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">AvlodX AI</h3>
                <p className="text-sm text-slate-400">UI mock only, no model behind it.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-5">
            {aiFeature.chatMessages.map((message) => (
              <AIMessage key={message.id} message={message} />
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Input placeholder="Ask anything..." className="flex-1" />
              <Button className="h-11 w-11 rounded-2xl p-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <h3 className="font-semibold text-white">Suggested prompts</h3>
          <div className="space-y-3">
            {aiFeature.aiPrompts.map((prompt) => (
              <div key={prompt.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className={`mb-3 h-1 w-20 rounded-full bg-gradient-to-r ${prompt.tone}`} />
                <p className="text-sm leading-6 text-slate-200">{prompt.title}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}
