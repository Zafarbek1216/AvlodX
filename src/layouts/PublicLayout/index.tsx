import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { Card } from '@/components/ui/card'
import { RouteTransition } from '@/components/content/route-transition'

export function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar variant="public" />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden rounded-[36px] border-white/10 bg-slate-950/40 p-0">
          <div className="bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_32%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <RouteTransition />
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
