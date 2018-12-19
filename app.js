const puppeteer = require('puppeteer');
const { map } = require('lodash');
const { parallelLimit } = require('async');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const navigationOptions = {
    waitUntil: 'networkidle0'
  };

  const uri =
    'https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/';

  const getPageLinks = async uri => {
    const page = await browser.newPage();
    await page.goto(uri, navigationOptions);
    const content = await page.evaluate(() => ({
      items: Array.from(
        document.querySelectorAll('a.marginright5.linkWithHash')
      )
        .map(l => l.href)
        .filter(l => l.includes('olx.ro/')),
      nextPage: document.querySelector(
        "a.pageNextPrev[data-cy='page-link-next']"
      ).href
    }));
    await page.close();
    return content;
  };

  // const result = await getPageLinks(uri);
  // console.log(result);

  const scrapAdPage = async uri => {
    const page = await browser.newPage();
    await page.goto(uri, navigationOptions);

    // Load phone number
    await page.click('div.offerbody div.link-phone')
    await page.$$eval('div.offerbody div.link-phone strong.xx-large', el => el);

    const content = await page.evaluate(() => {
      const postedBy = document.querySelector(
        'div.offerbody div.offer-user__details a'
      );
      const otherProperties = Array.from(
        document.querySelectorAll('div.offerbody table.details table.item')
      )
        .map(item => {
          const value = item.querySelector('td.value a')
            ? {
                link: item.querySelector('td.value a').href,
                text: item.querySelector('td.value a').textContent.trim()
              }
            : item.querySelector('td.value').textContent.trim();

          // remove any AD
          if (typeof value !== 'string' && !value.link.includes('olx.ro/')) {
            return null;
          }

          return {
            property: item.querySelector('th').textContent.trim(),
            value
          };
        })
        .filter(o => o);

      return {
        uri: document.location.href,
        title: document
          .querySelector('div.offerbody div.offer-titlebox h1')
          .textContent.trim(),
        location: document
          .querySelector('div.offerbody div.offer-titlebox a.show-map-link')
          .textContent.trim(),
        price: document
          .querySelector('div.offerbody div.price-label')
          .textContent.trim(),
        phone: document
          .querySelector('div.offerbody div.link-phone strong.xx-large')
          .textContent.trim(),
        postedBy: {
          link: postedBy.href,
          name: postedBy.textContent.trim()
        },
        otherProperties,
        description: document
          .querySelector('div.offerbody div#textContent')
          .textContent.trim(),
        images: Array.from(
          document.querySelectorAll('div.offerbody div.img-item img')
        ).map(el => el.src)
      };
    });
    await page.close();
    return content;
  };

  const adUri =
    'https://www.olx.ro/oferta/vanzare-apartament-2-camere-drumul-taberei-favorit-IDbxMxT.html#63636a9930';

  const adData = await scrapAdPage(adUri);

  console.log(JSON.stringify(adData, null, 2));

  await browser.close();
})();
