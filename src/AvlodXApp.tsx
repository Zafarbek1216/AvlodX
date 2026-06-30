import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  FiHome, FiSearch, FiMessageSquare, FiZap, FiAward,
  FiBell, FiUser, FiSettings, FiLogOut, FiSend, FiEdit2,
  FiCamera, FiCheck, FiChevronRight, FiGlobe, FiLock,
  FiEye, FiSliders, FiImage, FiFileText, FiBarChart2,
  FiTag, FiHeart, FiRepeat, FiMoreHorizontal, FiPlus,
  FiMoon, FiMonitor, FiDroplet, FiFeather,
  FiUpload, FiX, FiVolumeX, FiShield, FiWifi
} from "react-icons/fi";
import {
  RiMedalLine, RiSwordLine, RiRobot2Line, RiLeafLine
} from "react-icons/ri";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  uz: {
    appName: "AvlodX", tagline: "O'quvchilar uchun ilmiy hamjamiyat",
    feed: "Lenta", search: "Qidirish", chats: "Chatlar", battles: "Bellashuvlar",
    leaderboard: "Reyting", ai: "AI Yordamchi", notifications: "Bildirishnomalar",
    profile: "Profil", settings: "Sozlamalar", achievements: "Yutuqlar",
    createPost: "Post yaratish", findOpponent: "Raqib topish",
    whatsNew: "Yangilik bormi?", post: "E'lon", trending: "Trendlar",
    suggested: "Tavsiya", subjects: "Fanlar", wins: "G'alaba",
    matches: "O'yinlar", streak: "Ketma-ket", points: "Ball",
    battleModes: "Bellashuv turlari", recentBattles: "So'nggi bellashuvlar",
    askAnything: "Istalgan savol bering...", send: "Jo'natish",
    rank: "Daraja", myProfile: "Mening profilim", editProfile: "Profilni tahrirlash",
    followers: "Kuzatuvchilar", following: "Kuzatilayotganlar", posts: "Postlar",
    saved: "Saqlangan", online: "Onlayn", offline: "Oflayn",
    typeMessage: "Xabar yozing...", city: "Shahar", uzbekistan: "O'zbekiston",
    welcome: "AvlodX ga xush kelibsiz!", loginBtn: "Kirish", registerBtn: "Ro'yxatdan o'tish",
    math: "Matematika", cs: "Informatika", physics: "Fizika", english: "Ingliz tili",
    russian: "Rus tili", chemistry: "Kimyo", biology: "Biologiya",
    bronze: "Bronza", silver: "Kumush", gold: "Oltin", platinum: "Platina",
    diamond: "Olmosh", master: "Master", grandmaster: "Grandmaster", legend: "Afsonaviy",
    appearance: "Ko'rinish", theme: "Mavzu", language: "Til", privacy: "Maxfiylik",
    security: "Xavfsizlik", notifications_s: "Bildirishnomalar",
    darkMode: "Qoʻng'ir rejim", save: "Saqlash", cancel: "Bekor qilish",
    uploadPhoto: "Rasm yuklash", changeCover: "Muqovani o'zgartirish",
    displayName: "Ism", username: "Foydalanuvchi nomi", bio: "Bio",
  },
  ru: {
    appName: "AvlodX", tagline: "Научное сообщество для учеников",
    feed: "Лента", search: "Поиск", chats: "Чаты", battles: "Битвы",
    leaderboard: "Рейтинг", ai: "AI Помощник", notifications: "Уведомления",
    profile: "Профиль", settings: "Настройки", achievements: "Достижения",
    createPost: "Создать пост", findOpponent: "Найти соперника",
    whatsNew: "Что нового?", post: "Опубликовать", trending: "Тренды",
    suggested: "Рекомендации", subjects: "Предметы", wins: "Победы",
    matches: "Матчи", streak: "Серия", points: "Очки",
    battleModes: "Режимы битв", recentBattles: "Последние битвы",
    askAnything: "Задай любой вопрос...", send: "Отправить",
    rank: "Ранг", myProfile: "Мой профиль", editProfile: "Редактировать",
    followers: "Подписчики", following: "Подписки", posts: "Посты",
    saved: "Сохранённые", online: "Онлайн", offline: "Офлайн",
    typeMessage: "Написать сообщение...", city: "Город", uzbekistan: "Узбекистан",
    welcome: "Добро пожаловать в AvlodX!", loginBtn: "Войти", registerBtn: "Регистрация",
    math: "Математика", cs: "Информатика", physics: "Физика", english: "Английский",
    russian: "Русский язык", chemistry: "Химия", biology: "Биология",
    bronze: "Бронза", silver: "Серебро", gold: "Золото", platinum: "Платина",
    diamond: "Алмаз", master: "Мастер", grandmaster: "Грандмастер", legend: "Легенда",
    appearance: "Внешний вид", theme: "Тема", language: "Язык", privacy: "Конфиденциальность",
    security: "Безопасность", notifications_s: "Уведомления",
    darkMode: "Тёмный режим", save: "Сохранить", cancel: "Отмена",
    uploadPhoto: "Загрузить фото", changeCover: "Сменить обложку",
    displayName: "Имя", username: "Имя пользователя", bio: "О себе",
  },
  en: {
    appName: "AvlodX", tagline: "Academic community for students",
    feed: "Feed", search: "Search", chats: "Chats", battles: "Battles",
    leaderboard: "Leaderboard", ai: "AI Assistant", notifications: "Notifications",
    profile: "Profile", settings: "Settings", achievements: "Achievements",
    createPost: "Create post", findOpponent: "Find opponent",
    whatsNew: "What's new?", post: "Post", trending: "Trending",
    suggested: "Suggested", subjects: "Subjects", wins: "Wins",
    matches: "Matches", streak: "Streak", points: "Points",
    battleModes: "Battle modes", recentBattles: "Recent battles",
    askAnything: "Ask anything...", send: "Send",
    rank: "Rank", myProfile: "My profile", editProfile: "Edit profile",
    followers: "Followers", following: "Following", posts: "Posts",
    saved: "Saved", online: "Online", offline: "Offline",
    typeMessage: "Type a message...", city: "City", uzbekistan: "Uzbekistan",
    welcome: "Welcome to AvlodX!", loginBtn: "Login", registerBtn: "Register",
    math: "Math", cs: "Computer Science", physics: "Physics", english: "English",
    russian: "Russian", chemistry: "Chemistry", biology: "Biology",
    bronze: "Bronze", silver: "Silver", gold: "Gold", platinum: "Platinum",
    diamond: "Diamond", master: "Master", grandmaster: "Grandmaster", legend: "Legend",
    appearance: "Appearance", theme: "Theme", language: "Language", privacy: "Privacy",
    security: "Security", notifications_s: "Notifications",
    darkMode: "Dark mode", save: "Save", cancel: "Cancel",
    uploadPhoto: "Upload photo", changeCover: "Change cover",
    displayName: "Display name", username: "Username", bio: "Bio",
  },
};

// ─── THEMES ──────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    label: "Dark",
    icon: FiMoon,
    bg: "linear-gradient(135deg, #050816 0%, #0a1020 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(139,92,246,0.15), transparent 35%), radial-gradient(circle at 90% 80%, rgba(56,189,248,0.08), transparent 30%)",
    sidebar: "rgba(5,8,22,0.85)",
    card: "rgba(15,23,42,0.6)",
    accent: "#7c3aed",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/15",
    accentBorder: "border-violet-400/25",
  },
  blue: {
    label: "Ocean Blue",
    icon: FiDroplet,
    bg: "linear-gradient(135deg, #020c1b 0%, #041527 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(14,165,233,0.2), transparent 35%), radial-gradient(circle at 90% 80%, rgba(56,189,248,0.1), transparent 30%)",
    sidebar: "rgba(2,12,27,0.9)",
    card: "rgba(7,29,60,0.6)",
    accent: "#0284c7",
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/15",
    accentBorder: "border-sky-400/25",
  },
  midnight: {
    label: "Midnight",
    icon: FiMonitor,
    bg: "linear-gradient(135deg, #0a0a14 0%, #10101e 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(99,102,241,0.15), transparent 35%), radial-gradient(circle at 90% 80%, rgba(139,92,246,0.08), transparent 30%)",
    sidebar: "rgba(8,8,18,0.9)",
    card: "rgba(16,16,32,0.6)",
    accent: "#6366f1",
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/15",
    accentBorder: "border-indigo-400/25",
  },
  forest: {
    label: "Forest",
    icon: RiLeafLine,
    bg: "linear-gradient(135deg, #050f0a 0%, #0a1e12 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(16,185,129,0.15), transparent 35%), radial-gradient(circle at 90% 80%, rgba(52,211,153,0.08), transparent 30%)",
    sidebar: "rgba(5,15,10,0.9)",
    card: "rgba(10,28,18,0.6)",
    accent: "#059669",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/15",
    accentBorder: "border-emerald-400/25",
  },
  slate: {
    label: "Slate",
    icon: FiFeather,
    bg: "linear-gradient(135deg, #0f1117 0%, #181c28 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(148,163,184,0.1), transparent 35%), radial-gradient(circle at 90% 80%, rgba(100,116,139,0.08), transparent 30%)",
    sidebar: "rgba(15,17,23,0.9)",
    card: "rgba(24,28,40,0.6)",
    accent: "#64748b",
    accentText: "text-slate-400",
    accentBg: "bg-slate-500/15",
    accentBorder: "border-slate-400/25",
  },
  sunset: {
    label: "Sunset",
    icon: FiZap,
    bg: "linear-gradient(135deg, #1a0a05 0%, #2a0f08 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(249,115,22,0.2), transparent 35%), radial-gradient(circle at 90% 80%, rgba(244,63,94,0.1), transparent 30%)",
    sidebar: "rgba(26,10,5,0.9)",
    card: "rgba(42,15,8,0.6)",
    accent: "#f97316",
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/15",
    accentBorder: "border-orange-400/25",
  },
  rose: {
    label: "Rose",
    icon: FiHeart,
    bg: "linear-gradient(135deg, #1a0511 0%, #260a1c 100%)",
    glow: "radial-gradient(circle at 10% 20%, rgba(244,63,94,0.18), transparent 35%), radial-gradient(circle at 90% 80%, rgba(217,70,239,0.1), transparent 30%)",
    sidebar: "rgba(26,5,17,0.9)",
    card: "rgba(38,10,28,0.6)",
    accent: "#e11d48",
    accentText: "text-rose-400",
    accentBg: "bg-rose-500/15",
    accentBorder: "border-rose-400/25",
  },
};

