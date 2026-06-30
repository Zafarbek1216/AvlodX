import { Award, BadgeCheck, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { achievements } from '@/data/mock'

export default function AchievementsPage() {
  return (
    <PageShell title="Achievements" subtitle="A badge grid with progress and milestone cards.">
      <div className="space-y-6">
        <section>
          <SectionHeading eyebrow="Milestones" title="Your badge collection" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="p-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br ${achievement.tone}`}>
                  {index % 3 === 0 ? <Award className="h-7 w-7 text-white" /> : index % 3 === 1 ? <BadgeCheck className="h-7 w-7 text-white" /> : <Zap className="h-7 w-7 text-white" />}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{achievement.description}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${achievement.tone}`} style={{ width: `${35 + index * 10}%` }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span>{achievement.progress}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
