const config = require('./config.json');
module.exports = async (browser, uri) => {
  const page = await browser.newPage();
  await page.goto(uri, config.navigationOptions);
  const content = await page.evaluate(() => ({
    items: Array.from(document.querySelectorAll('a.marginright5.linkWithHash'))
      .map(l => l.href)
      .filter(l => l.includes('olx.ro/')),
    nextPage: document.querySelector("a.pageNextPrev[data-cy='page-link-next']")
      .href
  }));
  await page.close();
  return content;
};