import { MessageSquare, Plus, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { PostCard } from '@/components/cards/post-card'
import { UserCard } from '@/components/cards/user-card'
import { feedFeature } from '@/features/feed'

export default function FeedPage() {
  return (
    <PageShell
      title="Feed"
      subtitle="A social homepage with creation, discovery, and community panels inspired by the reference design."
      action={
        <Button>
          <Plus className="h-4 w-4" />
          Create post
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.7fr]">
        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Input placeholder="What’s new?" className="flex-1" />
              <Button variant="secondary">
                <MessageSquare className="h-4 w-4" />
                Post
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            {feedFeature.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <SectionHeading eyebrow="Trending" title="Popular topics" />
            <div className="flex flex-wrap gap-2">
              {feedFeature.trendingTags.map((tag) => (
                <Badge key={tag} variant="soft">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeading eyebrow="Growth" title="Suggested users" />
            <div className="space-y-3">
              {feedFeature.suggestedUsers.map((user) => (
                <UserCard key={user.handle} user={user} />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeading eyebrow="Subjects" title="Popular subjects" />
            <div className="space-y-3">
              {feedFeature.popularSubjects.map((subject) => (
                <div key={subject} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-200">{subject}</span>
                  <TrendingUp className="h-4 w-4 text-emerald-300" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}
