import { Mail, MapPin, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="A clean contact experience with direct channels and a polished form, ready for future backend integration."
    >
      <div className="space-y-8">
        <section className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Mail, label: 'Email', value: 'hello@avlodx.dev' },
            { icon: Phone, label: 'Phone', value: '+998 90 123 45 67' },
            { icon: MapPin, label: 'Location', value: 'Tashkent, Uzbekistan' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.label} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  <Icon className="h-5 w-5 text-violet-300" />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </Card>
            )
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6">
            <SectionHeading title="Talk to us" description="We’re happy to turn this shell into your real product later." />
            <div className="space-y-3">
              <Badge variant="soft">Partnerships</Badge>
              <Badge variant="soft">Product feedback</Badge>
              <Badge variant="soft">Design systems</Badge>
              <Badge variant="soft">Frontend work</Badge>
            </div>
          </Card>

          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <Input placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400/60"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end">
              <Button>Send message</Button>
            </div>
          </Card>
        </section>
      </div>
    </PageShell>
  )
}
