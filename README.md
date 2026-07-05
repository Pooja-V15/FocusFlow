<div align="center">

⚡ FocusFlow
Focus Better. Study Smarter.
FocusFlow is an AI-powered productivity and study planner for students, professionals, and creators who want a calmer way to plan, focus, measure progress, and build consistent habits.

[![Version\]\(https://img.shields.io/badge/version-1.0.0-7E8BFF.svg)](package.json)









</div>

Table of Contents
Project Overview
Key Features
Screenshots
Tech Stack
Folder Structure
Installation Guide
Environment Variables
Usage Guide
Application Workflow
Feature Highlights
UI/UX Design Philosophy
Performance Optimizations
Security
Future Roadmap
Contributing
License
Acknowledgements
Contact
Star the Repository
Project Overview
FocusFlow is a full-stack productivity and study planning application designed to bring tasks, schedules, focus sessions, analytics, and motivation into one beautiful workspace. It combines the structure of a task manager, the discipline of a Pomodoro timer, the clarity of an analytics dashboard, and the encouragement of a gamified habit system.
The project was built to solve a common problem: modern work is fragmented. Students jump between notes, calendars, timers, reminders, assignments, and progress trackers. Professionals and creators face a similar challenge with deadlines, recurring responsibilities, deep work sessions, and personal goals. FocusFlow brings these pieces together so users can understand what matters, plan their day, focus without friction, and see progress over time.
FocusFlow is for:
Students preparing for exams, assignments, projects, and revision cycles
Professionals managing deep work, recurring tasks, meetings, and personal goals
Creators balancing planning, execution, learning, and consistency
Anyone who wants a premium productivity system with less visual clutter and more momentum
FocusFlow is not just a to-do list. It is a focused operating system for your day.

The application includes a polished responsive frontend, authentication-ready backend architecture, MongoDB data models, protected API routes, PWA support, dark mode, and a design system built around calm focus. It is suitable for portfolio use, hackathon demos, open-source learning, and continued product development.
Key Features
Productivity
Centralized dashboard with daily overview, focus score, study hours, completed tasks, pending tasks, and upcoming sessions
Motivational quote banner and AI productivity suggestions
Weekly and monthly progress summaries
Fast navigation between dashboard, planner, focus mode, tasks, analytics, profile, and settings
Task Management
Create, edit, delete, filter, and sort tasks
Task categories, labels, priorities, due dates, and reminders
Checklist-style progress tracking
Attachment-ready UI
Completion progress bars and satisfying visual feedback
Focus Timer
Pomodoro presets for 25/5 and 50/10
Custom timer option
Start, pause, resume, and reset controls
Ambient sound selection for Rain, Forest, Cafe, Ocean, and Lofi-style focus environments
Session history and browser notification support
Planner
Daily, weekly, and monthly planning views
Calendar-style planning layout
Time blocking with drag-and-drop interactions
Priority colors, notes, recurring tasks, deadline reminders, and schedule auto-save behavior
Analytics
Productivity charts powered by Chart.js
Study hours, focus score, task completion, and goal progress tracking
Focus heatmap
Achievement charts and export-ready report flow
Gamification
XP points, coins, badges, achievements, levels, streaks, and leaderboard-ready backend routes
Daily challenges and weekly goals concept
Reward-oriented habit loops that make consistency visible
AI Features
AI study planner endpoint
AI task prioritization endpoint
AI productivity suggestion endpoint
AI daily schedule and weekly planner structure
Smart notification-ready architecture
Notifications
Upcoming task reminders
Pomodoro completion notifications
Deadline alerts
Daily goal reminders
Achievement unlock messaging
Profile Management
Profile picture-ready UI
Bio, streaks, XP, coins, badges, and achievements
Account settings, password change flow, language preference, notifications, and dark mode controls
Accessibility
Semantic page structure
Clear navigation
Strong contrast-focused design tokens
Keyboard shortcut section
Responsive layouts that adapt across desktop, tablet, and mobile
Dark Mode
Persistent theme preference using local storage
Dark mode styles for cards, sidebars, forms, panels, and dashboard surfaces
Subtle color adjustments for premium low-light usage
Responsive Design
Mobile-friendly layouts
Collapsible sidebar behavior
Fluid grids and adaptive cards
Touch-friendly controls and buttons
Offline Support
PWA manifest
Service worker cache setup
Offline-ready static frontend shell
Cloud Sync
Express API and MongoDB models are structured for cloud-backed task, planner, focus, analytics, profile, notification, achievement, and settings sync.
Screenshots
Replace these placeholders with real screenshots after deploying or capturing the UI.

Landing Page

Dashboard

Planner

Focus Timer

Analytics

Profile

Dark Mode

Tech Stack
Layer	Technology	Purpose
Frontend	HTML5	Semantic page structure
Styling	CSS3, Bootstrap 5	Responsive layouts, components, utility classes
Interactivity	JavaScript ES6	Theme handling, timer logic, drag and drop, UI actions
Animation	Animate.css, AOS	Smooth entrance animations and micro-interactions
Icons	Font Awesome	Consistent iconography
Charts	Chart.js	Productivity, task, and analytics visualizations
Backend	Node.js, Express.js	REST API, middleware, route handling
Database	MongoDB, Mongoose	Flexible document data modeling
Authentication	JWT, bcryptjs	Protected routes and password hashing
Security	Helmet, CORS	Secure headers and API access control
Deployment	Vercel, Render, Railway, MongoDB Atlas	Production hosting options
PWA	Manifest, Service Worker	Installable and offline-ready frontend shell

Folder Structure
FocusFlow/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── planner.html
├── focus.html
├── tasks.html
├── analytics.html
├── profile.html
├── settings.html
├── manifest.json
├── sw.js
├── package.json
├── README.md
├── .env.example
├── assets/
│   └── icon.svg
├── images/
│   └── focusflow-preview.png
├── css/
│   ├── style.css
│   ├── dashboard.css
│   ├── planner.css
│   ├── focus.css
│   ├── analytics.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── auth.js
│   ├── dashboard.js
│   ├── planner.js
│   ├── focus.js
│   └── analytics.js
└── server/
    ├── server.js
    ├── config/
    │   └── db.js
    ├── middleware/
    │   └── auth.js
    ├── controllers/
    │   ├── authController.js
    │   ├── crudController.js
    │   └── aiController.js
    ├── models/
    │   ├── User.js
    │   ├── Task.js
    │   ├── Planner.js
    │   ├── Session.js
    │   ├── Achievement.js
    │   ├── Notification.js
    │   ├── Settings.js
    │   └── Analytics.js
    └── routes/
        ├── authRoutes.js
        ├── tasksRoutes.js
        ├── plannerRoutes.js
        ├── sessionRoutes.js
        ├── analyticsRoutes.js
        ├── profileRoutes.js
        ├── notificationRoutes.js
        ├── achievementRoutes.js
        ├── settingsRoutes.js
        └── aiRoutes.js
Installation Guide
1. Clone the repository
git clone https://github.com/your-username/focusflow.git
cd focusflow
2. Install backend dependencies
npm install
3. Configure environment variables
Create a .env file in the project root:
cp .env.example .env
Update the values with your local or hosted credentials.
4. Set up MongoDB
You can use either a local MongoDB instance or MongoDB Atlas.
Local MongoDB example:
mongodb://127.0.0.1:27017/focusflow
MongoDB Atlas example:
mongodb+srv://username:password@cluster.mongodb.net/focusflow
5. Run the backend development server
npm run dev
The API will start on:
http://localhost:5000
Health check:
GET http://localhost:5000/api/health
6. Run the frontend
Because the frontend is built with HTML, CSS, and JavaScript, you can open index.html directly in a browser.
For a local static server, you can also use:
npx serve .
Then open the provided local URL in your browser.
7. Production deployment
Recommended deployment setup:
Deploy the frontend to Vercel, Netlify, or GitHub Pages
Deploy the backend to Render, Railway, Fly.io, or a Node-compatible cloud host
Use MongoDB Atlas for the production database
Set CLIENT_URL to the deployed frontend URL
Set JWT_SECRET to a long secure random string
Environment Variables
Sample .env.example:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/focusflow
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
Variable	Description
PORT	Port used by the Express server
MONGO_URI	MongoDB connection string used by the current server config
JWT_SECRET	Secret key used for signing JSON Web Tokens
CLIENT_URL	Allowed frontend origin for production CORS
OPENAI_API_KEY	Placeholder for future AI provider integration
GOOGLE_CLIENT_ID	Placeholder for Google OAuth login
GOOGLE_CLIENT_SECRET	Placeholder for Google OAuth login

Keep production secrets out of Git. Commit .env.example, never .env.

Usage Guide
After launching FocusFlow, users can start from the landing page and move into the app demo or authentication flow.
Create an account using the registration screen.
Log in with email and password.
Open the dashboard to see today's date, focus score, study hours, completed tasks, pending tasks, upcoming sessions, weekly progress, and AI suggestions.
Add tasks with priority, category, due date, checklist progress, and labels.
Plan time blocks in the planner using daily, weekly, or monthly views.
Start focus sessions with Pomodoro presets or custom durations.
Review analytics to understand productivity trends, focus heatmaps, task completion, and achievements.
Update your profile with bio, streaks, XP, coins, and badges.
Adjust settings for dark mode, notifications, smart reminders, language, shortcuts, and security.
The frontend includes a graceful demo-mode experience if the backend API is offline, making it easy to explore the interface during development or portfolio review.
Application Workflow
Register
   ↓
Login
   ↓
Dashboard overview
   ↓
Create tasks and set priorities
   ↓
Schedule time blocks in Planner
   ↓
Start Pomodoro Focus Session
   ↓
Complete tasks and sessions
   ↓
Track Analytics
   ↓
Earn XP, coins, streaks, and badges
   ↓
Complete goals and improve consistency
This workflow is intentionally simple. FocusFlow reduces the distance between planning and doing, then closes the loop with analytics and rewards.
Feature Highlights
AI Study Planner
FocusFlow includes API endpoints for generating daily and weekly study schedules. The current implementation returns structured planning blocks that can be extended with a real AI provider. This architecture gives developers a clean foundation for integrating OpenAI, custom models, or rule-based scheduling.
Smart Task Prioritization
The AI prioritization endpoint accepts tasks and returns ranked items with reasoning. In a production version, this can consider deadlines, estimated effort, user energy patterns, task dependencies, and historical productivity data.
Pomodoro Focus Mode
The focus timer supports popular productivity intervals and includes session history, notification prompts, ambient sound selection, and a premium timer interface. It is designed to make starting a deep work session feel immediate and rewarding.
Productivity Analytics
Analytics turns user activity into visible progress. FocusFlow includes charts for weekly progress, monthly productivity, task completion, study hours, focus score, and heatmaps. These insights help users understand when they are improving and where their workflow needs adjustment.
Gamified Motivation
XP, coins, badges, levels, streaks, and leaderboards transform consistency into a visible achievement system. The goal is not to make productivity noisy. The goal is to make progress feel earned, encouraging, and easy to return to.
PWA and Offline Shell
FocusFlow includes a manifest and service worker so the static frontend can behave like an installable app. This gives the project a strong foundation for offline-first improvements, cached data, and eventual local database support.
UI/UX Design Philosophy
FocusFlow is designed to feel calm, premium, and focused. The interface uses a modern visual language with glassmorphism, soft gradients, rounded surfaces, subtle shadows, and micro-interactions. The result is a productivity tool that feels polished without becoming distracting.
The design direction is guided by:
Apple-inspired simplicity - clean hierarchy, generous spacing, and clear interaction points
Glassmorphism - translucent panels and soft layered depth
Premium typography - strong headings, readable body text, and consistent weight usage
Modern gradients - focused use of color for emphasis, not noise
Micro-interactions - hover states, animated cards, feedback toasts, and smooth transitions
Responsive layouts - desktop dashboards, tablet-friendly grids, and mobile-first adaptation
Accessibility - readable contrast, semantic structure, and predictable navigation
FocusFlow aims to feel more like a thoughtfully designed SaaS product than a basic student project. Every screen is built around clarity, momentum, and reduced cognitive load.
Performance Optimizations
FocusFlow is intentionally lightweight. The frontend uses static HTML, CSS, and JavaScript, which keeps the interface fast and easy to deploy. Shared styles and scripts reduce duplication, while page-specific files keep concerns separated.
Current optimization choices include:
Reusable CSS design tokens
Separate page-level CSS files
Shared JavaScript utilities
Lightweight static frontend architecture
Optimized local preview image
Efficient Chart.js usage
Service worker caching for core pages
Minimal backend middleware stack
Clean REST route organization
Mongoose schemas designed around practical query patterns
Future improvements can include image lazy loading, route-based bundling, frontend build tooling, CDN-hosted assets, API response caching, and offline database synchronization.
Security
FocusFlow includes a backend structure designed around secure application patterns.
Security practices include:
JWT authentication for protected API routes
bcryptjs password hashing before storing credentials
Protected middleware for tasks, planner, focus sessions, analytics, profile, notifications, achievements, settings, and AI routes
Helmet for safer HTTP headers
CORS configuration for frontend-backend origin control
Input requirement checks during registration and login
Environment variables for secrets and deployment-specific configuration
No committed production secrets
Recommended production hardening:
Add schema-level validation for every API payload
Add rate limiting for authentication routes
Use secure cookies if moving tokens out of local storage
Add refresh token rotation
Add centralized request validation with a library such as Zod or Joi
Add audit logging for account and security events
Future Roadmap

AI chat assistant for study guidance and productivity coaching

Calendar sync with Google Calendar and Outlook

Voice commands for task creation and timer control

Team collaboration spaces for study groups

Real-time sync with WebSockets

Offline database with IndexedDB

Native mobile app for iOS and Android

Desktop app using Electron or Tauri

Wearable integration for focus reminders and streaks

Advanced report exports with PDF generation

Theme marketplace and unlockable visual styles

Deep analytics for energy patterns and focus windows

Recurring task templates

Public leaderboard and private accountability groups

AI time estimation based on task history
Contributing
Contributions are welcome. FocusFlow is a strong foundation for learning, extending, and polishing a full-stack productivity product.
How to contribute
Fork the repository.
Create a feature branch:
git checkout -b feature/your-feature-name
Make your changes.
Run syntax checks and test the app locally.
Commit with a clear message:
git commit -m "Add planner recurring task support"
Push your branch:
git push origin feature/your-feature-name
Open a pull request with a clear description.
Contribution ideas
Improve form validation
Add real AI provider integration
Build screenshot assets
Add unit and integration tests
Improve accessibility coverage
Add GitHub Actions workflow
Expand analytics endpoints
Add OAuth login
Create a production deployment guide
Please keep pull requests focused, documented, and aligned with the existing design system.
License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project for personal, educational, and commercial purposes. If you use FocusFlow as a foundation for your own work, attribution is appreciated.
Acknowledgements
FocusFlow is inspired by the best qualities of modern productivity tools: the calm structure of Notion, the task clarity of Todoist, the scheduling mindset of Google Calendar, the focus rituals of Pomodoro apps, and the habit-building motivation of gamified study tools.
It is not a clone of any single product. FocusFlow has its own visual identity, architecture, workflows, and implementation choices.
Special thanks to the open-source ecosystem behind:
Bootstrap
Chart.js
Font Awesome
Animate.css
AOS
Express
MongoDB
Mongoose
Node.js
Contact
Use the placeholders below and replace them with your real links before publishing.
Platform	Link
GitHub	https://github.com/your-username
LinkedIn	https://linkedin.com/in/your-profile
Portfolio	https://your-portfolio.com
Email	your.email@example.com

Star the Repository
If FocusFlow helped you learn, build, study, or ship faster, consider starring the repository.
It helps the project grow, makes it easier for others to discover, and keeps the momentum going.
<div align="center">

⭐ Star FocusFlow and build a better focus system.
Focus Better. Study Smarter.
</div>
