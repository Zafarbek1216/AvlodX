import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { valueProps } from '@/data/mock'

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      subtitle="AvlodX is a concept for a premium social platform shell, built to feel thoughtful, modern, and scalable."
    >
      <div className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="p-8">
            <Badge variant="soft">Our mission</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">We turn community software into a premium product experience.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The visual system was inspired by the reference image and the best parts of Discord, GitHub, Reddit, Linear, and Notion.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Consistent motion and depth',
                'Clear route-based organization',
                'Reusable component architecture',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            {valueProps.map((value, index) => (
              <Card key={value.title} className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300/80">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{value.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Principles" title="Why the UI feels premium" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Clarity', text: 'Information is grouped into cards, sections, and routes that make scanning effortless.' },
              { title: 'Hierarchy', text: 'Titles, badges, and metrics create a crisp visual rhythm throughout the app.' },
              { title: 'Warmth', text: 'Soft gradients and glass panels keep the dark interface from feeling sterile.' },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
