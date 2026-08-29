# Data Analyst Portfolio

A Vite + Vue 3 + Tailwind CSS portfolio site for a data analyst.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Change the color theme

Edit the CSS variables in `src/theme.css` to change the site palette.

```css
:root {
  --color-primary: #0f172a;
  --color-secondary: #1d4ed8;
  --color-accent: #7c3aed;
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: rgba(15, 23, 42, 0.12);
}
```

## Change the content

Edit the exported objects and arrays in `src/data/portfolio.js`.

- `profile` contains your name, title, pitch, CV link, and email
- `skills` is the list of skill tags
- `caseStudies` contains all portfolio project details and image URLs
- `socialLinks` contains optional social links

## Deploy to Vercel or Netlify

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings.
4. Deploy the project.

### Netlify

1. Push the project to GitHub.
2. In Netlify, choose "Add new site" > "Import an existing project".
3. Connect the repository.
4. Set the build command to `npm run build`.
5. Set the publish directory to `dist`.
6. Deploy.

