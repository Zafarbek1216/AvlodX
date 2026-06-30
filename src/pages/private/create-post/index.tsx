import { ImagePlus, Link2, ListChecks, Send, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { createPostTools } from '@/data/mock'

export default function CreatePostPage() {
  return (
    <PageShell title="Create Post" subtitle="A clean composer with a big writing area and publishing controls.">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-5 p-6">
          <SectionHeading eyebrow="Composer" title="Share something new" />
          <textarea
            rows={12}
            placeholder="What’s new?"
            className="w-full rounded-[28px] border border-white/10 bg-slate-950/55 px-5 py-4 text-base text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400/60"
          />
          <div className="flex flex-wrap gap-2">
            {createPostTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Badge key={tool.label} variant="outline" className="px-4 py-2 text-sm">
                  <Icon className="h-3.5 w-3.5" />
                  {tool.label}
                </Badge>
              )
            })}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Visibility</label>
              <Input placeholder="For everyone" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Topic</label>
              <Input placeholder="#frontend" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="secondary">Save draft</Button>
            <Button>
              <Send className="h-4 w-4" />
              Publish
            </Button>
          </div>
        </Card>

        <Card className="space-y-5 p-6">
          <SectionHeading eyebrow="Preview" title="Publish controls" />
          <div className="space-y-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Ready to publish</p>
            <p className="text-sm leading-6 text-slate-400">
              This page is intentionally UI-only. The real publish action can be wired later.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { icon: ImagePlus, title: 'Add image' },
              { icon: Link2, title: 'Attach link' },
              { icon: ListChecks, title: 'Add checklist' },
              { icon: Tag, title: 'Tag subjects' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Icon className="h-4 w-4 text-violet-300" />
                  <span className="text-sm text-slate-200">{item.title}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}
