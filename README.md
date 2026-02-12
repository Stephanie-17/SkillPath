# SkillPath

**Learning, without the guesswork.**

SkillPath is a decision-making and planning platform that helps people choose the right skills to learn, compare learning options, and track progress toward real outcomes — without overwhelm, hype, or wasted time.

---

## 🚀 What Is SkillPath?

SkillPath is **not** an online course platform.

Instead of hosting content, SkillPath focuses on **clarity**:

* What skill should I learn?
* Which learning option is best for me?
* Am I actually making progress?

It acts like a **map for skill-based learning**, helping users plan and follow a structured learning journey.

---

## 🎯 Problem SkillPath Solves

Modern learners face:

* Too many courses
* Confusing marketing claims
* No clear way to compare options
* Poor visibility into progress

Most platforms optimize for selling courses — SkillPath optimizes for **user outcomes**.

---

## 🧠 Core Concept

SkillPath is built around four core layers:

1. **Skills** – Curated, platform-controlled skills (e.g. Web Development, Data Analysis)
2. **Courses** – Comparable learning options across platforms
3. **Learning Paths** – User-defined plans built from skills
4. **Progress Tracking** – Visibility into effort and completion

Each layer exists to reduce decision fatigue and increase follow-through.

---

## 👥 Who It’s For

* Students exploring career skills
* Career switchers reskilling efficiently
* Self-learners who want structure

All users share one thing: limited time and a need for clarity.

---

## ✨ Key Features

* 🔍 **Skill Explorer** – Browse curated skills with clear descriptions and outcomes
* 📊 **Course Comparison** – Compare cost, duration, level, and format
* 🧭 **Learning Paths** – Build structured plans tied to goals
* 📈 **Progress Tracking** – Track completion and momentum over time
* 🔐 **User Dashboard** – Personalized paths and progress

---

## 🛠️ Tech Stack

* **Frontend:** Next.js
* **Backend / Database:** Supabase
* **Auth:** Supabase Authentication
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

This stack was chosen for fast iteration, scalability, and real-world production patterns.

---

## 🧱 Architecture Overview

* Skills and courses are **platform-controlled data** (read-only for users)
* Learning paths and progress are **user-generated**
* Authentication gates dashboards and user data
* Relational data links skills → courses → learning paths → progress

---

## 🧪 MVP Scope

### Included

* Skill discovery
* Course comparison
* Learning path creation
* Progress tracking
* User authentication
* Dashboard

### Excluded (for now)

* Course hosting
* Certifications
* Hiring integration
* Social features

---

## 📈 Future Enhancements

* Personalized recommendations
* Skill demand insights
* Analytics dashboards
* Community accountability
* Employer-aligned paths

---

## 💡 Guiding Principles

* Clarity over quantity
* Outcomes over hype
* Structure over motivation
* Learning as a finite, visible journey

---

## 📦 Getting Started (Local Setup)

```bash
# install dependencies
npm install

# run development server
npm run dev
```

Create a `.env.local` file with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## 📄 License

This project is built as a learning-focused MVP and portfolio project.

---

## 🙌 A Note

SkillPath is designed to demonstrate **product thinking + full-stack development**, not just feature implementation. Every decision favors clarity, simplicity, and real user value.


