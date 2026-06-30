import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  BookOpen,
  Bookmark,
  Compass,
  Crown,
  Gamepad2,
  Home,
  Inbox,
  LayoutGrid,
  MessageSquare,
  ImagePlus,
  Link2,
  ListChecks,
  Search,
  Settings2,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Tag,
  WandSparkles,
} from 'lucide-react'
import { routePaths } from '@/constants'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

export interface PublicLink {
  label: string
  href: string
}

export interface Author {
  name: string
  handle: string
  role: string
  tone: string
  initials?: string
}

export interface Post {
  id: string
  author: Author
  time: string
  title: string
  body: string
  tags: string[]
  likes: number
  comments: number
  reposts: number
  media?: string
}

export interface UserCardData {
  name: string
  handle: string
  title: string
  tone: string
  status?: string
  followers?: string
}

export interface NotificationItem {
  title: string
  description: string
  time: string
  tone: string
}

export interface LeaderboardEntry {
  rank: number
  name: string
  handle: string
  points: number
  wins: number
  tone: string
}

export interface BattleMode {
  title: string
  description: string
  label: string
  tone: string
}

export interface FriendItem {
  name: string
  handle: string
  status: string
  tone: string
}

export interface Achievement {
  title: string
  description: string
  progress: string
  tone: string
}

export interface Tournament {
  title: string
  type: string
  date: string
  prize: string
  tone: string
}

