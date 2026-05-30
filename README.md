# HAIR by Falke

## MVP-specificatie

HAIR by Falke is een statische, Nederlandstalige one-page salonwebsite voor een schoolprojectpresentatie. De MVP toont alleen deze secties, in deze volgorde:

1. Hero
2. Diensten
3. Prijzen
4. Over Falke
5. Acties

De navigatie gebruikt dezelfde labels: Home, Diensten, Prijzen, Over Falke en Acties. De knop "Boek afspraak" is bewust een fake CTA voor de presentatie en bevat geen echte boekingsflow.

## Binnen scope

- Warme, moderne salonpresentatie in het Nederlands.
- Diensten en prijzen als makkelijk aanpasbare data in `src/data`.
- Lokale placeholderbeelden voor interieur, styling en haarportret.
- Responsive statische frontend zonder backend.

## Buiten scope

- Echte boekingen.
- Contactformulier of contactsectie.
- Backend, database, authenticatie, CMS of API.
- Productieklare salonadministratie.

## Ontwikkeling

```bash
npm start
```

## Build

```bash
npm run build
```

Voor GitHub Pages kan de inhoud van `build/` als statische site gepubliceerd worden. Bij deployment onder een subpad, bijvoorbeeld `username.github.io/falke-hair`, moet de assetbasis in de gekozen Pages-configuratie overeenkomen met dat pad.
