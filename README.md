# AvlodX 🚀

**O'quvchilar uchun ilmiy hamjamiyat | Научное сообщество | Academic Community**

## 🛠 O'rnatish / Установка / Setup

```bash
npm install
npm run dev
```

Brauzerda oching: http://localhost:5173

## ✨ Funksiyalar / Функции / Features

- 📰 **Lenta (Feed)** — Post yaratish, like, izohlar
- 🔍 **Qidirish** — O'quvchilar va postlarni qidirish
- 💬 **Chatlar** — O'zbekiston, shahar, fan bo'yicha chatlar
- ⚔️ **Bitva** — AI bilan 1v1/2v2/4v4 musobaqa
- 🏆 **Reyting** — XP bo'yicha liderboard
- 🤖 **AI Yordamchi** — Claude Sonnet bilan haqiqiy AI
- 🎖️ **Rang tizimi** — Bronza → Afsonaviy (8 daraja)
- 🌐 **3 til** — O'zbek / Русский / English
- 🔔 **Bildirishnomalar**
- 👤 **Profil** — XP progress, yutuqlar

## 🔑 Muhim

AI sahifasi ishlashi uchun Anthropic API kerak.
`src/AvlodXApp.tsx` faylida `fetch("https://api.anthropic.com/v1/messages")` 
— bu faqat Claude.ai artifact muhitida ishlaydi.

Mustaqil ishlatish uchun backend server kerak (Express.js yoki Next.js).

## 📦 Texnologiyalar

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React (ikonalar)

## 🗂 Loyiha tuzilmasi

```
src/
  AvlodXApp.tsx   ← Asosiy komponent (barcha sahifalar)
  App.tsx         ← Entry point
  main.tsx        ← React mount
  index.css       ← Global stillar
```