export interface SettingsSection {
  id: string
  label: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface MessageThread {
  name: string
  handle: string
  lastMessage: string
  time: string
  unread?: boolean
  tone: string
}

export interface ChatBubble {
  id: string
  name: string
  handle: string
  text: string
  time: string
  mine?: boolean
  tone: string
}

export interface AiPrompt {
  title: string
  tone: string
}

export const publicLinks: PublicLink[] = [
  { label: 'About', href: routePaths.public.about },
  { label: 'Features', href: routePaths.public.features },
  { label: 'FAQ', href: routePaths.public.faq },
  { label: 'Contact', href: routePaths.public.contact },
]

export const sidebarItems: NavItem[] = [
  { label: 'Feed', href: routePaths.app.feed, icon: Home },
  { label: 'Explore', href: routePaths.app.explore, icon: Compass },
  { label: 'Battle', href: routePaths.app.battle, icon: Gamepad2 },
  { label: 'Chat', href: routePaths.app.messages, icon: MessageSquare },
  { label: 'Leaderboard', href: routePaths.app.leaderboard, icon: Crown },
  { label: 'AI', href: routePaths.app.ai, icon: Sparkles },
  { label: 'Friends', href: routePaths.app.friends, icon: Users },
  { label: 'Saved', href: routePaths.app.savedPosts, icon: Bookmark },
  { label: 'Settings', href: routePaths.app.settings, icon: Settings2 },
]

export const topActions = [
  { label: 'Search', href: routePaths.app.search, icon: Search },
  { label: 'Notifications', href: routePaths.app.notifications, icon: Bell },
  { label: 'Messages', href: routePaths.app.messages, icon: Inbox },
  { label: 'AI', href: routePaths.app.ai, icon: Sparkles },
]

export const featureCards = [
  {
    icon: LayoutGrid,
    title: 'Adaptive social dashboard',
    description: 'A premium feed, profile, and discovery system designed for modern community products.',
    tone: 'violet',
  },
  {
    icon: WandSparkles,
    title: 'Refined motion system',
    description: 'Layered transitions, smooth hover states, and subtle depth cues keep the interface feeling alive.',
    tone: 'cyan',
  },
  {
    icon: Shield,
    title: 'Scalable information architecture',
    description: 'Clean route separation, reusable components, and mock data make it easy to expand later.',
    tone: 'emerald',
  },
  {
    icon: BookOpen,
    title: 'Content-first layouts',
    description: 'Every page balances utility and visual rhythm with cards, panels, and a dark glass aesthetic.',
    tone: 'amber',
  },
]

export const productStats = [
  { label: 'Creators active', value: '18.4k' },
  { label: 'Posts published', value: '240k' },
  { label: 'Battles hosted', value: '9.7k' },
  { label: 'Communities', value: '860+' },
]

export const valueProps = [
  {
    title: 'Built for social momentum',
    text: 'AvlodX focuses on discovery, status, and repeat engagement without cluttering the UI.',
  },
  {
    title: 'Structured for growth',
    text: 'The architecture is ready for future features while staying strictly frontend-only today.',
  },
  {
    title: 'Designed for a premium feel',
    text: 'Dark surfaces, vivid accents, rounded cards, and motion create the product-grade visual tone.',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Is this connected to a backend?',
    answer: 'No. Everything in this build is powered by mock data and frontend-only routing.',
  },
  {
    question: 'Can these pages be extended later?',
    answer: 'Yes. The layout and component structure were created to support future API and state integration.',
  },
  {
    question: 'Does the UI work on mobile?',
    answer: 'Yes. The layouts collapse cleanly and keep the important actions reachable on smaller screens.',
  },
  {
    question: 'Can we swap the visual direction later?',
    answer: 'Absolutely. Shared primitives and tokens make a full restyle straightforward.',
  },
]

export const authors: Author[] = [
  { name: 'Abdullah Developer', handle: '@abdullah', role: 'Full Stack Builder', tone: 'from-violet-500 to-fuchsia-500' },
  { name: 'Samandar', handle: '@samandar', role: 'Community Leader', tone: 'from-sky-500 to-cyan-500' },
  { name: 'Akhiyor', handle: '@akhiyor', role: 'Frontend Engineer', tone: 'from-amber-500 to-orange-500' },
  { name: 'CodeMaster', handle: '@codemaster', role: 'Mentor', tone: 'from-emerald-500 to-lime-500' },
]

export const posts: Post[] = [
  {
    id: 'post-1',
    author: authors[0],
    time: '2h',
    title: 'A new build for the AvlodX launch week',
    body: 'We just turned the product ideas into a premium social dashboard with routes, mock data, and motion-first interfaces.',
    tags: ['#avlodx', '#frontend', '#launch'],
    likes: 128,
    comments: 24,
    reposts: 11,
    media: 'Design system release preview',
  },
  {
    id: 'post-2',
    author: authors[1],
    time: '4h',
    title: 'Community challenge: ship your cleanest profile layout',
    body: 'Post your best profile card with stats, achievements, and a memorable cover image.',
    tags: ['#challenge', '#profiles', '#design'],
    likes: 92,
    comments: 18,
    reposts: 8,
  },
  {
    id: 'post-3',
    author: authors[2],
    time: '7h',
    title: 'What makes a social product feel premium?',
    body: 'It is the consistency of spacing, the warmth of the hierarchy, and the confidence of the motion.',
    tags: ['#product', '#ux', '#social'],
    likes: 84,
    comments: 12,
    reposts: 6,
  },
]

export const suggestedUsers: UserCardData[] = [
  { name: 'Dev Team', handle: '@devteam', title: 'Build in public', tone: 'from-violet-500 to-fuchsia-500', followers: '4.2k' },
  { name: 'Frontend Pro', handle: '@frontendpro', title: 'Design systems', tone: 'from-cyan-500 to-sky-500', followers: '2.8k' },
  { name: 'Study Group', handle: '@studygroup', title: 'Growth challenges', tone: 'from-emerald-500 to-lime-500', followers: '1.6k' },
  { name: 'CodeLabs', handle: '@codelabs', title: 'Ship daily', tone: 'from-amber-500 to-orange-500', followers: '3.1k' },
]

export const trendingTags = ['#javascript', '#react', '#uiux', '#frontend', '#tailwind', '#designsystems']

export const popularSubjects = ['React', 'TypeScript', 'Product design', 'Frontend architecture', 'Motion design', 'Community growth']

export const notifications: NotificationItem[] = [
  { title: 'Samandar liked your post', description: '“A new build for the AvlodX launch week”', time: '2m ago', tone: 'from-fuchsia-500 to-violet-500' },
  { title: 'Akhiyor mentioned you in a comment', description: 'Asked for feedback on the new post composer.', time: '18m ago', tone: 'from-sky-500 to-cyan-500' },
  { title: 'You earned a new badge', description: 'Momentum Builder unlocked for 50 post interactions.', time: '1h ago', tone: 'from-amber-500 to-orange-500' },
  { title: 'Leaderboard updated', description: 'You moved up 3 positions this week.', time: '5h ago', tone: 'from-emerald-500 to-lime-500' },
]

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Samandar', handle: '@samandar', points: 2450, wins: 24, tone: 'from-amber-500 to-orange-500' },
  { rank: 2, name: 'Abdullah Developer', handle: '@abdullah', points: 2150, wins: 18, tone: 'from-violet-500 to-fuchsia-500' },
  { rank: 3, name: 'Akhiyor', handle: '@akhiyor', points: 1890, wins: 15, tone: 'from-sky-500 to-cyan-500' },
  { rank: 4, name: 'CodeMaster', handle: '@codemaster', points: 1650, wins: 12, tone: 'from-emerald-500 to-lime-500' },
  { rank: 5, name: 'Frontend Pro', handle: '@frontendpro', points: 1420, wins: 10, tone: 'from-rose-500 to-pink-500' },
]

