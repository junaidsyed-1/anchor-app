# 🟢 Phase 0 — Foundation (DONE / IN PROGRESS)
    - Define MVP scope - Done
    - Draw wireframe (Dashboard, Calendar, Rules) - Done
    - Create Git repository - Done
    - Setup Next.js project - Done
    - Setup Tailwind CSS - Done
    - Create Supabase project - Done
    - Setup Supabase client - Done
    - Build static Dashboard UI - Done
    - Anchor Card 
    - Daily Task Card
    - Bottom Navigation

# 🟡 Phase 1 — Authentication (Weekend Session)
    - Goal: Protect the app behind login
    - Setup Supabase Auth (email + password)
    - Create Login / Signup page
    - Handle auth state (logged in / logged out)
    - Redirect unauthenticated users to login
    - Logout functionality
    - Store user session securely
    - No database writes yet. Auth only.

# 🟡 Phase 2 — Core Data Models
    - Goal: Store truth, not productivity
    - Create daily_anchor table
    - user_id
    - date
    - completed (boolean)
    - note (optional, max 120 chars)
    - Create daily_tasks table
    - user_id
    - date
    - title
    - status (done / not_done)
    - Enable Row Level Security (RLS)
    - Allow users to access only their own data

# 🟡 Phase 3 — Anchor Check-in Logic
    - Goal: One honest check-in per day
    - Save anchor check-in to database
    - Allow only one check-in per day
    - Edit same-day entry (overwrite)
    - Show today’s anchor state on Dashboard
    - Handle missed days gracefully (no streak punishment)

# 🟡 Phase 4 — One Daily Task Logic
    - Goal: One task, no overload
    - Create / update daily task
    - Enforce one task per day
    - Mark task as done / not done
    - Persist task state
    - Show today’s task on Dashboard

# 🟡 Phase 5 — Calendar View
    - Goal: Visual honesty, not analytics
    - Build Calendar page
    - Month navigation
    - Show per-day:
    - Anchor ✔ / ✖
    - Task ✔ / ✖
    - Read-only history (no edits from calendar)
    - Highlight today

# 🟡 Phase 6 — Rules Page
    - Goal: Identity > Motivation
    - Create Rules page UI
    - Store rules as user-editable text
    - Persist rules in database
    - Simple, calm typography
    - No formatting distractions

# 🔵 Phase 7 — UI Polish (Later)
    - Improve spacing & typography
    - Add subtle hover states
    - Mobile-first refinements
    - Dark mode polish (default)

# 🔵 Phase 8 — Quality & Stability
    - Error handling
    - Loading states
    - Empty states
    - Basic accessibility
    - Code cleanup & refactors

# 🟣 Phase 9 — Future / Monetization (NOT NOW)
    - Paid tiers (limit features)
    - Advanced insights
    - Data export
    - AI reflections
    - Streak analytics (optional, careful)
    - Public landing page
