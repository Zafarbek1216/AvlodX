import { Compass, Filter, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { UserCard } from '@/components/cards/user-card'
import { suggestedUsers, searchCategories, popularSubjects } from '@/data/mock'

export default function ExplorePage() {
  return (
    <PageShell
      title="Explore"
      subtitle="Discover creators, posts, and subjects through a curated discovery surface."
    >
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input placeholder="Search by people, posts, or topics..." className="pl-10" />
            </div>
            <Button variant="secondary">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {searchCategories.map((category, index) => (
              <Badge key={category} variant={index === 0 ? 'soft' : 'outline'}>
                {category}
              </Badge>
            ))}
          </div>
        </Card>

        <section>
          <SectionHeading eyebrow="Creators" title="People worth following" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {suggestedUsers.map((user) => (
              <UserCard key={user.handle} user={user} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Topics" title="Curated subject tiles" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {popularSubjects.map((subject, index) => (
              <Card key={subject} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Subject</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{subject}</h3>
                  </div>
                  <Compass className="h-5 w-5 text-violet-300" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  A discovery card with an emphasis on {index % 2 === 0 ? 'recent momentum' : 'community engagement'}.
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
