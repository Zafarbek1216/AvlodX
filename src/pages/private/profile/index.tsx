import { Edit3, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { PostCard } from '@/components/cards/post-card'
import { profileFeature } from '@/features/profile'

export default function ProfilePage() {
  return (
    <PageShell
      title="Profile"
      subtitle="A rich profile shell with a cover image, statistics, achievements, and a post grid."
    >
      <div className="space-y-6">
        <Card className="overflow-hidden p-0">
          <div className="h-52 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_34%),linear-gradient(135deg,#17122f_0%,#26184d_50%,#0f172a_100%)]" />
          <div className="-mt-16 px-6 pb-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-end gap-5">
                <Avatar name="Abdullah Developer" size="xl" tone="from-violet-500 to-fuchsia-500" className="ring-4 ring-slate-950" />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl font-bold text-white">Abdullah Developer</h2>
                    <Badge variant="soft">Rank #12</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">@abdullah</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    Full Stack Developer | Loves building polished products and premium community experiences.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">
                  <ShieldCheck className="h-4 w-4" />
                  Public profile
                </Button>
                <Button>
                  <Edit3 className="h-4 w-4" />
                  Edit profile
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <section className="grid gap-4 md:grid-cols-4">
          {profileFeature.profileStats.map((stat) => (
            <Card key={stat.label} className="p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
              <p className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</p>
            </Card>
          ))}
        </section>

        <section>
          <div className="mb-4 flex flex-wrap gap-2">
            {profileFeature.profileTabs.map((tab, index) => (
              <Badge key={tab} variant={index === 0 ? 'soft' : 'outline'}>
                {tab}
              </Badge>
            ))}
          </div>
          <div className="grid gap-6 xl:grid-cols-[1fr_0.65fr]">
            <div className="space-y-6">
              {profileFeature.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <SectionHeading eyebrow="Achievements" title="Recent badges" />
                <div className="space-y-3">
                  {profileFeature.achievements.slice(0, 3).map((achievement) => (
                    <div key={achievement.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold text-white">{achievement.title}</h3>
                        <Badge variant="soft">{achievement.progress}</Badge>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <SectionHeading eyebrow="Subjects" title="Most active topics" />
                <div className="flex flex-wrap gap-2">
                  {profileFeature.popularSubjects.map((subject) => (
                    <Badge key={subject} variant="soft">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
