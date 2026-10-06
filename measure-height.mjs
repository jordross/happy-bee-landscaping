import { chromium } from 'playwright';
import { spawn } from 'child_process';

// Start the dev server
const server = spawn('npm', ['run', 'dev'], {
  cwd: process.cwd(),
  stdio: ['ignore', 'pipe', 'pipe']
});

let serverReady = false;

server.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Local:') || output.includes('localhost:3000')) {
    serverReady = true;
  }
});

server.stderr.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Local:') || output.includes('localhost:3000')) {
    serverReady = true;
  }
});

// Wait for server to be ready
await new Promise((resolve) => {
  const checkInterval = setInterval(() => {
    if (serverReady) {
      clearInterval(checkInterval);
      resolve();
    }
  }, 500);
});

// Give it a moment to fully start
await new Promise(resolve => setTimeout(resolve, 2000));

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 390, height: 844 }, // iPhone 13
  deviceScaleFactor: 3,
});

const page = await context.newPage();

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for content to load
  await page.waitForLoadState('domcontentloaded');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Get the page height
  const pageHeight = await page.evaluate(() => {
    return document.documentElement.scrollHeight;
  });
  
  const viewportHeight = 844;
  const screens = (pageHeight / viewportHeight).toFixed(2);
  
  console.log('\n=== MOBILE HEIGHT MEASUREMENT ===');
  console.log(`Viewport: 390x844 (iPhone 13)`);
  console.log(`Page Height: ${pageHeight}px`);
  console.log(`Number of Screens: ${screens} (target: ~6)`);
  console.log('================================\n');
  
  // Take a full-page screenshot
  await page.screenshot({
    path: 'mobile-after.png',
    fullPage: true
  });
  
  console.log('✓ Screenshot saved to mobile-after.png');
  
} catch (error) {
  console.error('Error:', error);
} finally {
  await browser.close();
  server.kill();
  process.exit(0);
}