// ─── RANKS ───────────────────────────────────────────────────────────────────
const RANKS = [
  { name: "bronze", min: 0, max: 299, gradient: "from-amber-700 to-yellow-600", icon: <RiMedalLine /> },
  { name: "silver", min: 300, max: 699, gradient: "from-slate-400 to-slate-300", icon: <RiMedalLine /> },
  { name: "gold", min: 700, max: 1299, gradient: "from-yellow-400 to-amber-400", icon: <RiMedalLine /> },
  { name: "platinum", min: 1300, max: 2099, gradient: "from-cyan-200 to-slate-200", icon: <RiSwordLine /> },
  { name: "diamond", min: 2100, max: 3199, gradient: "from-cyan-300 to-blue-300", icon: <RiSwordLine /> },
  { name: "master", min: 3200, max: 4799, gradient: "from-violet-500 to-purple-400", icon: <RiSwordLine /> },
  { name: "grandmaster", min: 4800, max: 7499, gradient: "from-orange-500 to-red-400", icon: <RiSwordLine /> },
  { name: "legend", min: 7500, max: Infinity, gradient: "from-yellow-400 via-orange-400 to-red-400", icon: <RiMedalLine /> },
];

function getRank(xp: number) {
  return RANKS.find(r => xp >= r.min && xp <= r.max) || RANKS[0];
}

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const POSTS = [
  { id: 1, author: "Abdulloh Developer", handle: "@abdulloh.dev", time: "3 soat oldin", subject: "cs", title: "React va TypeScript bilan yangi loyiha", body: "Full Stack Developer sifatida bu kombinatsiyani juda yaxshi ko'raman. Komponentlar tipizatsiyasi hech qachon bunday oson bo'lmagan!", likes: 128, comments: 24, reposts: 8, xp: 2650, avatar: "A" },
  { id: 2, author: "Samandar Toshmatov", handle: "@samandar_dev", time: "5 soat oldin", subject: "math", title: "Kvadrat tenglamalarni yechishning 3 usuli", body: "Diskriminant usuli, formula usuli va grafik usuli — bularning barchasini bilib olsangiz, matematikadan hech qachon qo'rqmaysiz!", likes: 245, comments: 38, reposts: 19, xp: 1890, avatar: "S" },
  { id: 3, author: "Dilnoza Yusupova", handle: "@dilnoza_uz", time: "1 kun oldin", subject: "english", title: "IELTS 7.5 olish uchun mening strategiyam", body: "6 oylik tayyorgarlikdan so'ng 7.5 oldim! Reading va Writing bo'limlarida qiyin bo'ldi lekin mana, hammasi mumkin.", likes: 512, comments: 67, reposts: 44, xp: 3200, avatar: "D" },
];

const CHAT_ROOMS = [
  { id: "uz", name: "O'zbekiston", emoji: "🇺🇿", members: 12847, type: "country" },
  { id: "tashkent", name: "Toshkent", emoji: "🏙️", members: 4521, type: "city" },
  { id: "math_chat", name: "Matematika", emoji: "📐", members: 3421, type: "subject" },
  { id: "cs_chat", name: "Informatika", emoji: "💻", members: 5672, type: "subject" },
];

const CHAT_MESSAGES: Record<string, {id:number,author:string,avatar:string,text:string,time:string,own:boolean}[]> = {
  uz: [
    { id: 1, author: "Abdulloh", avatar: "A", text: "Salom hammaga! Bugun kimdir olimpiadaga tayyorlanmoqdami?", time: "10:24", own: false },
    { id: 2, author: "Samandar", avatar: "S", text: "Ha, men matematika olimpiadasi uchun tayyorlanmoqdaman", time: "10:26", own: false },
    { id: 3, author: "Siz", avatar: "M", text: "Men ham! Birgalikda tayyorlansak bo'ladimi?", time: "10:28", own: true },
    { id: 4, author: "Dilnoza", avatar: "D", text: "Albatta! Men ingliz tili olimpiadasi uchun tayyorlanaman, biroq yordam bera olaman", time: "10:29", own: false },
  ],
  tashkent: [
    { id: 1, author: "Jasur", avatar: "J", text: "Toshkentdan salom! Bu yil MHK imtihoni qachon?", time: "09:15", own: false },
    { id: 2, author: "Nodira", avatar: "N", text: "May oyida, taxminan 15-sida", time: "09:17", own: false },
    { id: 3, author: "Siz", avatar: "M", text: "Rahmat! Tayyor bo'lamiz", time: "09:20", own: true },
  ],
  math_chat: [
    { id: 1, author: "Kamol", avatar: "K", text: "Kimdir integralni tushuntiradi?", time: "11:00", own: false },
    { id: 2, author: "Siz", avatar: "M", text: "Albatta, qanday savol?", time: "11:02", own: true },
  ],
  cs_chat: [
    { id: 1, author: "Dev", avatar: "D", text: "React Hooks haqida biror narsa sorasizmi?", time: "12:00", own: false },
  ],
};

const LEADERBOARD = [
  { rank: 1, name: "Dilnoza Yusupova", handle: "@dilnoza_uz", xp: 7820, wins: 45, subject: "english", avatar: "D" },
  { rank: 2, name: "Abdulloh Developer", handle: "@abdulloh.dev", xp: 6540, wins: 38, subject: "cs", avatar: "A" },
  { rank: 3, name: "Kamol Nazarov", handle: "@kamol_n", xp: 5210, wins: 31, subject: "math", avatar: "K" },
  { rank: 4, name: "Samandar Toshmatov", handle: "@samandar_dev", xp: 3890, wins: 24, subject: "physics", avatar: "S" },
  { rank: 5, name: "Zulfiya Rahimova", handle: "@zulfiya_r", xp: 3210, wins: 20, subject: "chemistry", avatar: "Z" },
  { rank: 6, name: "Jasur Karimov", handle: "@jasur_k", xp: 2650, wins: 18, subject: "biology", avatar: "J" },
  { rank: 7, name: "Munira Askarova", handle: "@munira_a", xp: 1890, wins: 12, subject: "math", avatar: "M" },
];

const BATTLE_QUESTIONS: Record<string, {q:string,a:string,opts:string[]}[]> = {
  math: [
    { q: "2x² + 5x - 3 = 0 tenglamaning yechimi?", a: "x = 0.5 yoki x = -3", opts: ["x = 1 yoki x = -3", "x = 0.5 yoki x = -3", "x = 2 yoki x = -1.5", "x = -0.5 yoki x = 3"] },
    { q: "sin²α + cos²α = ?", a: "1", opts: ["0", "1", "2", "sin(2α)"] },
    { q: "log₂(8) = ?", a: "3", opts: ["2", "3", "4", "8"] },
  ],
  cs: [
    { q: "O(n log n) murakkablikdagi saralash algoritmi?", a: "QuickSort", opts: ["BubbleSort", "SelectionSort", "QuickSort", "LinearSort"] },
    { q: "HTTP status code 404 nimani bildiradi?", a: "Not Found", opts: ["Server Error", "Not Found", "Unauthorized", "Redirect"] },
    { q: "JavaScript-da 'typeof null' nima qaytaradi?", a: "'object'", opts: ["'null'", "'undefined'", "'object'", "'boolean'"] },
  ],
  physics: [
    { q: "Yorug'lik tezligi taxminan qancha?", a: "3×10⁸ m/s", opts: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"] },
    { q: "E = mc² formulasida 'c' nima?", a: "Yorug'lik tezligi", opts: ["Energiya", "Massa", "Yorug'lik tezligi", "Issiqlik"] },
  ],
  english: [
    { q: "Choose the correct form: 'I ___ here since 2020'", a: "have been", opts: ["am", "was", "have been", "had been"] },
    { q: "What is the synonym of 'ubiquitous'?", a: "Everywhere", opts: ["Rare", "Everywhere", "Hidden", "Ancient"] },
  ],
};

const NOTIFICATIONS_DATA = [
  { id: 1, text: "Samandar sizning postingizga izoh qoldirdi", time: "5 daqiqa", type: "comment", read: false },
  { id: 2, text: "Siz Matematika bitvasida g'alaba qozondingiz! +150 XP", time: "1 soat", type: "battle", read: false },
  { id: 3, text: "Dilnoza sizni kuzata boshladi", time: "2 soat", type: "follow", read: true },
  { id: 4, text: "Sizning postingiz 100 ta like to'pladi!", time: "5 soat", type: "like", read: true },
  { id: 5, text: "Jasur sizga musobaqa taklif qildi", time: "1 kun", type: "battle", read: true },
];

const ACHIEVEMENTS_DATA = [
  { id: 1, title: "Birinchi post", desc: "Birinchi postingizni e'lon qiling", icon: <FiFileText />, done: true, progress: 100 },
  { id: 2, title: "Birinchi g'alaba", desc: "Birinchi bitvada g'alaba qozing", icon: <RiSwordLine />, done: true, progress: 100 },
  { id: 3, title: "100 like", desc: "Postingiz 100 ta like to'plasin", icon: <FiHeart />, done: true, progress: 100 },
  { id: 4, title: "Mashhur muallif", desc: "500 ta like to'plan", icon: <FiAward />, done: false, progress: 67 },
  { id: 5, title: "Faol ishtirokchi", desc: "7 kun ketma-ket kirish", icon: <FiZap />, done: false, progress: 71 },
  { id: 6, title: "Expert", desc: "1000 XP to'plan", icon: <RiMedalLine />, done: false, progress: 45 },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const cx = (...cs: (string | boolean | undefined | null)[]) => cs.filter(Boolean).join(" ");

type ThemeKey = keyof typeof THEMES;
interface User { name: string; xp: number; wins: number; avatarSrc?: string; coverSrc?: string; username?: string; bio?: string; email?: string; city?: string; }
interface AppState { theme: ThemeKey; user: User; lang: string; }

// ─── JSON PERSISTENCE (localStorage) ──────────────────────────────────────────
// Barcha ro'yxatdan o'tgan foydalanuvchilar shu yerda JSON sifatida saqlanadi,
// shuning uchun ilovani yangilaganda yoki qayta ochganda hisob yo'qolmaydi.
const ACCOUNTS_KEY = "avlodx-accounts";
const SESSION_KEY = "avlodx-session";

interface Account { email: string; password: string; user: User; }

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function saveJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* localStorage to'lib qolgan yoki mavjud emas bo'lishi mumkin */
  }
}

