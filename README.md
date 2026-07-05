# Valeriy Bykov — Portfolio (Vite + React)

Bilingual (EN/RU) single-page portfolio with a second case-study screen.

## Run locally
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Deploy to Netlify
- Connect the repo and set **Build command:** `npm run build`, **Publish directory:** `dist`.
- Or drag the `dist/` folder into Netlify → *Add new site → Deploy manually*.
- `public/_redirects` keeps the `#/padel` case-study route and refreshes working.
- Since `valerbykov.com` is already on Netlify DNS, it will attach automatically.

## Add your own content
- **Photo:** drop `photo.jpg` into `public/`, then in `src/App.jsx` replace the `.photo` placeholder block with:
  `<img className="photo" src="/photo.jpg" alt="Valeriy Bykov" style={{objectFit:'cover'}} />`
- **Case-study screenshots:** add `shot1.png`, `shot2.png`, `shot3.png` to `public/` and swap the `.shot` placeholders for `<img>` tags the same way.
- **Email:** replace `hi@valerbykov.com` (appears in the contact button).
- **Upwork link:** set the real URL on the `Upwork` link in the contact section.
- **Copy:** all text lives in the `T` object at the top of `src/App.jsx` (`en` and `ru`).
