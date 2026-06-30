import { ChevronRight, Globe, Lock, Palette, UserRound, Bell, Languages } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { settingsFeature } from '@/features/settings'

const sectionIcons = [UserRound, Palette, Lock, Globe, Bell, Languages]

export default function SettingsPage() {
  return (
    <PageShell title="Settings" subtitle="A multi-section preferences screen with tabs, forms, and grouped controls.">
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <Card className="space-y-3 p-5">
          <h3 className="font-semibold text-white">Sections</h3>
          {settingsFeature.settingsSections.map((section, index) => {
            const Icon = sectionIcons[index] ?? ChevronRight
            return (
              <div key={section.id} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${index === 0 ? 'border-violet-400/30 bg-violet-500/12' : 'border-white/10 bg-white/5'}`}>
                <Icon className="h-4 w-4 text-violet-300" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{section.label}</p>
                  <p className="text-xs text-slate-500">{section.description}</p>
                </div>
              </div>
            )
          })}
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <SectionHeading eyebrow="Profile" title="Public information" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Display name</label>
                <Input defaultValue="Abdullah Developer" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Username</label>
                <Input defaultValue="@abdullah" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">Bio</label>
                <Input defaultValue="Full Stack Developer | Loves creating polished products" />
              </div>
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <SectionHeading eyebrow="Appearance" title="Theme controls" />
              <div className="space-y-3">
                {['Dark mode', 'Compact spacing', 'Vivid accents'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-200">{item}</span>
                    <Badge variant="soft">On</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <SectionHeading eyebrow="Privacy" title="Visibility controls" />
              <div className="space-y-3">
                {['Profile visibility', 'Post comments', 'Search discovery'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-200">{item}</span>
                    <Badge variant="outline">Public</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <SectionHeading eyebrow="Security" title="Sessions and login" />
              <div className="space-y-3">
                {['Password', 'Two-factor auth', 'Active sessions'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-200">{item}</span>
                    <Badge variant="soft">Manage</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <SectionHeading eyebrow="Language" title="Localization" />
              <div className="space-y-3">
                {['English', 'Russian', 'Uzbek'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-200">{item}</span>
                    <Badge variant={index === 0 ? 'soft' : 'outline'}>{index === 0 ? 'Active' : 'Available'}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button>Save settings</Button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
