export const routePaths = {
  public: {
    home: '/',
    about: '/about',
    features: '/features',
    contact: '/contact',
    faq: '/faq',
    privacy: '/privacy',
    terms: '/terms',
  },
  auth: {
    login: '/login',
    register: '/register',
  },
  app: {
    feed: '/feed',
    explore: '/explore',
    profile: '/profile',
    userProfile: '/users/:username',
    search: '/search',
    messages: '/messages',
    publicChat: '/public-chat',
    battle: '/battle',
    leaderboard: '/leaderboard',
    ai: '/ai',
    friends: '/friends',
    savedPosts: '/saved',
    notifications: '/notifications',
    createPost: '/create-post',
    editPost: '/posts/:postId/edit',
    achievements: '/achievements',
    tournaments: '/tournaments',
    settings: '/settings',
  },
  error: '/404',
} as const

export type RoutePath = string
