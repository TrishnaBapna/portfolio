# Trishna Bapna — Personal Developer Portfolio

> **Aspiring Software Developer | AI & Data Science Student**  
> Pillai University, New Panvel • Academic Year 2026–Present

---

## 🌟 Overview

A modern, minimal editorial portfolio engineered to present Trishna Bapna's engineering explorations authentically. Specifically designed for college internship coordinators, faculty evaluators, and recruiters.

- **Design Philosophy:** Minimal editorial aesthetic with subtle glassmorphism, deep navy background (`#05070D`), soft lavender/purple accents (`#C084FC`), and clean typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Authentic Representation:** Accurately highlights first-year B.Tech journey at Pillai University and an AI-assisted development workflow (using Google Antigravity), without exaggerating experience or displaying fake skill percentage bars.
- **Key Real-World Projects:**
  - **Saksham 3.0** ([Live PWA](https://saksham-rho-six.vercel.app/) • [GitHub](https://github.com/TrishnaBapna/Saksham)): Tremor-resilient, voice-first assistive healthcare ecosystem for Parkinson's patients, caregivers, and doctors.
  - **FocusMate** ([Live Demo](https://focus-mate-seven.vercel.app) • [GitHub](https://github.com/TrishnaBapna/focus-mate)): Student productivity & study workspace with Pomodoro sessions, subject goals, and weak-topic tracking.
- **Embedded Resume:** ATS-friendly, downloadable PDF (`/documents/Trishna_Bapna_Resume.pdf`) and Word DOCX, alongside an in-app interactive modal viewer.
- **1-Click Contact:** Email copy feedback (`trishna26ai@student.pillai.edu.in`) and functional inquiry form.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 (TypeScript)
- **Bundler:** Vite 5 (ESM Build Pipeline)
- **Styling:** Tailwind CSS with custom glassmorphism utilities & CSS variables
- **Icons:** Lightweight, self-contained SVG icon system
- **Deployment Target:** Vercel

---

## 📁 Project Architecture

```text
portfolio/
├── index.html                   # SEO tags, OpenGraph metadata, Google Fonts
├── package.json                 # Dependencies & build scripts
├── vite.config.ts               # Bundling & relative base path configuration
├── tailwind.config.js           # Deep navy & lavender palette
├── vercel.json                  # Vercel deployment routing configuration
├── public/
│   ├── favicon.svg              # Brand monogram favicon
│   ├── images/
│   │   ├── trishna_portrait.jpg # Verified student portrait
│   │   ├── saksham_preview.png  # Saksham 3.0 interface mockup
│   │   └── focusmate_preview.png# FocusMate interface mockup
│   └── documents/
│       ├── Trishna_Bapna_Resume.pdf  # Verified ATS-formatted PDF
│       └── Trishna_Bapna_Resume.docx # Original official document
└── src/
    ├── data/
    │   └── portfolioData.ts     # ⭐ SINGLE SOURCE OF TRUTH (Edit your data here!)
    ├── types/                   # TypeScript interfaces
    ├── components/
    │   ├── layout/              # Navbar & Footer
    │   ├── hero/                # Hero greeting, portrait & CTAs
    │   ├── about/               # Academic narrative & philosophy
    │   ├── projects/            # Project cards & secondary drawer
    │   ├── skills/              # 3-tier categorized skill matrix
    │   ├── education/           # Pillai University & KLiC Python cert
    │   ├── journey/             # 5-stage progression timeline
    │   ├── contact/             # Contact form, email copy & ResumeModal
    │   └── ui/                  # Icons, Toast, GlassBadge
    ├── App.tsx                  # Root layout orchestration
    └── main.tsx                 # React DOM mount point
```

---

## ⚡ How to Update Content in Seconds

To add new projects, update skills, or modify your bio, simply open:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

Every text string, project link, feature list, and certification is driven by this single file. No need to touch component markup.

---

## 🚀 Local Development

```bash
# Navigate to the portfolio folder
cd portfolio

# Start local development server
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
npm run build
```
Generates the production assets inside `portfolio/dist`.

---

## 🌐 Deploying to Vercel

1. Log in to your Vercel account:
```bash
npx vercel login
```
2. Deploy to production:
```bash
npx vercel --prod
```
Or push this folder to your GitHub account (`github.com/TrishnaBapna`) and import the repository directly on [vercel.com](https://vercel.com).
