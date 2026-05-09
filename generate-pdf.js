const puppeteer = require('puppeteer');
const path = require('path');
const chokidar = require('chokidar');

const HTML_FILE = path.resolve(__dirname, 'index.html');
const CSS_FILE = path.resolve(__dirname, 'style.css');
const OUTPUT_PDF = path.resolve(__dirname, 'resume.pdf');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: OUTPUT_PDF,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`PDF generated: ${OUTPUT_PDF}`);
}

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('Watching for changes...');
  let timeout = null;

  const watcher = chokidar.watch([HTML_FILE, CSS_FILE], {
    ignoreInitial: true,
  });

  watcher.on('change', (filePath) => {
    console.log(`File changed: ${path.basename(filePath)}`);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      generatePDF().catch(console.error);
    }, 300);
  });

  // Generate once on start
  generatePDF().catch(console.error);
} else {
  generatePDF().catch(console.error);
}
