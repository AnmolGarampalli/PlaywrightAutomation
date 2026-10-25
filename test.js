const { chromium } = require('@playwright/test');

async function main() {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
  });

  try {
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com');
    console.log(`Opened: ${page.url()}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error('Could not open YouTube in Chrome:', error);
  process.exitCode = 1;
});