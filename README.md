# Laboni Hazra — portfolio

Static site: plain HTML, CSS and JS. No build step.

```
index.html      all content
css/style.css   styles (colours are CSS variables at the top)
js/main.js      theme toggle only
assets/         put Laboni_Hazra_Resume.pdf here
favicon.svg
```

## Editing
- **Text:** edit `index.html`. Each section is marked with a comment.
- **Links:** search for `TODO` in `index.html` — LinkedIn, GitHub, the social preview URL and the canonical URL need real values.
- **Colours:** change the variables in the first block of `css/style.css` (light, plus the two dark blocks).
- **Hero trace line:** it is an illustrative decoration, not real data. Edit the `points` in the inline SVG if you want a different shape.
- **Resume:** add `assets/Laboni_Hazra_Resume.pdf`.

## Preview locally
Open `index.html` in a browser, or run `npx serve .` in this folder.

## Deploy on Vercel
1. Put this folder in a Git repository and push it to GitHub.
2. In Vercel: Add New → Project → import the repo.
3. Framework Preset: **Other**. Leave build command and output directory empty (the root is served as-is).
4. Deploy. Then replace the `TODO` URLs (canonical and `og:url`) with your Vercel or custom domain.

(Alternatively: `npx vercel` from this folder.)
