import { useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { PostCard } from '@/components/cards/post-card'
import { profileFeature } from '@/features/profile'

export default function UserProfilePage() {
  const params = useParams<{ username?: string }>()
  const username = params.username ?? 'guest'

  return (
    <PageShell title="User Profile" subtitle="A public-facing profile route built for any username.">
      <div className="space-y-6">
        <Card className="overflow-hidden p-0">
          <div className="h-48 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,#10172a_0%,#24113d_50%,#050816_100%)]" />
          <div className="-mt-14 px-6 pb-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-end gap-5">
                <Avatar name={username} size="xl" tone="from-cyan-500 to-sky-500" className="ring-4 ring-slate-950" />
                <div>
                  <h2 className="font-display text-3xl font-bold text-white">{username}</h2>
                  <p className="mt-1 text-sm text-slate-400">@{username.toLowerCase()}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    Public profile preview with a premium cover, stats, and post gallery.
                  </p>
                </div>
              </div>
              <Button>Follow</Button>
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

        <section className="grid gap-6 xl:grid-cols-[1fr_0.55fr]">
          <div className="space-y-6">
            {profileFeature.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <SectionHeading eyebrow="About" title="Profile summary" />
              <p className="text-sm leading-6 text-slate-400">
                This view can be wired to any public username later without changing the layout or visual language.
              </p>
            </Card>
            <Card className="p-6">
              <SectionHeading eyebrow="Subjects" title="Popular topics" />
              <div className="flex flex-wrap gap-2">
                {profileFeature.popularSubjects.map((subject) => (
                  <Badge key={subject} variant="soft">
                    {subject}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
