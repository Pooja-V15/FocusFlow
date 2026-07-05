# FocusFlow

FocusFlow is a premium AI productivity and study planner built with HTML, CSS, JavaScript, Bootstrap, Chart.js, Node.js, Express, MongoDB, and JWT authentication.

## Features

- Landing page with animated SaaS-style hero, pricing, testimonials, FAQ, and CTA
- Login and registration screens with validation, Google-login-ready UI, remember me, and password strength meter
- Dashboard with focus score, study hours, completed tasks, pending tasks, sessions, quote banner, and charts
- Planner with daily, weekly, monthly controls, calendar, notes, recurring blocks, labels, and drag-and-drop schedule
- Focus mode with Pomodoro presets, custom timer, fullscreen action, ambient sounds, notifications, and history
- Task management with priorities, categories, attachments, filters, search, sorting, checklist, and progress
- Analytics with productivity charts, task completion, heatmap, achievements, goals, and PDF export action
- Profile, settings, gamification, PWA manifest, offline service worker, and browser notifications
- Express API with auth, tasks, planner, focus sessions, analytics, profile, notifications, achievements, leaderboard, settings, and AI endpoints

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create environment config:

```bash
cp .env.example .env
```

3. Start MongoDB locally or set `MONGO_URI` to a hosted MongoDB database.

4. Start the backend:

```bash
npm run dev
```

5. Open `index.html` directly in a browser, or serve the folder with any static server.

The frontend falls back to demo mode if the API is offline, so the UI remains explorable without a running backend.

## API Overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `POST /api/auth/refresh-token`
- `GET/POST/PUT/DELETE /api/tasks`
- `GET/POST/PUT/DELETE /api/planner`
- `GET/POST/PUT/DELETE /api/focus-sessions`
- `GET/POST/PUT/DELETE /api/analytics`
- `GET/PUT /api/profile`
- `GET/POST/DELETE /api/notifications`
- `GET/POST/DELETE /api/achievements`
- `GET /api/achievements/leaderboard`
- `GET/PUT /api/settings`
- `POST /api/ai/daily-schedule`
- `POST /api/ai/prioritize`
- `GET /api/ai/suggestions`

## Deployment

- Frontend: Vercel, Netlify, GitHub Pages, or any static host
- Backend: Render, Railway, Fly.io, or any Node host
- Database: MongoDB Atlas
