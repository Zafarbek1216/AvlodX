import { useDisclosure } from '@/hooks'
import { Navbar } from '@/components/layout/navbar'
import { Sidebar } from '@/components/layout/sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RouteTransition } from '@/components/content/route-transition'
import { X } from 'lucide-react'
import { appConfig } from '@/config'

export function MainLayout() {
  const { opened: menuOpen, open, close } = useDisclosure(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-y-0 left-0 w-[290px] border-r border-white/10 bg-slate-950 px-4 py-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-display text-lg font-bold">{appConfig.name}</p>
              <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0" onClick={close}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Sidebar mobile />
          </div>
        </div>
      ) : null}

      <div className="flex min-h-screen flex-1 flex-col">
        <Navbar variant="main" onMenuClick={open} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1600px]">
            <Card className="rounded-[36px] border-white/10 bg-slate-950/35 p-4 sm:p-6 lg:p-8">
              <RouteTransition />
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
