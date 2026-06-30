import { ChevronDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { faqItems } from '@/data/mock'

export default function FaqPage() {
  return (
    <PageShell title="FAQ" subtitle="Common questions answered with a clean, readable card layout.">
      <div className="space-y-8">
        <section>
          <SectionHeading eyebrow="Questions" title="Everything you need to know" />
          <div className="space-y-3">
            {faqItems.map((item) => (
              <Card key={item.question} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.answer}</p>
                  </div>
                  <Badge variant="outline">
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