export const battleModes: BattleMode[] = [
  { title: 'Random Opponent', description: 'Match with a fresh challenger instantly.', label: 'Fastest queue', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Play With Friend', description: 'Invite someone you already know.', label: 'Direct invite', tone: 'from-cyan-500 to-sky-500' },
  { title: 'Team Battle', description: 'Two squads, one topic, scoreboard included.', label: 'Co-op mode', tone: 'from-emerald-500 to-lime-500' },
  { title: 'Tournament', description: 'Structured brackets and weekly progression.', label: 'Competitive', tone: 'from-amber-500 to-orange-500' },
]

export const battleHistory = [
  { title: 'AvlodX vs Samandar', status: 'Won 12-9', time: 'Yesterday' },
  { title: 'Akhiyor vs CodeMaster', status: 'In progress', time: 'Today' },
  { title: 'Frontend Pro vs Study Group', status: 'Won 11-8', time: '2 days ago' },
]

export const friends: FriendItem[] = [
  { name: 'Nodir', handle: '@nodir', status: 'Online', tone: 'from-emerald-500 to-lime-500' },
  { name: 'Malika', handle: '@malika', status: 'Studying React', tone: 'from-sky-500 to-cyan-500' },
  { name: 'Timur', handle: '@timur', status: 'Build mode', tone: 'from-violet-500 to-fuchsia-500' },
  { name: 'Zarina', handle: '@zarina', status: 'Available', tone: 'from-amber-500 to-orange-500' },
]

export const friendRequests = [
  { name: 'Rustam', handle: '@rustam', note: 'Wants to join your next battle.', tone: 'from-cyan-500 to-sky-500' },
  { name: 'Leyla', handle: '@leyla', note: 'Connected through a shared tournament.', tone: 'from-violet-500 to-fuchsia-500' },
]

export const friendSuggestions = [
  { name: 'Lina', handle: '@lina', note: 'Shares 5 subjects with you.', tone: 'from-emerald-500 to-lime-500' },
  { name: 'Artem', handle: '@artem', note: 'Active in the same communities.', tone: 'from-amber-500 to-orange-500' },
  { name: 'Sofia', handle: '@sofia', note: 'Posts quality front-end tips.', tone: 'from-rose-500 to-pink-500' },
]

export const savedCollections = [
  { title: 'Product Ideas', count: '24 posts', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Inspiration', count: '51 posts', tone: 'from-cyan-500 to-sky-500' },
  { title: 'Battle Strategies', count: '14 posts', tone: 'from-amber-500 to-orange-500' },
]

export const achievements: Achievement[] = [
  { title: 'First Post', description: 'Published your first community post.', progress: 'Completed', tone: 'from-emerald-500 to-lime-500' },
  { title: 'Top Commenter', description: 'Reached 250 meaningful comments.', progress: '213 / 250', tone: 'from-sky-500 to-cyan-500' },
  { title: 'Trend Spotter', description: 'Shared 20 high-performing topics.', progress: '17 / 20', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Battle Winner', description: 'Won 10 live battle rounds.', progress: '8 / 10', tone: 'from-amber-500 to-orange-500' },
  { title: 'Community Builder', description: 'Invited 50 new members.', progress: '32 / 50', tone: 'from-rose-500 to-pink-500' },
  { title: 'Expert Mode', description: 'Earned 1000 XP in the app.', progress: '720 / 1000', tone: 'from-cyan-500 to-emerald-400' },
]

export const tournaments: Tournament[] = [
  { title: 'Frontend Sprint Cup', type: 'Live bracket', date: 'July 3, 2026', prize: '5,000 XP', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Design Duel Night', type: 'Team event', date: 'July 9, 2026', prize: 'Badge bundle', tone: 'from-cyan-500 to-sky-500' },
  { title: 'Community Finals', type: 'Monthly grand final', date: 'July 21, 2026', prize: 'Featured profile', tone: 'from-amber-500 to-orange-500' },
]

export const settingsSections: SettingsSection[] = [
  { id: 'profile', label: 'Profile', description: 'Edit your public information and identity.' },
  { id: 'appearance', label: 'Appearance', description: 'Tweak the dark theme and visual density.' },
  { id: 'security', label: 'Security', description: 'Review login and session preferences.' },
  { id: 'privacy', label: 'Privacy', description: 'Control visibility and discovery settings.' },
  { id: 'notifications', label: 'Notifications', description: 'Set alerts for posts, messages, and battles.' },
  { id: 'language', label: 'Language', description: 'Choose the language used across the product.' },
]

export const messages: MessageThread[] = [
  { name: 'Dev Team', handle: '@devteam', lastMessage: 'Let’s ship the new landing tonight.', time: '12:30', unread: true, tone: 'from-violet-500 to-fuchsia-500' },
  { name: 'Frontend Pro', handle: '@frontendpro', lastMessage: 'Shared the responsive layout review.', time: '11:05', tone: 'from-sky-500 to-cyan-500' },
  { name: 'Samandar', handle: '@samandar', lastMessage: 'Great work on the dashboard polish.', time: '10:20', tone: 'from-amber-500 to-orange-500' },
  { name: 'Study Group', handle: '@studygroup', lastMessage: 'Anyone up for a React sprint?', time: '09:41', tone: 'from-emerald-500 to-lime-500' },
]

export const chatMessages: ChatBubble[] = [
  { id: '1', name: 'Dev Team', handle: '@devteam', text: 'The feed card spacing feels premium now.', time: '12:05', tone: 'from-violet-500 to-fuchsia-500' },
  { id: '2', name: 'You', handle: '@you', text: 'Agreed. I tightened the hierarchy and added better hover states.', time: '12:07', mine: true, tone: 'from-cyan-500 to-sky-500' },
  { id: '3', name: 'Dev Team', handle: '@devteam', text: 'The motion on route changes is especially clean.', time: '12:09', tone: 'from-violet-500 to-fuchsia-500' },
  { id: '4', name: 'You', handle: '@you', text: 'Next I want the AI panel and leaderboard to feel equally polished.', time: '12:10', mine: true, tone: 'from-cyan-500 to-sky-500' },
]

export const aiPrompts: AiPrompt[] = [
  { title: 'Summarize this week’s community activity', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Draft a post about the new battle feature', tone: 'from-cyan-500 to-sky-500' },
  { title: 'Suggest improvements for the profile page', tone: 'from-emerald-500 to-lime-500' },
  { title: 'Turn this chat into a launch checklist', tone: 'from-amber-500 to-orange-500' },
]

export const inboxStats = [
  { label: 'Unread', value: '12', icon: Bell },
  { label: 'Replies', value: '48', icon: MessageSquare },
  { label: 'Saved', value: '26', icon: Bookmark },
  { label: 'Wins', value: '14', icon: Trophy },
]

export const profileStats = [
  { label: 'Posts', value: '23' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '156' },
  { label: 'Badges', value: '45' },
]

export const profileTabs = ['Posts', 'Saved', 'Achievements', 'Media']

export const createPostTools = [
  { label: 'Add image', icon: ImagePlus },
  { label: 'Add link', icon: Link2 },
  { label: 'Checklist', icon: ListChecks },
  { label: 'Tags', icon: Tag },
]

export const searchCategories = ['All', 'Users', 'Posts', 'Tags']

export const leaderboardFilters = ['All time', 'This week', 'This month']

export const settingsTabs = settingsSections.map((section) => section.label)
