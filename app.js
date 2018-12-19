const puppeteer = require('puppeteer');
const { map } = require('lodash');
const { parallelLimit } = require('async');

const config = require('./config.json');
const getPageLinks = require('./getPageLinks');
const scrapAdPage = require('./scrapAdPage');

(async () => {
  const browser = await puppeteer.launch(config.puppeteer);

  const uri =
    'https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/';

  const result = await getPageLinks(browser, uri);

  // const adUri =
  //   'https://www.olx.ro/oferta/vanzare-apartament-2-camere-drumul-taberei-favorit-IDbxMxT.html#63636a9930';

  // const adData = await scrapAdPage(browser, adUri);

  await browser.close();
})();
