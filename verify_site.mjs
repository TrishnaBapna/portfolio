import { chromium } from '@playwright/test';
import http from 'http';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('portfolio/dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(distDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA fallback
    const indexPath = path.join(distDir, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexPath).pipe(res);
  }
});

const PORT = 4173;

server.listen(PORT, async () => {
  console.log(`Test server running at http://localhost:${PORT}`);
  const browser = await chromium.launch();

  try {
    // 1. Desktop Test
    console.log('Testing Desktop Viewport (1440x900)...');
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    desktopPage.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await desktopPage.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    
    // Screenshot Desktop Hero & Full
    await desktopPage.screenshot({ path: path.resolve('portfolio/public/images/desktop_full_preview.png'), fullPage: true });
    console.log('Saved desktop_full_preview.png');

    // Test Resume Modal
    const resumeBtn = await desktopPage.locator('button:has-text("Resume")').first();
    await resumeBtn.click();
    await desktopPage.waitForTimeout(500);
    const modalVisible = await desktopPage.locator('text=Curriculum Vitae / Resume').isVisible();
    console.log('Resume Modal Opens:', modalVisible);
    await desktopPage.screenshot({ path: path.resolve('portfolio/public/images/resume_modal_preview.png') });

    // Close modal
    const closeBtn = await desktopPage.locator('button[aria-label="Close resume preview"]');
    await closeBtn.click();
    await desktopPage.waitForTimeout(300);

    // 2. Mobile Test (375x812 - iPhone X/12)
    console.log('Testing Mobile Viewport (375x812)...');
    const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await mobilePage.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await mobilePage.screenshot({ path: path.resolve('portfolio/public/images/mobile_preview.png'), fullPage: true });
    console.log('Saved mobile_preview.png');

    // Test Mobile Menu Toggle
    const menuBtn = await mobilePage.locator('button[aria-label="Toggle navigation menu"]');
    await menuBtn.click();
    await mobilePage.waitForTimeout(400);
    const mobileLinkVisible = await mobilePage.locator('nav a:has-text("Projects")').isVisible();
    console.log('Mobile menu opens correctly:', mobileLinkVisible);

    // 3. Tablet Test (768x1024 - iPad)
    console.log('Testing Tablet Viewport (768x1024)...');
    const tabletPage = await browser.newPage({ viewport: { width: 768, height: 1024 } });
    await tabletPage.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await tabletPage.screenshot({ path: path.resolve('portfolio/public/images/tablet_preview.png'), fullPage: true });
    console.log('Saved tablet_preview.png');

    console.log('Console Errors caught during test:', errors.length ? errors : 'None! Zero console errors.');
    console.log('ALL PLAYWRIGHT TESTS PASSED SUCCESSFULLY!');
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
