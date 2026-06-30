import { Save, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'

export default function EditPostPage() {
  return (
    <PageShell title="Edit Post" subtitle="The same post composer, prefilled for editing an existing draft.">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-5 p-6">
          <SectionHeading eyebrow="Editor" title="Update your post" />
          <textarea
            rows={12}
            defaultValue="A new build for the AvlodX launch week. We turned the product ideas into a premium social dashboard with routes, mock data, and motion-first interfaces."
            className="w-full rounded-[28px] border border-white/10 bg-slate-950/55 px-5 py-4 text-base text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400/60"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Visibility</label>
              <Input defaultValue="For everyone" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Topic</label>
              <Input defaultValue="#avlodx" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="secondary">Discard</Button>
            <Button>
              <Save className="h-4 w-4" />
              Save changes
            </Button>
          </div>
        </Card>

        <Card className="space-y-5 p-6">
          <SectionHeading eyebrow="Preview" title="Editor insight" />
          <Badge variant="soft">
            <Sparkles className="h-3.5 w-3.5" />
            Draft synced locally
          </Badge>
          <p className="text-sm leading-7 text-slate-400">
            The visual treatment remains polished even for edit flows, so the product feels consistent across the entire content lifecycle.
          </p>
        </Card>
      </div>
    </PageShell>
  )
}
