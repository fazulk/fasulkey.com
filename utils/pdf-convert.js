import fs from 'node:fs'
// import puppeteer from 'puppeteer'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

async function convertHtmlToPdf(htmlFilePath, outputPdfPath) {
//   const browser = await puppeteer.launch()
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })
  const page = await browser.newPage()

  // Load the HTML file
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8')
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' })

  //   await page.screenshot({ path: 'screenshot.png', fullPage: true })
  // Convert to PDF
  await page.pdf({
    path: outputPdfPath,
    format: 'A4',
    margin: {
      top: '.45in',
      bottom: '1.1in',
    },
  })
  await browser.close()
}

convertHtmlToPdf('dist/pdf/index.html', 'dist/docs/resume.pdf')
// convertHtmlToPdf('dist/pdf/index.html', 'public/docs/resume.pdf')
