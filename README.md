# Olx Scrap

A nodejs scrapper for olx.ro made to experiment with puppeteer, forking, etc..


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