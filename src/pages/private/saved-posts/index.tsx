import { Bookmark, FolderOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { PostCard } from '@/components/cards/post-card'
import { posts, savedCollections } from '@/data/mock'

export default function SavedPostsPage() {
  return (
    <PageShell title="Saved Posts" subtitle="A curated collection view for bookmarked content and folders.">
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <Card className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Collections</h3>
            <Badge variant="soft">{savedCollections.length}</Badge>
          </div>
          <div className="space-y-3">
            {savedCollections.map((collection) => (
              <div key={collection.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{collection.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{collection.count}</p>
                  </div>
                  <FolderOpen className="h-4 w-4 text-violet-300" />
                </div>
                <div className={`mt-4 h-1.5 rounded-full bg-gradient-to-r ${collection.tone}`} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <SectionHeading eyebrow="Saved feed" title="Bookmarked posts" />
          <div className="space-y-6">
            {posts.slice(0, 2).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Button variant="secondary" className="w-full">
            <Bookmark className="h-4 w-4" />
            View all saved items
          </Button>
        </Card>
      </div>
    </PageShell>
  )
}