function loadAccounts(): Account[] {
  return loadJSON<Account[]>(ACCOUNTS_KEY, []);
}

function saveAccounts(accounts: Account[]) {
  saveJSON(ACCOUNTS_KEY, accounts);
}

interface Session { loggedIn: boolean; email: string; lang: string; }

function loadSession(): Session | null {
  return loadJSON<Session | null>(SESSION_KEY, null);
}

function saveSession(session: Session | null) {
  if (session) saveJSON(SESSION_KEY, session);
  else localStorage.removeItem(SESSION_KEY);
}

// ─── UI COMPONENTS ────────────────────────────────────────────────────────────
function Avatar({ name = "?", size = 40, gradient = "from-violet-500 to-fuchsia-500", online, src }: { name?: string; size?: number; gradient?: string; online?: boolean; src?: string }) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white shrink-0`}
      style={{ width: size, height: size, minWidth: size, fontSize: size * 0.36, borderRadius: Math.max(8, size * 0.28) }}>
      {src
        ? <img src={src} alt={name} className="w-full h-full object-cover rounded-[inherit]" />
        : <span>{name[0]?.toUpperCase()}</span>
      }
      {online !== undefined && (
        <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-950 ${online ? "bg-emerald-400" : "bg-slate-500"}`} />
      )}
    </div>
  );
}

