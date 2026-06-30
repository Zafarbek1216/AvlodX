import { Link } from 'react-router-dom'
import { Code2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge variant="soft">Start here</Badge>
        <h2 className="font-display text-3xl font-bold text-white">Create your AvlodX account</h2>
        <p className="text-sm leading-6 text-slate-400">Set up a premium profile shell with mock onboarding fields.</p>
      </div>

      <div className="space-y-4">
        <Button variant="secondary" className="w-full">
          <Code2 className="h-4 w-4" />
          Sign up with SSO
        </Button>
        <Button variant="secondary" className="w-full">
          <Mail className="h-4 w-4" />
          Sign up with email
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">First name</label>
          <Input placeholder="Abdullah" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Last name</label>
          <Input placeholder="Developer" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <Input placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
          <Input type="password" placeholder="Choose a strong password" />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <Link to="/login" className="text-violet-300 transition hover:text-violet-200">
          Already have an account?
        </Link>
        <Link to="/feed" className="text-slate-400 transition hover:text-white">
          Explore the app
        </Link>
      </div>

      <Button className="w-full">Create account</Button>
    </div>
  )
}
