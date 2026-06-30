import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout, MainLayout, AuthLayout } from '@/layouts'
import { ProtectedRoute } from './ProtectedRoute'
import { routePaths } from '@/constants'
import { HomePage, AboutPage, FeaturesPage, ContactPage, FaqPage, PrivacyPage, TermsPage, LoginPage, RegisterPage, ErrorPage } from '@/pages/public'
import { FeedPage, ExplorePage, ProfilePage, UserProfilePage, SearchPage, MessagesPage, PublicChatPage, BattlePage, LeaderboardPage, AiPage, FriendsPage, SavedPostsPage, NotificationsPage, CreatePostPage, EditPostPage, AchievementsPage, TournamentsPage, SettingsPage } from '@/pages/private'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={routePaths.public.home} element={<HomePage />} />
        <Route path={routePaths.public.about} element={<AboutPage />} />
        <Route path={routePaths.public.features} element={<FeaturesPage />} />
        <Route path={routePaths.public.contact} element={<ContactPage />} />
        <Route path={routePaths.public.faq} element={<FaqPage />} />
        <Route path={routePaths.public.privacy} element={<PrivacyPage />} />
        <Route path={routePaths.public.terms} element={<TermsPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={routePaths.auth.login} element={<LoginPage />} />
        <Route path={routePaths.auth.register} element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path={routePaths.app.feed} element={<FeedPage />} />
          <Route path={routePaths.app.explore} element={<ExplorePage />} />
          <Route path={routePaths.app.profile} element={<ProfilePage />} />
          <Route path={routePaths.app.userProfile} element={<UserProfilePage />} />
          <Route path={routePaths.app.search} element={<SearchPage />} />
          <Route path={routePaths.app.messages} element={<MessagesPage />} />
          <Route path={routePaths.app.publicChat} element={<PublicChatPage />} />
          <Route path={routePaths.app.battle} element={<BattlePage />} />
          <Route path={routePaths.app.leaderboard} element={<LeaderboardPage />} />
          <Route path={routePaths.app.ai} element={<AiPage />} />
          <Route path={routePaths.app.friends} element={<FriendsPage />} />
          <Route path={routePaths.app.savedPosts} element={<SavedPostsPage />} />
          <Route path={routePaths.app.notifications} element={<NotificationsPage />} />
          <Route path={routePaths.app.createPost} element={<CreatePostPage />} />
          <Route path={routePaths.app.editPost} element={<EditPostPage />} />
          <Route path={routePaths.app.achievements} element={<AchievementsPage />} />
          <Route path={routePaths.app.tournaments} element={<TournamentsPage />} />
          <Route path={routePaths.app.settings} element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path={routePaths.error} element={<ErrorPage />} />
      <Route path="*" element={<Navigate to={routePaths.error} replace />} />
    </Routes>
  )
}
