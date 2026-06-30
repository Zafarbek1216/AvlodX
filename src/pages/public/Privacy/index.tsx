import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'

const sections = [
  {
    title: 'Information we would collect',
    body: 'This demo does not collect data. In a real product, this section would explain account, usage, and support information.',
  },
  {
    title: 'How information would be used',
    body: 'This route is intentionally static. Future implementation can describe personalization, moderation, and product improvements.',
  },
  {
    title: 'Your choices and controls',
    body: 'Use this area to document visibility, notification, and content preferences once the product gains real persistence.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy" subtitle="A clean legal page scaffold with structured content blocks and no backend behavior.">
      <div className="space-y-6">
        <Badge variant="soft">Frontend only</Badge>
        <SectionHeading title="Policy overview" description="The structure is ready for your final legal copy." />
        <div className="space-y-4">
          {sections.map((section) => (
            <Card key={section.title} className="p-6">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{section.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
