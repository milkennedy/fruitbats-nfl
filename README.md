# Fruit Bats Football

Website for the Fruit Bats, a youth flag football club in Ealing, West London.

Live: https://fruitbats-nfl-production.up.railway.app

## Structure

- `index.html` – the whole site (markup, styles, form script)
- `assets/` – crest and club photography, web-sized JPEGs
- `server.js` – zero-dependency Node server used on Railway

## Run locally

```bash
npm start
```

Then open http://localhost:3000.

## Deploy

```bash
railway up
```

## Notes

- The taster form opens the visitor's email app addressed to FruitBatsFootball@gmail.com; there is no backend.
- Brand assets (crest, photos) come from the club's original site.
