# Olx Scrap

A nodejs scrapper for olx.ro made to experiment with puppeteer


#### Example json object returned by scrapAdPage

```
{
  "uri": "https://www.olx.ro/oferta/vanzare-apartament-2-camere-drumul-taberei-favorit-IDbxMxT.html#63636a9930",
  "title": "Vanzare apartament 2 camere Drumul Taberei Favorit",
  "location": "Bucuresti, judet Bucuresti, Sectorul 6",
  "price": "68 000 €",
  "phone": "0758 098 905",
  "postedBy": {
    "link": "https://www.olx.ro/oferte/user/2yWFW/",
    "name": "Elena Draghia"
  },
  "otherProperties": [
    {
      "property": "Oferit de",
      "value": {
        "link": "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/2-camere/bucuresti/?search%5Bprivate_business%5D=business",
        "text": "Agentie"
      }
    },
    {
      "property": "Compartimentare",
      "value": {
        "link": "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/2-camere/bucuresti/?search%5Bfilter_enum_compartimentare%5D%5B0%5D=semidecomandat",
        "text": "Semidecomandat"
      }
    },
    {
      "property": "Suprafata utila",
      "value": "49 m²"
    },
    {
      "property": "An constructie",
      "value": {
        "link": "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/2-camere/bucuresti/?search%5Bfilter_enum_constructie%5D%5B0%5D=inainte-de-1977",
        "text": "inainte de 1977"
      }
    },
    {
      "property": "Etaj",
      "value": {
        "link": "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/2-camere/bucuresti/?search%5Bfilter_enum_floor%5D%5B0%5D=fl_7",
        "text": "7"
      }
    }
  ],
  "description": "OFERTA EXCLUSIVA. AVEM CHEILE PROPRIETATII.\n\nVa ofer spre vanzare un apartament modernizat cu 2 camere ce se afla la 7 din 10 al unui bloc pozitionat in zona Favorit, Drumul Taberei. Zona in care este amplasat blocul este linistita, verde si placuta, fara trafic  apropiere veti gasi Parcul Drumul Taberei, scoli, gradinite, puncte de aprovizionare, mijloace de transport in comun (linia tramvai 41, linii autobuze RATB), precum si viitoarea statie de metrou Favorit. \n\nApartamentul a fost modernizat in 2014, a fost inlocuit tot sistemul electric, fiind montate 65 de prize si intrerupatoare, au fost montate cabluri si conexiuni tv in fiecare incapere. Instatlatiile sanitare au fost schimbate: s-au inlocuit tevile de apa la baie si bucatarie, s-au inlocuit toate radiatoarele (au termostat si aerisitoare automate), s-au \n\nschimbat toate usile din interior inclusiv usa de la intrare. Deasemenea, dispune de finisaje de calitate superioara cu gresie, faianta, parchet, termopan, balcon izolat cu hidroizolatie lichida.\n\nPrezinta mobilier modern si utilitati de calitate superioara. Mobilierul a fost realizat pe comanda, la cote fixe, administrat foarte bine ca pozitionare, astfel incat s-a creat spatiu generos in toate zonele. Ca utilitati dispune de cuptor electric si plita cu gaz, hota Teka cu putere marita de absortie, masina de spalat vase Whirlpool, frigider Arctic, masina de spalat rufe Whirlpool, 2 aparate de aer conditionat LG foarte economice de 12000 si 9000 BTU, convector caldura TESY cu termostat reglabil. \n\nSe poate achizitiona la pretul de 68.000 euro usor negociabil.",
  "images": [
    "https://apollo-frankfurt.akamaized.net/v1/files/sgywq40lyqwp-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/7nidb8hu31t6-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/rae3s2arval11-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/1w1ko664tbdu2-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/jaqr9dhzadcv3-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/cjox03kqyit23-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/4w6xgofmncpb2-RO/image;s=644x461",
    "https://apollo-frankfurt.akamaized.net/v1/files/tl4w44ymm2022-RO/image;s=644x461"
  ]
}
```

#### Example json object returned by getPageLinks

