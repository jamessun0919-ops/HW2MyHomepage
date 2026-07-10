const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:8090';
const OUT_DIR = path.join(__dirname, '..', 'screenshots');

const VIEWPORTS = {
    desktop: { width: 1440, height: 900 },
    mobile: { width: 390, height: 844 }
};

const DEFAULT_PAGES = [
    'index.html', 'index-zh.html',
    'restaurant-helper.html', 'restaurant-helper-zh.html',
    'turtle-soup.html', 'turtle-soup-zh.html'
];

async function main() {
    const pages = process.argv.length > 2 ? process.argv.slice(2) : DEFAULT_PAGES;
    fs.mkdirSync(OUT_DIR, { recursive: true });

    const browser = await chromium.launch();
    for (const pageFile of pages) {
        for (const [viewportName, size] of Object.entries(VIEWPORTS)) {
            const page = await browser.newPage({ viewport: size });
            await page.goto(`${BASE_URL}/${pageFile}`, { waitUntil: 'networkidle' });
            await page.waitForTimeout(1000); // let GSAP scroll/entry animations settle
            const outFile = path.join(OUT_DIR, `${pageFile.replace('.html', '')}-${viewportName}.png`);
            await page.screenshot({ path: outFile, fullPage: true });
            console.log(`saved ${outFile}`);
            await page.close();
        }
    }
    await browser.close();
}

main();
