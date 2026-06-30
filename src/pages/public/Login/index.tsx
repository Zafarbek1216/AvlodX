import { Link } from 'react-router-dom'
import { Code2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge variant="soft">Welcome back</Badge>
        <h2 className="font-display text-3xl font-bold text-white">Log in to AvlodX</h2>
        <p className="text-sm leading-6 text-slate-400">A frontend-only sign-in screen with a premium dark theme.</p>
      </div>

      <div className="space-y-4">
        <Button variant="secondary" className="w-full">
          <Code2 className="h-4 w-4" />
          Continue with SSO
        </Button>
        <Button variant="secondary" className="w-full">
          <Mail className="h-4 w-4" />
          Continue with email
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <Input placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <Link to="/register" className="text-violet-300 transition hover:text-violet-200">
          Create an account
        </Link>
        <Link to="/feed" className="text-slate-400 transition hover:text-white">
          Skip to feed
        </Link>
      </div>

      <Button className="w-full">Log in</Button>
    </div>
  )
}
