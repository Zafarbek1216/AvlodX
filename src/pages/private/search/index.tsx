import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { PostCard } from '@/components/cards/post-card'
import { UserCard } from '@/components/cards/user-card'
import { posts, searchCategories, suggestedUsers } from '@/data/mock'

export default function SearchPage() {
  return (
    <PageShell
      title="Search"
      subtitle="A focused discovery page for people, posts, and topics with mock results."
    >
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input placeholder="Search the whole app..." className="pl-10" />
            </div>
            <Button variant="secondary">Search</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {searchCategories.map((category, index) => (
              <Badge key={category} variant={index === 0 ? 'soft' : 'outline'}>
                {category}
              </Badge>
            ))}
          </div>
        </Card>

        <section className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-6">
            <Card className="p-6">
              <SectionHeading eyebrow="People" title="Suggested matches" />
              <div className="space-y-3">
                {suggestedUsers.slice(0, 3).map((user) => (
                  <UserCard key={user.handle} user={user} />
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
