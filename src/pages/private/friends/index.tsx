import { UserPlus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PageShell } from '@/components/content/page-shell'
import { SectionHeading } from '@/components/content/section-heading'
import { FriendCard } from '@/components/cards/friend-card'
import { friendsFeature } from '@/features/friends'

export default function FriendsPage() {
  return (
    <PageShell title="Friends" subtitle="A social graph view with friends, requests, and suggestions.">
      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Friends</h3>
            <Badge variant="soft">{friendsFeature.friends.length}</Badge>
          </div>
          <div className="space-y-3">
            {friendsFeature.friends.map((friend) => (
              <FriendCard key={friend.handle} name={friend.name} handle={friend.handle} status={friend.status} tone={friend.tone} compact />
            ))}
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <SectionHeading eyebrow="Requests" title="Pending invites" />
          <div className="space-y-3">
            {friendsFeature.friendRequests.map((request) => (
              <FriendCard key={request.handle} name={request.name} handle={request.handle} note={request.note} tone={request.tone} />
            ))}
          </div>
        </Card>

        <Card className="space-y-4 p-5">
          <SectionHeading eyebrow="Suggestions" title="People you may know" />
          <div className="space-y-3">
            {friendsFeature.friendSuggestions.map((suggestion) => (
              <FriendCard key={suggestion.handle} name={suggestion.name} handle={suggestion.handle} note={suggestion.note} tone={suggestion.tone} compact />
            ))}
          </div>
          <Button variant="secondary" className="w-full">
            <UserPlus className="h-4 w-4" />
            Find more friends
          </Button>
        </Card>
      </div>
    </PageShell>
  )
}
