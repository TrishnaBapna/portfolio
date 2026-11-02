import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const resumeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Trishna Bapna - Resume</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 18mm 18mm 18mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.45;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
      background: #ffffff;
    }
    h1 {
      margin: 0 0 2px 0;
      font-size: 20pt;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .header-sub {
      font-size: 11.5pt;
      font-weight: 600;
      color: #6366f1;
      margin-bottom: 6px;
    }
    .header-meta {
      font-size: 9pt;
      color: #475569;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1.5px solid #e2e8f0;
    }
    .header-meta a {
      color: #4338ca;
      text-decoration: none;
    }
    .app-for {
      background: #f1f5f9;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: 500;
      color: #334155;
      margin-bottom: 14px;
      border-left: 3px solid #6366f1;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 3px;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    p {
      margin: 0 0 8px 0;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .item-title {
      font-weight: 700;
      color: #0f172a;
      font-size: 10.5pt;
    }
    .item-subtitle {
      font-weight: 500;
      color: #475569;
      font-size: 9.5pt;
    }
    .item-date {
      font-size: 9pt;
      color: #64748b;
      font-weight: 500;
    }
    ul {
      margin: 4px 0 10px 18px;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
      font-size: 9.5pt;
      color: #334155;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 160px 1fr;
      row-gap: 6px;
      font-size: 9.5pt;
      margin-bottom: 8px;
    }
    .skills-cat {
      font-weight: 600;
      color: #0f172a;
    }
    .skills-val {
      color: #334155;
    }
    .skills-note {
      font-size: 8.5pt;
      color: #64748b;
      font-style: italic;
      margin-top: 4px;
      background: #f8fafc;
      padding: 6px 8px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1>Trishna Bapna</h1>
  <div class="header-sub">B.Tech Student, Artificial Intelligence & Data Science</div>
  <div class="header-meta">
    <span><strong>Email:</strong> <a href="mailto:trishna26ai@student.pillai.edu.in">trishna26ai@student.pillai.edu.in</a></span>
    <span><strong>GitHub:</strong> <a href="https://github.com/TrishnaBapna">github.com/TrishnaBapna</a></span>
    <span><strong>College:</strong> Pillai University, New Panvel</span>
  </div>

  <div class="app-for">
    <strong>Applying for:</strong> MES Department of Computer Engineering, Winter Internship Programme 2026
  </div>

  <div class="section-title">Professional Summary</div>
  <p style="font-size: 9.5pt; color: #334155; text-align: justify;">
    First-year B.Tech student in Artificial Intelligence and Data Science, aspiring to work in software engineering, full stack web development, artificial intelligence and generative AI, with a focus on building practical software solutions. Hands-on exposure to AI-assisted software development through two real-world projects in healthcare and educational technology, actively improving programming fundamentals and technical understanding. Seeking a winter internship to learn under structured guidance and strengthen core engineering skills.
  </p>

  <div class="section-title">Education</div>
  <div class="item-header">
    <span class="item-title">Bachelor of Technology (B.Tech) in AI & Data Science</span>
    <span class="item-date">2026 – Present</span>
  </div>
  <div class="item-subtitle">Pillai University, New Panvel &bull; First Year (2026–27)</div>

  <div class="section-title">Projects (AI-Assisted Development)</div>

  <div style="margin-bottom: 10px;">
    <div class="item-header">
      <span class="item-title">SAKSHAM 3.0 <span style="font-weight: 400; color: #64748b;">| Healthcare Technology / Assistive Software</span></span>
      <span class="item-date"><a href="https://saksham-rho-six.vercel.app/" style="color: #4338ca; text-decoration: none;">Live Demo</a> &bull; <a href="https://github.com/TrishnaBapna/Saksham" style="color: #4338ca; text-decoration: none;">GitHub</a></span>
    </div>
    <ul>
      <li>Software-based assistive healthcare ecosystem focused on patient needs, personalized support and digital care, designed for Parkinson's patients, caregivers, and attending doctors.</li>
      <li>Implemented patient-focused features including a voice-first, multilingual interface with large, tremor-friendly controls, daily routine support, and distinct caregiver and doctor views.</li>
      <li>Engineered as a Progressive Web App (PWA) with Supabase (PostgreSQL) backend and offline-first local synchronization.</li>
      <li>Developed with an AI-assisted workflow, iterating on UX and motor-assistive features to improve accessibility.</li>
    </ul>
  </div>

  <div style="margin-bottom: 10px;">
    <div class="item-header">
      <span class="item-title">FOCUSMATE <span style="font-weight: 400; color: #64748b;">| Student Productivity / EdTech</span></span>
      <span class="item-date"><a href="https://focus-mate-seven.vercel.app" style="color: #4338ca; text-decoration: none;">Live Demo</a> &bull; Active Development</span>
    </div>
    <ul>
      <li>Student productivity application built with an AI-assisted coding workflow using React, TypeScript, Firebase and Firestore.</li>
      <li>Implemented features include a focus timer (Pomodoro & stopwatch) with session tracking and study analytics, subjects with daily goals and progress, and tasks with exam countdowns.</li>
      <li>Engineered notes linked to subjects (typed, handwritten, voice, and scanned), plus AI-assisted learning tools including summaries, quizzes, and flashcards.</li>
    </ul>
  </div>

  <div class="section-title">Technical Skills</div>
  <div class="skills-grid">
    <div class="skills-cat">Development Tools:</div>
    <div class="skills-val">Google Antigravity, Visual Studio Code, Git, GitHub</div>
    <div class="skills-cat">Applied in Projects:</div>
    <div class="skills-val">React, JavaScript, TypeScript, Firebase, Firestore, HTML5, CSS3, Supabase</div>
    <div class="skills-cat">Currently Learning:</div>
    <div class="skills-val">Python programming, JavaScript fundamentals, React development, TypeScript, backend development, AI and LLM concepts</div>
  </div>
  <div class="skills-note">
    * Note: Project technologies above were applied with AI assistance; actively building independent programming proficiency.
  </div>

  <div class="section-title">Certifications</div>
  <div class="item-header">
    <span class="item-title">KLiC Python Certification</span>
    <span class="item-date">MKCL / KLiC Academy</span>
  </div>

  <div class="section-title">Areas of Interest</div>
  <p style="font-size: 9pt; color: #334155; margin-top: 4px;">
    Software Development &bull; Full Stack Web Development &bull; Artificial Intelligence &bull; Generative AI &bull; Healthcare Technology &bull; Educational Technology &bull; Innovation & Hackathons
  </p>
</body>
</html>
`;

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(resumeHtml, { waitUntil: 'load' });
  const outPath = path.resolve('portfolio/public/documents/Trishna_Bapna_Resume.pdf');
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
  });
  await browser.close();
  console.log('Resume PDF generated at:', outPath);
}

run().catch(console.error);