function Badge({ children, color = "violet", soft }: { children: React.ReactNode; color?: string; soft?: boolean }) {
  const colors: Record<string, string> = {
    violet: soft ? "bg-violet-500/15 text-violet-300 border-violet-400/20" : "bg-violet-500 text-white border-transparent",
    emerald: soft ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/20" : "bg-emerald-500 text-white border-transparent",
    amber: soft ? "bg-amber-500/15 text-amber-300 border-amber-400/20" : "bg-amber-500 text-white border-transparent",
    red: soft ? "bg-red-500/15 text-red-300 border-red-400/20" : "bg-red-500 text-white border-transparent",
    slate: soft ? "bg-white/10 text-slate-300 border-white/10" : "bg-slate-600 text-white border-transparent",
    cyan: soft ? "bg-cyan-500/15 text-cyan-300 border-cyan-400/20" : "bg-cyan-500 text-white border-transparent",
    sky: soft ? "bg-sky-500/15 text-sky-300 border-sky-400/20" : "bg-sky-500 text-white border-transparent",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-xl text-xs font-semibold border ${colors[color] || colors.slate}`}>
      {children}
    </span>
  );
}

function Btn({ children, variant = "primary", size = "md", onClick, className = "", disabled, type = "button" }: {
  children: React.ReactNode; variant?: string; size?: string; onClick?: () => void; className?: string; disabled?: boolean; type?: "button" | "submit";
}) {
  const v: Record<string, string> = {
    primary: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
    secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/20",
    ghost: "bg-transparent text-slate-300 hover:bg-white/8 hover:text-white",
    danger: "bg-red-500/15 text-red-300 border border-red-500/20 hover:bg-red-500/25",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/25",
    outline: "border border-white/15 text-slate-200 hover:bg-white/8 hover:border-white/25",
  };
  const s: Record<string, string> = { sm: "h-8 px-3 text-xs", md: "h-10 px-4 text-sm", lg: "h-12 px-5 text-base" };
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={cx("inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed", v[variant], s[size], className)}>
      {children}
    </button>
  );
}

function Card({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div onClick={onClick}
      className={cx("rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl", onClick && "cursor-pointer hover:border-white/20 transition-colors", className)}>
      {children}
    </div>
  );
}

function Input({ placeholder, value, onChange, onKeyDown, className = "", type = "text", defaultValue }: {
  placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; className?: string; type?: string; defaultValue?: string;
}) {
  return (
    <input type={type} placeholder={placeholder} value={value} defaultValue={defaultValue}
      onChange={onChange} onKeyDown={onKeyDown}
      className={cx("w-full h-10 px-4 rounded-2xl bg-white/8 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400/50 focus:bg-white/12 transition-all", className)} />
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!value)} className={cx("w-11 h-6 rounded-full transition-all relative shrink-0", value ? "bg-violet-500" : "bg-white/15")}>
      <div className={cx("absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm", value ? "left-6" : "left-1")} />
    </button>
  );
}

function SubjectTag({ subject, t }: { subject: string; t: typeof T.en }) {
  const map: Record<string, { label: string; color: string }> = {
    math: { label: t.math, color: "amber" }, cs: { label: t.cs, color: "cyan" },
    physics: { label: t.physics, color: "violet" }, english: { label: t.english, color: "emerald" },
    russian: { label: t.russian, color: "slate" }, chemistry: { label: t.chemistry, color: "violet" }, biology: { label: t.biology, color: "emerald" }
  };
  const s = map[subject] || { label: subject, color: "slate" };
  return <Badge color={s.color} soft>{s.label}</Badge>;
}

// ─── PAGES ────────────────────────────────────────────────────────────────────

function LoginPage({ onLogin, onRegister, t, lang, setLang }: {
  onLogin: (email: string, password: string) => string | null;
  onRegister: (name: string, email: string, password: string) => string | null;
  t: typeof T.en; lang: string; setLang: (l: string) => void;
}) {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    setError(null);
    if (tab === "register") {
      if (!name.trim()) return setError("Ismingizni kiriting");
      if (!email.includes("@")) return setError("Email noto'g'ri formatda");
      if (pass.length < 4) return setError("Parol kamida 4 ta belgidan iborat bo'lishi kerak");
      const err = onRegister(name.trim(), email.trim().toLowerCase(), pass);
      if (err) setError(err);
    } else {
      if (!email.includes("@")) return setError("Email noto'g'ri formatda");
      if (!pass) return setError("Parolni kiriting");
      const err = onLogin(email.trim().toLowerCase(), pass);
      if (err) setError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center gap-2 mb-8">
          {["uz", "ru", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)} className={cx("px-3 py-1.5 rounded-xl text-xs font-semibold transition-all", lang === l ? "bg-violet-500 text-white" : "bg-white/8 text-slate-400 hover:bg-white/15")}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 shadow-2xl shadow-violet-500/40">A</div>
          <h1 className="font-black text-3xl text-white">AvlodX</h1>
          <p className="text-slate-400 text-sm mt-1">{t.tagline}</p>
        </div>
        <Card className="p-6">
          <div className="flex rounded-2xl bg-white/5 p-1 mb-6">
            {(["login", "register"] as const).map(tb => (
              <button key={tb} onClick={() => { setTab(tb); setError(null); }} className={cx("flex-1 py-2 rounded-xl text-sm font-semibold transition-all", tab === tb ? "bg-violet-500 text-white shadow-lg" : "text-slate-400 hover:text-white")}>
                {tb === "login" ? t.loginBtn : t.registerBtn}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {tab === "register" && <Input placeholder="Ism Familiya" value={name} onChange={e => setName(e.target.value)} />}
            <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" onKeyDown={e => e.key === "Enter" && submit()} />
            <Input placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} type="password" onKeyDown={e => e.key === "Enter" && submit()} />
            {error && <p className="text-xs text-red-400 px-1">{error}</p>}
            <Btn className="w-full mt-2" onClick={submit}>
              {tab === "login" ? t.loginBtn : t.registerBtn}
            </Btn>
          </div>
          <div className="mt-4 text-center">
            <button onClick={() => onLogin("demo@avlodx.uz", "demo")} className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
              Demo kirish →
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FeedPage({ t, user }: { t: typeof T.en; user: User }) {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(POSTS);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const handlePost = () => {
    if (!postText.trim()) return;
    setPosts(prev => [{ id: Date.now(), author: user.name, handle: "@" + user.name.toLowerCase().replace(" ", "_"), time: "Hozir", subject: "cs", title: postText, body: "", likes: 0, comments: 0, reposts: 0, xp: user.xp, avatar: user.name[0] }, ...prev]);
    setPostText("");
  };

  const toggleLike = (id: number) => {
    setLiked(l => ({ ...l, [id]: !l[id] }));
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.65fr]">
      <div className="space-y-5">
        <Card className="p-5">
          <div className="flex gap-3 items-start">
            <Avatar name={user.name} src={user.avatarSrc} />
            <div className="flex-1">
              <Input placeholder={t.whatsNew} value={postText} onChange={e => setPostText(e.target.value)} onKeyDown={e => e.key === "Enter" && handlePost()} className="mb-3" />
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-slate-500">
                  <button className="hover:text-violet-400 transition-colors"><FiCamera size={16} /></button>
                  <button className="hover:text-violet-400 transition-colors"><FiImage size={16} /></button>
                  <button className="hover:text-violet-400 transition-colors"><FiBarChart2 size={16} /></button>
                  <button className="hover:text-violet-400 transition-colors"><FiTag size={16} /></button>
                </div>
                <Btn size="sm" onClick={handlePost}>{t.post}</Btn>
              </div>
            </div>
          </div>
        </Card>

        {posts.map(post => {
          const isLiked = liked[post.id];
          return (
            <Card key={post.id} className="p-5">
              <div className="flex gap-3">
                <Avatar name={post.avatar} size={40} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-white text-sm">{post.author}</span>
                    <span className="text-slate-500 text-xs">{post.handle}</span>
                    <SubjectTag subject={post.subject} t={t} />
                    <span className="text-slate-600 text-xs ml-auto">{post.time}</span>
                  </div>
                  <h3 className="font-semibold text-white mt-2 mb-1">{post.title}</h3>
                  {post.body && <p className="text-slate-300 text-sm leading-6">{post.body}</p>}
                  <div className="flex gap-5 mt-4">
                    <button onClick={() => toggleLike(post.id)} className={cx("flex items-center gap-1.5 text-sm transition-colors", isLiked ? "text-red-400" : "text-slate-500 hover:text-red-400")}>
                      <FiHeart size={14} className={isLiked ? "fill-current" : ""} /> {post.likes + (isLiked ? 1 : 0)}
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-400 transition-colors">
                      <FiMessageSquare size={14} /> {post.comments}
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                      <FiRepeat size={14} /> {post.reposts}
                    </button>
                    <button className="ml-auto text-slate-500 hover:text-white transition-colors">
                      <FiMoreHorizontal size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="space-y-5">
        <Card className="p-5">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{t.trending}</p>
          <div className="flex flex-wrap gap-2">
            {["#matematika", "#javascript", "#react", "#fizika", "#IELTS", "#python"].map(tag => (
              <button key={tag} className="px-3 py-1.5 rounded-xl bg-white/8 text-violet-300 text-xs hover:bg-violet-500/20 transition-colors">{tag}</button>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{t.suggested}</p>
          <div className="space-y-3">
            {LEADERBOARD.slice(0, 4).map(u => (
              <div key={u.handle} className="flex items-center gap-3">
                <Avatar name={u.avatar} size={36} online={Math.random() > 0.5} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{u.name}</p>
                  <p className="text-xs text-slate-500">{u.handle}</p>
                </div>
                <Btn size="sm" variant="secondary"><FiPlus size={12} /></Btn>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function ChatsPage({ t }: { t: typeof T.en }) {
  const [activeRoom, setActiveRoom] = useState("uz");
  const [messages, setMessages] = useState(CHAT_MESSAGES);
  const [text, setText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, activeRoom]);

  const send = () => {
    if (!text.trim()) return;
    const msg = { id: Date.now(), author: "Siz", avatar: "M", text, time: new Date().toLocaleTimeString("uz", { hour: "2-digit", minute: "2-digit" }), own: true };
    setMessages(m => ({ ...m, [activeRoom]: [...(m[activeRoom] || []), msg] }));
    setText("");
  };

  const room = CHAT_ROOMS.find(r => r.id === activeRoom);
  const msgs = messages[activeRoom] || [];

  return (
    <div className="grid gap-4 h-[calc(100vh-200px)]" style={{ gridTemplateColumns: "260px 1fr" }}>
      <Card className="flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/8">
          <div className="relative">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
            <Input placeholder="Qidirish..." className="pl-9" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {CHAT_ROOMS.map(r => (
            <button key={r.id} onClick={() => setActiveRoom(r.id)} className={cx("w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all", activeRoom === r.id ? "bg-violet-500/15 border border-violet-400/20" : "hover:bg-white/5")}>
              <div className="text-xl w-8 text-center">{r.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{r.name}</p>
                <p className="text-xs text-slate-500">{r.members.toLocaleString()} a'zo</p>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/8 flex items-center gap-3">
          <div className="text-xl">{room?.emoji}</div>
          <div>
            <p className="font-semibold text-white">{room?.name}</p>
            <p className="text-xs text-emerald-400">{room?.members.toLocaleString()} a'zo • online</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {msgs.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
              <FiMessageSquare size={40} className="mb-3 opacity-30" />
              <p className="text-sm">Hali xabar yo'q. Birinchi bo'ling!</p>
            </div>
          )}
          {msgs.map(msg => (
            <div key={msg.id} className={cx("flex gap-3", msg.own && "flex-row-reverse")}>
              <Avatar name={msg.avatar} size={32} />
              <div className={cx("max-w-xs", msg.own && "items-end flex flex-col")}>
                {!msg.own && <p className="text-xs text-slate-500 mb-1">{msg.author}</p>}
                <div className={cx("px-4 py-2.5 rounded-2xl text-sm", msg.own ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-tr-sm" : "bg-white/8 text-slate-100 rounded-tl-sm")}>
                  {msg.text}
                </div>
                <p className="text-xs text-slate-600 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className="p-4 border-t border-white/8">
          <div className="flex gap-3">
            <Input placeholder={t.typeMessage} value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} className="flex-1" />
            <Btn onClick={send} className="w-10 h-10 p-0 rounded-2xl"><FiSend size={14} /></Btn>
          </div>
        </div>
      </Card>
    </div>
  );
}

function BattlePage({ t, user, setUser }: { t: typeof T.en; user: User; setUser: (fn: (u: User) => User) => void }) {
  const [stage, setStage] = useState<"lobby" | "fight" | "result">("lobby");
  const [subject, setSubject] = useState("math");
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ player: 0, ai: 0 });
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [difficulty, setDifficulty] = useState("medium");

  const questions = BATTLE_QUESTIONS[subject] || BATTLE_QUESTIONS.math;
  const current = questions[qIdx % questions.length];

  useEffect(() => {
    if (stage !== "fight" || answered) return;
    if (timeLeft <= 0) { handleAnswer(null); return; }
    const timer = setTimeout(() => setTimeLeft(l => l - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, stage, answered]);

  const startBattle = () => {
    setQIdx(0); setScore({ player: 0, ai: 0 });
    setSelected(null); setAnswered(false); setTimeLeft(15);
    setStage("fight");
  };

  const handleAnswer = (opt: string | null) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    const correct = opt === current.a;
    const aiCorrect = Math.random() > (difficulty === "easy" ? 0.3 : difficulty === "medium" ? 0.55 : 0.75);
    setScore(s => ({ player: s.player + (correct ? 1 : 0), ai: s.ai + (aiCorrect ? 1 : 0) }));
    setTimeout(() => {
      if (qIdx + 1 >= questions.length) { setStage("result"); }
      else { setQIdx(i => i + 1); setSelected(null); setAnswered(false); setTimeLeft(15); }
    }, 1500);
  };

  if (stage === "fight") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar name={user.name} src={user.avatarSrc} size={40} />
              <div><p className="text-sm font-bold text-white">{user.name}</p><p className="text-xs text-violet-300">{score.player} pt</p></div>
            </div>
            <div className="text-center">
              <div className={cx("w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black border-2", timeLeft <= 5 ? "border-red-400 text-red-400 animate-pulse" : "border-violet-400 text-white")}>{timeLeft}</div>
              <p className="text-xs text-slate-500 mt-1">{qIdx + 1}/{questions.length}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right"><p className="text-sm font-bold text-white">AI Bot</p><p className="text-xs text-red-300">{score.ai} pt</p></div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-700 flex items-center justify-center"><RiRobot2Line size={20} className="text-white" /></div>
            </div>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all" style={{ width: `${(qIdx / questions.length) * 100}%` }} />
          </div>
        </Card>
        <Card className="p-8">
          <SubjectTag subject={subject} t={t} />
          <h2 className="text-xl font-bold text-white mt-4 mb-8 leading-7">{current.q}</h2>
          <div className="grid grid-cols-2 gap-3">
            {current.opts.map(opt => {
              let cls = "p-4 rounded-2xl border text-sm font-medium text-left transition-all cursor-pointer ";
              if (!answered) cls += "border-white/15 bg-white/5 hover:bg-white/12 hover:border-violet-400/40 text-slate-200";
              else if (opt === current.a) cls += "border-emerald-400 bg-emerald-500/15 text-emerald-300";
              else if (opt === selected && opt !== current.a) cls += "border-red-400 bg-red-500/15 text-red-300";
              else cls += "border-white/8 bg-white/3 text-slate-500";
              return <button key={opt} className={cls} onClick={() => handleAnswer(opt)}>{opt}</button>;
            })}
          </div>
        </Card>
      </div>
    );
  }

  if (stage === "result") {
    const won = score.player > score.ai;
    return (
      <div className="max-w-md mx-auto">
        <Card className="p-8 text-center">
          <div className="text-6xl mb-4 flex justify-center">{won ? <FiAward className="text-amber-400" /> : score.player === score.ai ? <RiSwordLine className="text-slate-400" /> : <FiHeart className="text-red-400" />}</div>
          <h2 className="font-black text-3xl text-white mb-2">{won ? "G'alaba!" : score.player === score.ai ? "Durrang!" : "Mag'lubiyat"}</h2>
          <p className="text-slate-400 mb-6">{won ? "+150 XP olasiz" : "-75 XP yo'qotasiz"}</p>
          <div className="flex justify-center gap-12 mb-8">
            <div><p className="text-3xl font-black text-white">{score.player}</p><p className="text-xs text-slate-500">Siz</p></div>
            <div className="text-slate-500 text-2xl">:</div>
            <div><p className="text-3xl font-black text-white">{score.ai}</p><p className="text-xs text-slate-500">AI Bot</p></div>
          </div>
          <div className="flex gap-3">
            <Btn className="flex-1" onClick={startBattle}>Qayta o'ynash</Btn>
            <Btn variant="secondary" className="flex-1" onClick={() => { setUser(u => ({ ...u, xp: Math.max(0, u.xp + (won ? 150 : -75)), wins: won ? u.wins + 1 : u.wins })); setStage("lobby"); }}>
              Natijani qabul qilish
            </Btn>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {[{ label: t.wins, value: user.wins || 24 }, { label: t.matches, value: (user.wins || 24) + 14 }, { label: t.streak, value: 7 }, { label: "XP", value: user.xp?.toLocaleString() }].map(stat => (
          <Card key={stat.label} className="p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-5 col-span-2">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Fan tanlash</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["math", "cs", "physics", "english"].map(s => (
              <button key={s} onClick={() => setSubject(s)} className={cx("px-4 py-2 rounded-2xl text-sm font-semibold transition-all", subject === s ? "bg-violet-500 text-white" : "bg-white/8 text-slate-300 hover:bg-white/15")}>
                <SubjectTag subject={s} t={t} />
              </button>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Qiyinlik</p>
          <div className="flex gap-3">
            {["easy", "medium", "hard"].map(d => (
              <button key={d} onClick={() => setDifficulty(d)} className={cx("flex-1 py-2.5 rounded-2xl text-sm font-semibold transition-all", difficulty === d ? (d === "easy" ? "bg-emerald-500 text-white" : d === "medium" ? "bg-amber-500 text-white" : "bg-red-500 text-white") : "bg-white/8 text-slate-400 hover:bg-white/15")}>
                {d === "easy" ? "Oson" : d === "medium" ? "O'rta" : "Qiyin"}
              </button>
            ))}
          </div>
        </Card>
        <Card className="p-5 flex flex-col">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">{t.recentBattles}</p>
          <div className="space-y-2 flex-1">
            {[{ vs: "AI Bot", sub: "math", result: "win" }, { vs: "Samandar T.", sub: "cs", result: "loss" }, { vs: "AI Bot", sub: "physics", result: "win" }].map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
                <SubjectTag subject={b.sub} t={t} />
                <span className="text-xs text-slate-400 flex-1">vs {b.vs}</span>
                <Badge color={b.result === "win" ? "emerald" : "red"} soft>{b.result === "win" ? "W" : "L"}</Badge>
              </div>
            ))}
          </div>
          <Btn className="w-full mt-4" onClick={startBattle}>
            <RiRobot2Line /> {t.findOpponent}
          </Btn>
        </Card>
      </div>
    </div>
  );
}

function LeaderboardPage({ t }: { t: typeof T.en }) {
  const [subFilter, setSubFilter] = useState("all");
  const filtered = subFilter === "all" ? LEADERBOARD : LEADERBOARD.filter(u => u.subject === subFilter);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[LEADERBOARD[1], LEADERBOARD[0], LEADERBOARD[2]].map((u, i) => {
          const pos = [2, 1, 3][i];
          const rank = getRank(u.xp);
          return (
            <Card key={u.handle} className={cx("p-5 text-center", pos === 1 && "border-amber-400/30 bg-amber-500/5")}>
              <div className="text-3xl mb-2 flex justify-center">
                {pos === 1 ? <FiAward className="text-amber-400" size={32} /> : pos === 2 ? <FiAward className="text-slate-300" size={28} /> : <FiAward className="text-amber-700" size={24} />}
              </div>
              <Avatar name={u.avatar} size={48} gradient={rank.gradient} />
              <p className="font-bold text-white mt-3 text-sm">{u.name}</p>
              <p className="text-xs text-slate-500">{u.handle}</p>
              <div className="flex justify-center mt-2">
                <Badge color={pos === 1 ? "amber" : "slate"} soft>{u.xp.toLocaleString()} XP</Badge>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex gap-2 flex-wrap">
        {["all", "math", "cs", "physics", "english"].map(s => (
          <button key={s} onClick={() => setSubFilter(s)} className={cx("px-3 py-1.5 rounded-xl text-xs font-semibold transition-all", subFilter === s ? "bg-violet-500/30 text-violet-200 border border-violet-400/30" : "text-slate-400 hover:text-white bg-white/5")}>
            {s === "all" ? "Barchasi" : s}
          </button>
        ))}
      </div>
      <Card className="overflow-hidden">
        <div className="grid gap-4 px-5 py-3 border-b border-white/8 text-xs uppercase tracking-widest text-slate-500" style={{ gridTemplateColumns: "40px 1fr 100px 80px" }}>
          <span>#</span><span>O'quvchi</span><span>XP</span><span>G'alaba</span>
        </div>
        {filtered.map((u, i) => {
          const rank = getRank(u.xp);
          return (
            <div key={u.handle} className={cx("grid gap-4 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors items-center", i === 0 && "bg-amber-500/5")} style={{ gridTemplateColumns: "40px 1fr 100px 80px" }}>
              <span className={cx("font-black text-lg", i === 0 ? "text-amber-400" : i === 1 ? "text-slate-300" : i === 2 ? "text-amber-700" : "text-slate-600")}>{u.rank}</span>
              <div className="flex items-center gap-3 min-w-0">
                <Avatar name={u.avatar} size={36} gradient={rank.gradient} />
                <div className="min-w-0"><p className="text-sm font-semibold text-white truncate">{u.name}</p><p className="text-xs text-slate-500">{u.handle}</p></div>
              </div>
              <span className="font-bold text-white">{u.xp.toLocaleString()}</span>
              <span className="font-semibold text-emerald-400">{u.wins}</span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

function AIPage({ t }: { t: typeof T.en }) {
  const [msgs, setMsgs] = useState([{ role: "assistant", content: "Salom! Men AvlodX AI yordamchisiman. Matematika, informatika, fizika yoki boshqa fanlar bo'yicha savolingiz bormi?" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput("");
    setMsgs(m => [...m, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6", max_tokens: 1000,
          system: "Sen AvlodX platformasining AI yordamchisisан. O'zbekiston o'quvchilari va talabalariga matematika, informatika, fizika, kimyo, biologiya, ingliz va rus tili bo'yicha yordam berasan. Qisqa, tushunarli va rag'batlantiruvchi bo'l.",
          messages: [...msgs, { role: "user", content: userMsg }].map(m => ({ role: m.role, content: m.content }))
        })
      });
      const data = await response.json();
      const text = data.content?.[0]?.text || "Xatolik yuz berdi.";
      setMsgs(m => [...m, { role: "assistant", content: text }]);
    } catch {
      setMsgs(m => [...m, { role: "assistant", content: "Tarmoq xatosi." }]);
    }
    setLoading(false);
  };

  return (
    <div className="grid gap-5 h-[calc(100vh-200px)]" style={{ gridTemplateColumns: "1fr 240px" }}>
      <Card className="flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
            <RiRobot2Line size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-white">AvlodX AI</p>
            <p className="text-xs text-emerald-400">● Online • Claude Sonnet</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {msgs.map((msg, i) => (
            <div key={i} className={cx("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
              {msg.role === "assistant"
                ? <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shrink-0"><RiRobot2Line size={14} className="text-white" /></div>
                : <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0"><FiUser size={14} className="text-white" /></div>
              }
              <div className={cx("max-w-md px-4 py-3 rounded-2xl text-sm leading-6", msg.role === "assistant" ? "bg-white/8 text-slate-100 rounded-tl-sm" : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-tr-sm")}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center"><RiRobot2Line size={14} className="text-white" /></div>
              <div className="px-4 py-3 rounded-2xl bg-white/8 flex gap-1 items-center">
                {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="p-4 border-t border-white/8">
          <div className="flex gap-3">
            <Input placeholder={t.askAnything} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} className="flex-1" />
            <Btn onClick={send} disabled={loading} className="w-10 h-10 p-0 rounded-2xl"><FiSend size={14} /></Btn>
          </div>
        </div>
      </Card>
      <div className="space-y-4 overflow-y-auto">
        <Card className="p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Tavsiya savollar</p>
          <div className="space-y-2">
            {["Kvadrat tenglamani qanday yechaman?", "React useState nima?", "Nyuton 2-qonunini tushuntir", "IELTS uchun maslahat"].map(p => (
              <button key={p} onClick={() => setInput(p)} className="w-full text-left px-3 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-all border border-white/8 hover:border-violet-400/30">
                {p}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function NotificationsPage({ t }: { t: typeof T.en }) {
  const [notes, setNotes] = useState(NOTIFICATIONS_DATA);
  const markAll = () => setNotes(n => n.map(x => ({ ...x, read: true })));
  const iconMap: Record<string, React.ReactNode> = {
    comment: <FiMessageSquare className="text-violet-400" />,
    battle: <RiSwordLine className="text-red-400" />,
    follow: <FiUser className="text-emerald-400" />,
    like: <FiHeart className="text-pink-400" />,
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <Badge color="violet" soft>{notes.filter(n => !n.read).length} yangi</Badge>
        <Btn variant="ghost" size="sm" onClick={markAll}><FiCheck size={12} /> Barchasini o'qildi</Btn>
      </div>
      {notes.map(note => (
        <Card key={note.id} onClick={() => setNotes(ns => ns.map(n => n.id === note.id ? { ...n, read: true } : n))}
          className={cx("p-4 flex items-start gap-4 cursor-pointer", !note.read && "border-violet-400/20 bg-violet-500/5")}>
          <div className="text-xl mt-0.5">{iconMap[note.type]}</div>
          <div className="flex-1">
            <p className={cx("text-sm", note.read ? "text-slate-300" : "text-white font-semibold")}>{note.text}</p>
            <p className="text-xs text-slate-500 mt-1">{note.time} oldin</p>
          </div>
          {!note.read && <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />}
        </Card>
      ))}
    </div>
  );
}

function SearchPage({ t }: { t: typeof T.en }) {
  const [query, setQuery] = useState("");
  const filtered = query ? POSTS.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.author.toLowerCase().includes(query.toLowerCase())) : [];
  const users = query ? LEADERBOARD.filter(u => u.name.toLowerCase().includes(query.toLowerCase()) || u.handle.toLowerCase().includes(query.toLowerCase())) : [];

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="relative">
        <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        <Input placeholder="O'quvchi, post yoki fan qidirish..." value={query} onChange={e => setQuery(e.target.value)} className="pl-11 h-12 text-base" />
      </div>
      {users.map(u => {
        const rank = getRank(u.xp);
        return (
          <Card key={u.handle} className="p-4 flex items-center gap-4">
            <Avatar name={u.avatar} size={44} gradient={rank.gradient} />
            <div className="flex-1">
              <p className="font-semibold text-white">{u.name}</p>
              <p className="text-sm text-slate-400">{u.handle} • {u.xp.toLocaleString()} XP</p>
            </div>
            <SubjectTag subject={u.subject} t={t} />
            <Btn size="sm" variant="secondary">Kuzatish</Btn>
          </Card>
        );
      })}
      {filtered.map(post => (
        <Card key={post.id} className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Avatar name={post.avatar} size={28} />
            <span className="text-sm text-slate-400">{post.author}</span>
            <SubjectTag subject={post.subject} t={t} />
          </div>
          <p className="font-semibold text-white">{post.title}</p>
          <p className="text-sm text-slate-400 mt-1 line-clamp-2">{post.body}</p>
        </Card>
      ))}
      {!query && (
        <div className="text-center py-16 text-slate-500">
          <FiSearch size={40} className="mx-auto mb-4 opacity-20" />
          <p>O'quvchi, post yoki fan nomini kiriting</p>
        </div>
      )}
    </div>
  );
}

function ProfilePage({ t, user, setUser }: { t: typeof T.en; user: User; setUser: (fn: (u: User) => User) => void }) {
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({ name: user.name, username: user.username || "@" + user.name.toLowerCase().replace(" ", "_"), bio: user.bio || "Full Stack Developer | O'qish va o'rgatishni yaxshi ko'raman" });
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const rank = getRank(user.xp || 2650);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUser(u => ({ ...u, avatarSrc: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUser(u => ({ ...u, coverSrc: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const saveEdit = () => {
    setUser(u => ({ ...u, name: editData.name, username: editData.username, bio: editData.bio }));
    setEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        {/* Cover */}
        <div className="h-44 relative group" style={{
          background: user.coverSrc ? `url(${user.coverSrc}) center/cover no-repeat` : "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(56,189,248,0.2), transparent 40%), linear-gradient(135deg, #17122f 0%, #26184d 50%, #0f172a 100%)"
        }}>
          <button onClick={() => coverInputRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <div className="flex items-center gap-2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-2xl">
              <FiCamera size={14} /> {t.changeCover}
            </div>
          </button>
          <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
        </div>

        <div className="-mt-14 px-6 pb-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-end gap-5">
              {/* Avatar with upload */}
              <div className="relative group">
                <Avatar name={user.name} src={user.avatarSrc} size={80} gradient={rank.gradient} />
                <div style={{ borderRadius: 22 }} className="absolute inset-0 ring-4 ring-slate-950 rounded-[inherit] overflow-hidden">
                  <button onClick={() => avatarInputRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <FiCamera size={18} className="text-white" />
                  </button>
                </div>
                <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  {editing
                    ? <Input value={editData.name} onChange={e => setEditData(d => ({ ...d, name: e.target.value }))} className="text-xl font-bold w-48" />
                    : <h2 className="font-display text-3xl font-bold text-white">{user.name}</h2>
                  }
                  <Badge color="violet" soft>{rank.name.toUpperCase()}</Badge>
                </div>
                {editing
                  ? <Input value={editData.username} onChange={e => setEditData(d => ({ ...d, username: e.target.value }))} className="mt-1 text-sm w-36" />
                  : <p className="mt-1 text-sm text-slate-400">{user.username || "@" + user.name.toLowerCase().replace(" ", "_")}</p>
                }
                {editing
                  ? <Input value={editData.bio} onChange={e => setEditData(d => ({ ...d, bio: e.target.value }))} className="mt-2 w-full max-w-xs" />
                  : <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{user.bio || "Full Stack Developer | O'qish va o'rgatishni yaxshi ko'raman"}</p>
                }
              </div>
            </div>

            <div className="flex gap-2">
              {editing ? (
                <>
                  <Btn variant="secondary" onClick={() => setEditing(false)}><FiX size={14} /> {t.cancel}</Btn>
                  <Btn onClick={saveEdit}><FiCheck size={14} /> {t.save}</Btn>
                </>
              ) : (
                <Btn onClick={() => setEditing(true)}><FiEdit2 size={14} /> {t.editProfile}</Btn>
              )}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        {[{ label: t.posts, value: 23 }, { label: t.followers, value: "1.2K" }, { label: t.following, value: 156 }, { label: "XP", value: (user.xp || 2650).toLocaleString() }].map(s => (
          <Card key={s.label} className="p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500">{s.label}</p>
            <p className="text-3xl font-black text-white mt-2">{s.value}</p>
          </Card>
        ))}
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">{t.achievements}</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {ACHIEVEMENTS_DATA.map(a => (
            <Card key={a.id} className={cx("p-4", !a.done && "opacity-70")}>
              <div className="text-2xl mb-2 text-violet-300">{a.icon}</div>
              <p className="font-semibold text-white text-sm">{a.title}</p>
              <p className="text-xs text-slate-400 mt-1">{a.desc}</p>
              <div className="mt-3 h-1.5 bg-white/8 rounded-full overflow-hidden">
                <div className={`h-full transition-all ${a.done ? "bg-emerald-400" : "bg-violet-400"}`} style={{ width: `${a.progress}%` }} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SETTINGS PAGE ────────────────────────────────────────────────────────────
function SettingsPage({ t, lang, setLang, user, setUser, theme, setTheme, onLogout }: {
  t: typeof T.en; lang: string; setLang: (l: string) => void;
  user: User; setUser: (fn: (u: User) => User) => void;
  theme: ThemeKey; setTheme: (t: ThemeKey) => void;
  onLogout: () => void;
}) {
  const [section, setSection] = useState("profile");
  const [notifs, setNotifs] = useState({ battles: true, followers: true, likes: false, comments: true });
  const [privacy, setPrivacy] = useState({ dnd: false, publicProfile: true });
  const [editData, setEditData] = useState({ name: user.name, username: user.username || "", bio: user.bio || "", city: "Toshkent" });
  const [saved, setSaved] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUser(u => ({ ...u, avatarSrc: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUser(u => ({ ...u, coverSrc: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    setUser(u => ({ ...u, name: editData.name, username: editData.username, bio: editData.bio, city: editData.city }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const sections = [
    { id: "profile", label: "Profil", icon: FiUser, desc: "Ism, rasm va bio" },
    { id: "appearance", label: t.appearance, icon: FiSliders, desc: "Mavzu va ko'rinish" },
    { id: "language", label: t.language, icon: FiGlobe, desc: "Interfeys tili" },
    { id: "notifications_s", label: t.notifications_s, icon: FiBell, desc: "Bildirishnoma sozlamalari" },
    { id: "privacy", label: t.privacy, icon: FiShield, desc: "Maxfiylik va ko'rinish" },
    { id: "security", label: t.security, icon: FiLock, desc: "Parol va xavfsizlik" },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      {/* Left panel */}
      <Card className="p-4 space-y-1 h-fit">
        <p className="text-xs uppercase tracking-widest text-slate-500 px-3 py-2">Sozlamalar bo'limlari</p>
        {sections.map(s => {
          const Icon = s.icon;
          return (
            <button key={s.id} onClick={() => setSection(s.id)} className={cx("w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all", section === s.id ? "bg-violet-500/15 border border-violet-400/20" : "hover:bg-white/5 border border-transparent")}>
              <Icon className={section === s.id ? "text-violet-400" : "text-slate-500"} size={16} />
              <div className="flex-1 min-w-0">
                <p className={cx("text-sm font-semibold", section === s.id ? "text-white" : "text-slate-300")}>{s.label}</p>
                <p className="text-xs text-slate-500 truncate">{s.desc}</p>
              </div>
              <FiChevronRight className={cx("shrink-0", section === s.id ? "text-violet-400" : "text-slate-600")} size={14} />
            </button>
          );
        })}
      </Card>

      {/* Right panel */}
      <div className="space-y-5">
        {/* PROFILE */}
        {section === "profile" && (
          <Card className="p-6 space-y-5">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiUser className="text-violet-400" /> Profil ma'lumotlari</h3>

            {/* Avatar + Cover upload */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <Avatar name={user.name} src={user.avatarSrc} size={72} />
                <button onClick={() => avatarInputRef.current?.click()} className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                  <FiCamera size={18} className="text-white" />
                </button>
                <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Profil rasmi</p>
                <div className="flex gap-2">
                  <Btn size="sm" variant="outline" onClick={() => avatarInputRef.current?.click()}><FiUpload size={12} /> {t.uploadPhoto}</Btn>
                  <Btn size="sm" variant="outline" onClick={() => coverInputRef.current?.click()}><FiImage size={12} /> {t.changeCover}</Btn>
                  <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.displayName}</label>
                <Input value={editData.name} onChange={e => setEditData(d => ({ ...d, name: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.username}</label>
                <Input value={editData.username} onChange={e => setEditData(d => ({ ...d, username: e.target.value }))} placeholder="@username" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.bio}</label>
                <textarea value={editData.bio} onChange={e => setEditData(d => ({ ...d, bio: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white/8 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400/50 resize-none h-24"
                  placeholder="O'zingiz haqingizda yozing..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.city}</label>
                <Input value={editData.city} onChange={e => setEditData(d => ({ ...d, city: e.target.value }))} placeholder="Toshkent" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Btn onClick={saveProfile} className="flex-1">
                {saved ? <><FiCheck size={14} /> Saqlandi!</> : <><FiCheck size={14} /> {t.save}</>}
              </Btn>
            </div>
          </Card>
        )}

        {/* APPEARANCE */}
        {section === "appearance" && (
          <Card className="p-6 space-y-5">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiSliders className="text-violet-400" /> {t.appearance}</h3>
            <div>
              <p className="text-sm font-medium text-slate-300 mb-3">Mavzu rangi</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {(Object.entries(THEMES) as [ThemeKey, typeof THEMES.dark][]).map(([key, th]) => {
                  const Icon = th.icon;
                  const active = theme === key;
                  return (
                    <button key={key} onClick={() => setTheme(key)}
                      className={cx("p-4 rounded-2xl border text-left transition-all", active ? "border-violet-400/60 bg-violet-500/15" : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8")}>
                      <div className="w-8 h-8 rounded-xl mb-3 flex items-center justify-center" style={{ background: th.accent + "33" }}>
                        <Icon size={16} style={{ color: th.accent }} />
                      </div>
                      <p className="text-sm font-semibold text-white">{th.label}</p>
                      {active && <div className="flex items-center gap-1 mt-1"><FiCheck size={10} className="text-violet-400" /><span className="text-xs text-violet-400">Faol</span></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preview */}
            <div className="rounded-2xl border border-white/10 p-4 space-y-2" style={{ background: THEMES[theme].card }}>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Ko'rinish namunasi</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white" style={{ background: THEMES[theme].accent }}>A</div>
                <div>
                  <p className="text-sm font-semibold text-white">AvlodX</p>
                  <p className="text-xs" style={{ color: THEMES[theme].accent }}>Faol mavzu: {THEMES[theme].label}</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* LANGUAGE */}
        {section === "language" && (
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiGlobe className="text-violet-400" /> {t.language}</h3>
            {[["uz", "🇺🇿", "O'zbek tili"], ["ru", "🇷🇺", "Русский язык"], ["en", "🇬🇧", "English"]].map(([l, flag, label]) => (
              <button key={l} onClick={() => setLang(l)} className={cx("w-full flex items-center gap-4 p-4 rounded-2xl border transition-all", lang === l ? "border-violet-400/40 bg-violet-500/15" : "border-white/10 hover:border-white/20 hover:bg-white/5")}>
                <span className="text-2xl">{flag}</span>
                <span className="text-sm font-semibold text-white flex-1 text-left">{label}</span>
                {lang === l && <FiCheck className="text-violet-400" size={16} />}
              </button>
            ))}
          </Card>
        )}

        {/* NOTIFICATIONS */}
        {section === "notifications_s" && (
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiBell className="text-violet-400" /> {t.notifications_s}</h3>
            {[
              { key: "battles", icon: <RiSwordLine />, label: "Bitva takliflari", desc: "Boshqa o'quvchilar bellashuvga taklif qilganda" },
              { key: "followers", icon: <FiUser />, label: "Yangi kuzatuvchilar", desc: "Kimdir sizni kuzata boshlaganda" },
              { key: "likes", icon: <FiHeart />, label: "Like bildirishnomalari", desc: "Sizning postingizni liked qilganda" },
              { key: "comments", icon: <FiMessageSquare />, label: "Izoh bildirishnomalari", desc: "Postingizga izoh qoldirilganda" },
            ].map(item => (
              <div key={item.key} className="flex items-start justify-between p-4 rounded-2xl bg-white/5 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-violet-400 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <Toggle value={notifs[item.key as keyof typeof notifs]} onChange={v => setNotifs(n => ({ ...n, [item.key]: v }))} />
              </div>
            ))}
          </Card>
        )}

        {/* PRIVACY */}
        {section === "privacy" && (
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiShield className="text-violet-400" /> {t.privacy}</h3>
            {[
              { key: "dnd", icon: <FiVolumeX />, label: "Bezovta qilmang", desc: "Bildirishnomalarni to'xtatib qo'yish" },
              { key: "publicProfile", icon: <FiEye />, label: "Ochiq profil", desc: "Profilingizni barcha ko'rishi mumkin" },
            ].map(item => (
              <div key={item.key} className="flex items-start justify-between p-4 rounded-2xl bg-white/5 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-violet-400 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <Toggle value={privacy[item.key as keyof typeof privacy]} onChange={v => setPrivacy(p => ({ ...p, [item.key]: v }))} />
              </div>
            ))}
          </Card>
        )}

        {/* SECURITY */}
        {section === "security" && (
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2"><FiLock className="text-violet-400" /> {t.security}</h3>
            {[
              { label: "Parolni o'zgartirish", desc: "Oxirgi marta o'zgartirilgan: 30 kun oldin", icon: <FiLock /> },
              { label: "Ikki omilli autentifikatsiya", desc: "Hisob xavfsizligini oshiring", icon: <FiShield /> },
              { label: "Faol sessiyalar", desc: "2 ta qurilmada faol", icon: <FiWifi /> },
            ].map(item => (
              <div key={item.label} className="flex items-start justify-between p-4 rounded-2xl bg-white/5">
                <div className="flex items-start gap-3">
                  <div className="text-violet-400 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <Btn size="sm" variant="outline">Boshqarish</Btn>
              </div>
            ))}
            <div className="pt-2 border-t border-white/8 space-y-3">
              <p className="text-xs uppercase tracking-widest text-slate-500">Hisob</p>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
                <div>
                  <p className="text-sm font-semibold text-white">Tizimdan chiqish</p>
                  <p className="text-xs text-slate-500 mt-0.5">{user.email || "Joriy hisob"}</p>
                </div>
                <Btn size="sm" variant="secondary" onClick={onLogout}><FiLogOut size={12} /> Chiqish</Btn>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-red-500/8 border border-red-500/15">
                <div>
                  <p className="text-sm font-semibold text-red-300">Hisobni o'chirish</p>
                  <p className="text-xs text-slate-500 mt-0.5">Barcha ma'lumotlar butunlay o'chiriladi</p>
                </div>
                <Btn size="sm" variant="danger" onClick={() => {
                  if (!confirm("Hisobingizni butunlay o'chirmoqchimisiz?")) return;
                  const accounts = loadAccounts().filter(a => a.email !== user.email);
                  saveAccounts(accounts);
                  onLogout();
                }}>O'chirish</Btn>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS = (t: typeof T.en) => [
  { key: "feed", label: t.feed, icon: FiHome },
  { key: "search", label: t.search, icon: FiSearch },
  { key: "chats", label: t.chats, icon: FiMessageSquare },
  { key: "battles", label: t.battles, icon: RiSwordLine },
  { key: "leaderboard", label: t.leaderboard, icon: FiAward },
  { key: "ai", label: t.ai, icon: RiRobot2Line },
  { key: "notifications", label: t.notifications, icon: FiBell },
  { key: "profile", label: t.profile, icon: FiUser },
  { key: "settings", label: t.settings, icon: FiSettings },
];

function SidebarLayout({ active, setActive, t, user, onLogout, theme }: {
  active: string; setActive: (p: string) => void; t: typeof T.en; user: User; onLogout: () => void; theme: ThemeKey;
}) {
  const rank = getRank(user.xp || 2650);
  const unread = NOTIFICATIONS_DATA.filter(n => !n.read).length;
  const th = THEMES[theme];

  return (
    <aside className="hidden lg:flex flex-col w-[268px] shrink-0 border-r border-white/8 backdrop-blur-xl h-screen sticky top-0" style={{ background: th.sidebar }}>
      <div className="p-5 pb-4">
        <div className="flex items-center gap-3 px-1">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-violet-500/30">A</div>
          <div><p className="font-black text-lg text-white leading-none">AvlodX</p><p className="text-xs text-slate-500 mt-0.5">{t.tagline}</p></div>
        </div>
      </div>

      <nav className="flex-1 px-3 overflow-y-auto space-y-0.5">
        {NAV_ITEMS(t).map(item => {
          const Icon = item.icon;
          return (
            <button key={item.key} onClick={() => setActive(item.key)}
              className={cx("w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all text-left relative", active === item.key ? `${th.accentBg} text-white border ${th.accentBorder}` : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent")}>
              <Icon size={16} className={active === item.key ? th.accentText : ""} />
              {item.label}
              {item.key === "notifications" && unread > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{unread}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-3">
        <div className={`rounded-2xl border ${th.accentBorder} ${th.accentBg} p-4 mb-3`}>
          <p className={`text-xs ${th.accentText} font-semibold mb-1 flex items-center gap-1`}><FiFileText size={12} /> Post yarating</p>
          <p className="text-xs text-slate-400 mb-3">Bilimingizni ulashing</p>
          <Btn size="sm" className="w-full" onClick={() => setActive("feed")}><FiPlus size={12} /> {t.createPost}</Btn>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/8">
          <Avatar name={user.name} src={user.avatarSrc} size={36} gradient={rank.gradient} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-500">{(user.xp || 2650).toLocaleString()} XP</p>
          </div>
          <button onClick={onLogout} className="text-slate-500 hover:text-red-400 transition-colors" title="Chiqish"><FiLogOut size={14} /></button>
        </div>
      </div>
    </aside>
  );
}

function BottomNavLayout({ active, setActive, t }: { active: string; setActive: (p: string) => void; t: typeof T.en }) {
  const unread = NOTIFICATIONS_DATA.filter(n => !n.read).length;
  const items = [
    { key: "feed", icon: FiHome }, { key: "search", icon: FiSearch },
    { key: "battles", icon: RiSwordLine }, { key: "chats", icon: FiMessageSquare },
    { key: "leaderboard", icon: FiAward }, { key: "ai", icon: RiRobot2Line },
    { key: "notifications", icon: FiBell }, { key: "profile", icon: FiUser },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-slate-950/90 backdrop-blur-xl border-t border-white/8 flex">
      {items.map(item => {
        const Icon = item.icon;
        return (
          <button key={item.key} onClick={() => setActive(item.key)} className={cx("flex-1 py-3 flex flex-col items-center justify-center relative transition-colors", active === item.key ? "text-violet-400" : "text-slate-600")}>
            <Icon size={18} />
            {item.key === "notifications" && unread > 0 && (
              <span className="absolute top-1.5 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold leading-none">{unread}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  // Ilova birinchi marta ochilganda saqlangan sessiyani (agar bo'lsa) o'qiymiz
  const initialSession = loadSession();
  const initialAccounts = loadAccounts();
  const initialAccount = initialSession ? initialAccounts.find(a => a.email === initialSession.email) : undefined;

  const [lang, setLang] = useState(initialSession?.lang || "uz");
  const [loggedIn, setLoggedIn] = useState(!!initialSession?.loggedIn && !!initialAccount);
  const [currentEmail, setCurrentEmail] = useState<string | null>(initialAccount?.email || null);
  const [user, setUser] = useState<User>(initialAccount?.user || { name: "Abdulloh Developer", xp: 2650, wins: 24, bio: "", username: "@abdulloh" });
  const [page, setPage] = useState("feed");
  const [theme, setTheme] = useState<ThemeKey>(() => (localStorage.getItem("avlodx-theme") as ThemeKey) || "dark");

  const t = T[lang as keyof typeof T] as typeof T.en;
  const th = THEMES[theme];

  const handleSetTheme = useCallback((tk: ThemeKey) => {
    setTheme(tk);
    localStorage.setItem("avlodx-theme", tk);
  }, []);

  // Til o'zgarganda sessiyaga yozamiz
  useEffect(() => {
    if (loggedIn && currentEmail) {
      saveSession({ loggedIn: true, email: currentEmail, lang });
    }
  }, [lang, loggedIn, currentEmail]);

  // Foydalanuvchi ma'lumotlari (ism, rasm, bio va h.k.) o'zgargan sari shu zahoti
  // JSON ko'rinishida localStorage'ga yoziladi — sahifa yangilansa ham yo'qolmaydi.
  useEffect(() => {
    if (!currentEmail) return;
    const accounts = loadAccounts();
    const idx = accounts.findIndex(a => a.email === currentEmail);
    if (idx === -1) return;
    accounts[idx] = { ...accounts[idx], user };
    saveAccounts(accounts);
  }, [user, currentEmail]);

  const handleLogin = (email: string, password: string): string | null => {
    const accounts = loadAccounts();
    // Tezkor demo kirish
    if (email === "demo@avlodx.uz") {
      const demoUser: User = { name: "Abdulloh Developer", xp: 2650, wins: 24, bio: "Full Stack Developer | O'qish va o'rgatishni yaxshi ko'raman", username: "@abdulloh", email };
      let demoAccounts = accounts;
      if (!accounts.find(a => a.email === email)) {
        demoAccounts = [...accounts, { email, password: "demo", user: demoUser }];
        saveAccounts(demoAccounts);
      }
      const acc = demoAccounts.find(a => a.email === email)!;
      setUser(acc.user);
      setCurrentEmail(email);
      setLoggedIn(true);
      saveSession({ loggedIn: true, email, lang });
      return null;
    }
    const account = accounts.find(a => a.email === email);
    if (!account) return "Bunday foydalanuvchi topilmadi. Avval ro'yxatdan o'ting.";
    if (account.password !== password) return "Parol noto'g'ri";
    setUser(account.user);
    setCurrentEmail(email);
    setLoggedIn(true);
    saveSession({ loggedIn: true, email, lang });
    return null;
  };

  const handleRegister = (name: string, email: string, password: string): string | null => {
    const accounts = loadAccounts();
    if (accounts.find(a => a.email === email)) return "Bu email allaqachon ro'yxatdan o'tgan. Tizimga kiring.";
    const newUser: User = { name, xp: 0, wins: 0, bio: "", username: "@" + name.toLowerCase().replace(/\s+/g, "_"), email };
    const newAccounts = [...accounts, { email, password, user: newUser }];
    saveAccounts(newAccounts);
    setUser(newUser);
    setCurrentEmail(email);
    setLoggedIn(true);
    saveSession({ loggedIn: true, email, lang });
    return null;
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentEmail(null);
    saveSession(null);
    setPage("feed");
  };

  const bgStyle = { background: `${th.glow}, ${th.bg}` };

  if (!loggedIn) return (
    <div className="min-h-screen text-white" style={bgStyle}>
      <LoginPage onLogin={handleLogin} onRegister={handleRegister} t={t} lang={lang} setLang={setLang} />
    </div>
  );

  const pageTitle = NAV_ITEMS(t).find(n => n.key === page)?.label || "";

  return (
    <div className="min-h-screen text-white flex transition-all duration-500" style={bgStyle}>
      <SidebarLayout active={page} setActive={setPage} t={t} user={user} onLogout={handleLogout} theme={theme} />

      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="sticky top-0 z-10 backdrop-blur-xl border-b border-white/8 px-6 py-4 flex items-center justify-between lg:px-8" style={{ background: th.sidebar }}>
          <h1 className="font-black text-xl text-white">{pageTitle}</h1>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {["uz", "ru", "en"].map(l => (
                <button key={l} onClick={() => setLang(l)} className={cx("px-2.5 py-1 rounded-lg text-xs font-bold transition-all", lang === l ? "bg-violet-500 text-white" : "bg-white/8 text-slate-400 hover:bg-white/15")}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setPage("profile")} className="shrink-0">
              <Avatar name={user.name} src={user.avatarSrc} size={32} />
            </button>
          </div>
        </div>

        <div className="p-5 lg:p-8 pb-24 lg:pb-8">
          {page === "feed" && <FeedPage t={t} user={user} />}
          {page === "search" && <SearchPage t={t} />}
          {page === "chats" && <ChatsPage t={t} />}
          {page === "battles" && <BattlePage t={t} user={user} setUser={fn => setUser(fn)} />}
          {page === "leaderboard" && <LeaderboardPage t={t} />}
          {page === "ai" && <AIPage t={t} />}
          {page === "notifications" && <NotificationsPage t={t} />}
          {page === "profile" && <ProfilePage t={t} user={user} setUser={fn => setUser(fn)} />}
          {page === "settings" && <SettingsPage t={t} lang={lang} setLang={setLang} user={user} setUser={fn => setUser(fn)} theme={theme} setTheme={handleSetTheme} onLogout={handleLogout} />}
        </div>
      </main>

      <BottomNavLayout active={page} setActive={setPage} t={t} />
    </div>
  );
}
