const puppeteer = require('puppeteer');
const { chunk }  = require('lodash');

(async () => {

  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });

  const uri = "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/";
  
  const getPageLinks = async(uri) => {
    const page = await browser.newPage();
    await page.goto(
      uri,
      { waitUntil: "networkidle0" }
    );
    const content = await page.evaluate(() => ({
      items: Array.from(
        document.querySelectorAll("a.marginright5.linkWithHash")
      ).map(l => l.href).filter(l => l.includes('olx.ro/')),
      nextPage: document.querySelector("a.pageNextPrev[data-cy='page-link-next']").href
    }));
    await page.close();
    return content;
  };

  const result = await getPageLinks(uri);
  console.log(result);
  const items = chunk(result.items, 4);
  
  
  await browser.close();
})();