```
{
  "items": [
    "https://www.olx.ro/oferta/vand-apartament-cu-2-camere-zona-centrala-IDbKfT3.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-2-camere-IDbPHlt.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-3-camere-15min-de-metrou-pacii-85-mp-liniste-in-zona-IDblyTT.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/parter-stradal-65mp-utili-bloc-nou-primo-IDawT5x.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartamente-noi-zonadacia-eminescu-stefan-cel-mare-IDaSJEl.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vand-apartament-2-camere-IDbypiD.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-3-camere-iancului-metrou-langa-iulia-hasdeu-IDbI3zA.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-3-camere-IDaWdqD.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-inel-i-2-camere-exclusivitate-comision-0-IDbSIfv.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vand-ap-2-camere-floresti-IDbrC0b.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartamente-de-vanzare-2-camere-negociabil-IDbPLqL.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/proprietar-vand-apartament-3-camere-IDbxgdD.html#684b01e6ce",
    "https://www.olx.ro/oferta/proprietar-vand-ap-2-cam-decomandat-in-zona-steaua-IDbnGk8.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/garsoniera-dubla-2-camere-sd-parc-sebastian-IDbOfi9.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-3-camere-inel-2-IDbRUJH.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/promotie-craciun-la-100-m-de-metrou-mihai-bravu-tineretului-dristor-IDbSUgB.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-de-vanzare-3-camere-IDbfetW.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-80-mp-140-mp-IDbSw2T.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vanzare-apartament-2-camere-semidecomanda-t-strada-podul-giurgiului-IDbN2fg.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-2-camere-IDbLKP4.html#684b01e6ce",
    "https://www.olx.ro/oferta/vand-inchiriez-apartament-zona-piata-rahova-spatiu-comercial-IDbIjhM.html#684b01e6ce",
    "https://www.olx.ro/oferta/vand-garsoniera-parter-grivita-IDbJmiR.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-2-camere-noi-finisaj-deosebit-IDbSwr9.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-proprietar-str-neptun-IDbSwoA.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/oferta-ap-3-camere-tractorul-90-mp-utili-3-bai-scara-interioara-IDbQzOD.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vanzare-apartament-2-camere-70-mp-apusului-residence-sat-rosu-IDbSIdl.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-3-camere-IDbmp7i.html#684b01e6ce",
    "https://www.olx.ro/oferta/oferta-de-craciun-etaj-1-si-spatiu-comercial-IDbJayI.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vand-apartament-2-camere-rogerius-IDbF3T9.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-2-camere-decomandat-lux-anda-viile-noi-IDbd8tw.html#684b01e6ce",
    "https://www.olx.ro/oferta/ultracentral-rosetti-2-camere-79900-euro-proprietar-IDbOtbI.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-2-camere-m16-ideal-pt-cabinet-coafura-IDbBmIX.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vand-apartament-complet-mobilat-si-utilat-IDbGY6g.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-2-camere-central-IDbpx8p.html#684b01e6ce",
    "https://www.olx.ro/oferta/water-park-rin-nord-residence-IDbKIhF.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartamente-proprietar-pe-str-neptun-iesire-timisoara-spre-giroc-ID99eHn.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartamente-direct-proprietar-str-neptun-giroc-redus-2500-dec-ID58SUm.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/apartament-andronache-colentina-carrefour-IDbf5U1.html#684b01e6ce",
    "https://www.olx.ro/oferta/vand-apartament-zona-tomis-nord-IDbPL1S.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/disponibil-apartament-in-zona-turistica-padurea-neagra-ID6URDq.html#684b01e6ce",
    "https://www.olx.ro/oferta/apartament-costinesti-ID9qrpF.html#684b01e6ce",
    "https://www.olx.ro/oferta/urgent-ocazie-apt4-camere-in-drumul-taberei-ghencea-IDbnOtj.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/garsoniera-mobilata-si-utilata-proprietar-pret-fix-militari-residence-IDbNKYp.html#684b01e6ce;promoted",
    "https://www.olx.ro/oferta/vand-apartament-in-floresti-cluj-cu-curte-zona-sub-cetate-ID9KmIN.html#684b01e6ce"
  ],
  "nextPage": "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-vanzare/?page=2"
}
```
