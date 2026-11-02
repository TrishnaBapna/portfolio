import { chromium } from '@playwright/test';
import path from 'path';

const sakshamMockupHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 720px;
      background: #090d16;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #f8fafc;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .topbar {
      height: 60px;
      background: #0f172a;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 19px;
      font-weight: 700;
      color: #38bdf8;
    }
    .badge {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: #38bdf8;
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 9999px;
      font-weight: 600;
    }
    .role-indicator {
      display: flex;
      gap: 8px;
    }
    .role-btn {
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
    }
    .role-active {
      background: #2563eb;
      color: white;
    }
    .role-inactive {
      background: rgba(255,255,255,0.05);
      color: #94a3b8;
    }
    .main {
      flex: 1;
      padding: 28px;
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 24px;
    }
    .panel {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .routine-title {
      font-size: 16px;
      font-weight: 600;
      color: #cbd5e1;
      display: flex;
      justify-content: space-between;
    }
    .routine-item {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      padding: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .voice-bar {
      background: linear-gradient(135deg, rgba(37,99,235,0.2), rgba(168,85,247,0.2));
      border: 1px solid rgba(168,85,247,0.3);
      border-radius: 16px;
      padding: 18px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .voice-mic {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #3b82f6;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(59,130,246,0.6);
    }
    .grid-actions {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      flex: 1;
    }
    .action-card {
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .action-card:hover {
      border-color: #38bdf8;
    }
    .action-icon {
      font-size: 28px;
      margin-bottom: 8px;
    }
    .action-name {
      font-size: 17px;
      font-weight: 700;
    }
    .action-desc {
      font-size: 12px;
      color: #94a3b8;
      margin-top: 4px;
    }
    .sos-card {
      border: 1px solid rgba(239, 68, 68, 0.4);
      background: rgba(239, 68, 68, 0.1);
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="logo">
      <span>🏥 Saksham 3.0</span>
      <span class="badge">Live PWA &bull; PostgreSQL Synced</span>
    </div>
    <div class="role-indicator">
      <div class="role-btn role-active">Patient Portal</div>
      <div class="role-btn role-inactive">Caregiver View</div>
      <div class="role-btn role-inactive">Neurologist Directives</div>
    </div>
  </div>

  <div class="main">
    <div class="panel">
      <div class="routine-title">
        <span>Today's Routine Support</span>
        <span style="color: #38bdf8; font-size: 13px;">3/4 Done</span>
      </div>
      <div class="routine-item" style="border-left: 4px solid #10b981;">
        <div>
          <div style="font-weight: 600; font-size: 14px;">Morning Levodopa Dose</div>
          <div style="font-size: 12px; color: #94a3b8;">08:30 AM &bull; Logged with Audio Confirmation</div>
        </div>
        <span style="color: #10b981; font-weight: 700;">✓</span>
      </div>
      <div class="routine-item" style="border-left: 4px solid #10b981;">
        <div>
          <div style="font-weight: 600; font-size: 14px;">Hydration Intake (Glass 4/8)</div>
          <div style="font-size: 12px; color: #94a3b8;">11:15 AM &bull; 250ml recorded</div>
        </div>
        <span style="color: #10b981; font-weight: 700;">✓</span>
      </div>
      <div class="routine-item" style="border-left: 4px solid #f59e0b;">
        <div>
          <div style="font-weight: 600; font-size: 14px;">Motor Stability Calibration</div>
          <div style="font-size: 12px; color: #f59e0b;">Scheduled for 04:00 PM</div>
        </div>
        <span style="color: #f59e0b; font-weight: 700;">Pending</span>
      </div>
      <div class="routine-item">
        <div>
          <div style="font-weight: 600; font-size: 14px;">Speech Volume Check (dB)</div>
          <div style="font-size: 12px; color: #94a3b8;">Voice acoustic monitoring</div>
        </div>
        <span style="color: #64748b;">Upcoming</span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div class="voice-bar">
        <div>
          <div style="font-size: 13px; color: #c084fc; font-weight: 600; text-transform: uppercase;">Multilingual Voice Assistant</div>
          <div style="font-size: 16px; font-weight: 700; margin-top: 2px;">"Listening for: 'Drink water', 'Complete task', or 'Emergency'..."</div>
        </div>
        <div class="voice-mic">🎙️</div>
      </div>

      <div class="grid-actions">
        <div class="action-card">
          <div>
            <div class="action-icon">💧</div>
            <div class="action-name">One-Tap Hydration</div>
            <div class="action-desc">Large 48px touch targets designed for tremor compensation.</div>
          </div>
          <div style="font-size: 13px; color: #38bdf8; font-weight: 600; margin-top: 12px;">+ Add 250ml Glass &rarr;</div>
        </div>

        <div class="action-card">
          <div>
            <div class="action-icon">🧘</div>
            <div class="action-name">Cognitive Therapy</div>
            <div class="action-desc">Gentle facial recall and memory exercises for Alzheimer's & Parkinson's.</div>
          </div>
          <div style="font-size: 13px; color: #a855f7; font-weight: 600; margin-top: 12px;">Start Session &rarr;</div>
        </div>

        <div class="action-card">
          <div>
            <div class="action-icon">📊</div>
            <div class="action-name">Tremor Stability Record</div>
            <div class="action-desc">Multi-frame dampening sensor telemetry synced to doctor portal.</div>
          </div>
          <div style="font-size: 13px; color: #10b981; font-weight: 600; margin-top: 12px;">View Trend &rarr;</div>
        </div>

        <div class="action-card sos-card">
          <div>
            <div class="action-icon">🚨</div>
            <div class="action-name" style="color: #ef4444;">Emergency SOS</div>
            <div class="action-desc" style="color: #fca5a5;">Instant 1-tap WhatsApp alert & direct call to primary caregiver.</div>
          </div>
          <div style="font-size: 13px; color: #ef4444; font-weight: 700; margin-top: 12px;">Broadcast Alert &rarr;</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const focusmateMockupHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 720px;
      background: #0b0f19;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #f8fafc;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .topbar {
      height: 60px;
      background: #111827;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 19px;
      font-weight: 700;
      color: #818cf8;
    }
    .badge {
      background: rgba(129, 140, 248, 0.15);
      border: 1px solid rgba(129, 140, 248, 0.3);
      color: #a5b4fc;
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 9999px;
      font-weight: 600;
    }
    .nav-tabs {
      display: flex;
      gap: 10px;
    }
    .nav-tab {
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #94a3b8;
    }
    .nav-tab.active {
      background: rgba(255,255,255,0.1);
      color: white;
    }
    .main {
      flex: 1;
      padding: 28px;
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 24px;
    }
    .timer-panel {
      background: rgba(17, 24, 39, 0.7);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .timer-circle {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 6px solid #4f46e5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      box-shadow: 0 0 30px rgba(79, 70, 229, 0.3);
    }
    .time-digits {
      font-size: 48px;
      font-weight: 800;
      letter-spacing: -1px;
      font-family: monospace;
      color: #ffffff;
    }
    .timer-sub {
      font-size: 13px;
      color: #818cf8;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 4px;
    }
    .timer-btns {
      display: flex;
      gap: 12px;
      width: 100%;
    }
    .btn {
      flex: 1;
      padding: 12px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
    }
    .btn-primary {
      background: #4f46e5;
      color: white;
    }
    .btn-secondary {
      background: rgba(255,255,255,0.06);
      color: #cbd5e1;
    }
    .right-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .box {
      background: rgba(17, 24, 39, 0.6);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 18px;
    }
    .box-title {
      font-size: 14px;
      font-weight: 600;
      color: #cbd5e1;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
    }
    .subject-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      font-size: 13px;
    }
    .prog-bar {
      width: 80px;
      height: 6px;
      background: rgba(255,255,255,0.1);
      border-radius: 9999px;
      overflow: hidden;
    }
    .prog-fill {
      height: 100%;
      background: #818cf8;
      border-radius: 9999px;
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="logo">
      <span>⚡ FocusMate</span>
      <span class="badge">React + Firebase Firestore</span>
    </div>
    <div class="nav-tabs">
      <div class="nav-tab active">Focus Timer</div>
      <div class="nav-tab">Subjects & Goals</div>
      <div class="nav-tab">Notes & Folders</div>
      <div class="nav-tab">AI Summarizer</div>
      <div class="nav-tab">Study Analytics</div>
    </div>
  </div>

  <div class="main">
    <div class="timer-panel">
      <div class="timer-circle">
        <div class="time-digits">24:48</div>
        <div class="timer-sub">Deep Focus &bull; Session 2</div>
      </div>
      <div style="font-size: 14px; font-weight: 600; margin-bottom: 6px;">Subject: B.Tech Data Structures & Algorithms</div>
      <div style="font-size: 12px; color: #94a3b8; margin-bottom: 20px;">Daily Target: 90 / 120 mins completed</div>
      <div class="timer-btns">
        <div class="btn btn-primary">Pause Session</div>
        <div class="btn btn-secondary">Switch to Break</div>
      </div>
    </div>

    <div class="right-content">
      <div class="card-grid">
        <div class="box">
          <div class="box-title">
            <span>Subject Goals & Progress</span>
            <span style="color: #818cf8; font-size: 12px;">Sem 1 Track</span>
          </div>
          <div class="subject-row">
            <span>Engineering Mathematics I</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="prog-bar"><div class="prog-fill" style="width: 85%;"></div></div>
              <span style="font-size: 11px; color: #94a3b8;">85%</span>
            </div>
          </div>
          <div class="subject-row">
            <span>Python & AI Fundamentals</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="prog-bar"><div class="prog-fill" style="width: 70%;"></div></div>
              <span style="font-size: 11px; color: #94a3b8;">70%</span>
            </div>
          </div>
          <div class="subject-row">
            <span>Digital Electronics</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="prog-bar"><div class="prog-fill" style="width: 50%;"></div></div>
              <span style="font-size: 11px; color: #94a3b8;">50%</span>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="box-title">
            <span>Weak-Topic Diagnostic</span>
            <span style="color: #f59e0b; font-size: 12px;">Review Scheduled</span>
          </div>
          <div style="font-size: 13px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; justify-content: space-between;">
            <span>Recursion & Tree Traversal</span>
            <span style="color: #f87171; font-size: 11px; font-weight: 600;">Needs Review</span>
          </div>
          <div style="font-size: 13px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; justify-content: space-between;">
            <span>Eigenvalues & Matrix Transforms</span>
            <span style="color: #fbbf24; font-size: 11px; font-weight: 600;">Practice Quiz</span>
          </div>
          <div style="font-size: 13px; padding: 6px 0; display: flex; justify-content: space-between;">
            <span>Boolean Minimization (K-Maps)</span>
            <span style="color: #34d399; font-size: 11px; font-weight: 600;">Mastered</span>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-title">
          <span>AI-Assisted Learning & Study Notes</span>
          <span style="color: #c084fc; font-size: 12px;">Gemini / Cloud Functions</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 13px;">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 12px; border-radius: 8px;">
            <div style="font-weight: 600; color: #c084fc; margin-bottom: 4px;">⚡ Flashcard Generator</div>
            <div style="font-size: 11px; color: #94a3b8;">42 active cards created from handwritten lecture scans</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 12px; border-radius: 8px;">
            <div style="font-weight: 600; color: #38bdf8; margin-bottom: 4px;">📝 Smart Lecture Summaries</div>
            <div style="font-size: 11px; color: #94a3b8;">Auto-extracts key definitions and exam formulas</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 12px; border-radius: 8px;">
            <div style="font-weight: 600; color: #34d399; margin-bottom: 4px;">🎯 Diagnostic Quiz Mode</div>
            <div style="font-size: 11px; color: #94a3b8;">Instant multiple-choice self-assessment with score log</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

async function generate() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 720 } });

  await page.setContent(sakshamMockupHtml);
  await page.screenshot({ path: path.resolve('portfolio/public/images/saksham_preview.png') });
  console.log('Saved saksham_preview.png');

  await page.setContent(focusmateMockupHtml);
  await page.screenshot({ path: path.resolve('portfolio/public/images/focusmate_preview.png') });
  console.log('Saved focusmate_preview.png');

  await browser.close();
}

generate().catch(console.error);
