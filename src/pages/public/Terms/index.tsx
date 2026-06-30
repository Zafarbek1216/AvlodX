import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'

const terms = [
  {
    title: 'Use of the interface',
    text: 'This UI is a presentation layer only and should be updated with final service terms before launch.',
  },
  {
    title: 'Mock data notice',
    text: 'All content shown here is fictional and intended to demonstrate routing, cards, and visual hierarchy.',
  },
  {
    title: 'Future additions',
    text: 'When backend logic is introduced, these terms can expand to cover accounts, moderation, and content ownership.',
  },
]

export default function TermsPage() {
  return (
    <PageShell title="Terms" subtitle="A well-structured terms page ready to be replaced with legal copy later.">
      <div className="space-y-6">
        <Badge variant="soft">Read carefully</Badge>
        <SectionHeading title="Agreement snapshot" description="Simple sections keep the legal content easy to scan." />
        <div className="space-y-4">
          {terms.map((term) => (
            <Card key={term.title} className="p-6">
              <h3 className="text-lg font-semibold text-white">{term.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{term.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
