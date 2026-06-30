import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { NotificationCard } from '@/components/cards/notification-card'
import { notificationsFeature } from '@/features/notifications'

export default function NotificationsPage() {
  return (
    <PageShell title="Notifications" subtitle="A refined inbox for updates, reactions, and social signals.">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {notificationsFeature.inboxStats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                    <p className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <Icon className="h-5 w-5 text-violet-300" />
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <SectionHeading eyebrow="Inbox" title="Recent activity" className="mb-0" />
            <Button variant="secondary">Mark all read</Button>
          </div>
          <div className="space-y-3">
            {notificationsFeature.notifications.map((notification) => (
              <NotificationCard key={notification.title} notification={notification} />
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}
