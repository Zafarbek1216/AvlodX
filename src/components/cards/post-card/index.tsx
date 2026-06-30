import { Bookmark, Heart, MessageSquare, Repeat2, MoreHorizontal, Share2 } from 'lucide-react'
import type { Post } from '@/data/mock'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <Avatar name={post.author.name} tone={post.author.tone} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-sm text-slate-400">{post.author.handle}</p>
                <Badge variant="outline">{post.time}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">{post.author.role}</p>
            </div>
            <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-lg font-semibold text-white">{post.title}</h3>
            <p className="text-sm leading-6 text-slate-400">{post.body}</p>
            {post.media ? (
              <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-cyan-500/20 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-200/85">Featured media</p>
                <div className="mt-12 rounded-[20px] border border-white/10 bg-slate-950/55 p-4 text-sm text-slate-200">
                  {post.media}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="soft">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                <Heart className="h-4 w-4 text-rose-300" /> {post.likes}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                <MessageSquare className="h-4 w-4 text-sky-300" /> {post.comments}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                <Repeat2 className="h-4 w-4 text-emerald-300" /> {post.reposts}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="secondary" size="sm">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
