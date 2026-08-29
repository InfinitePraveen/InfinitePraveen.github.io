# InfinitePraveen Dark Glassmorphism Portfolio

A GitHub Pages-compatible static portfolio built with **HTML, CSS and JavaScript**.

## Why static?

GitHub Pages does not run a Flask/Python server. This version therefore contains no Flask dependency and can be published directly to a repository such as `InfinitePraveen.github.io`.

## Features

- Dark glassmorphism responsive design
- Projects, Passionate Fields and Special Projects tabs
- 50 research tasks with dedicated article pages
- Two research links per topic: Research Article + YouTube Video
- 100 presentation topics, split into Part A and Part B
- Pull Request tab for the scikit-learn repository
- Profile image included in the site assets
- Social profile links
- Client-side search/filtering

## GitHub Pages deployment

1. Create/use the repository `InfinitePraveen.github.io`.
2. Upload **all files and folders from this ZIP** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`.
5. Save and wait for GitHub Pages to deploy.
6. Open `https://InfinitePraveen.github.io/`.

No `python app.py`, Flask installation or server is required.

## Local testing

Because browsers can restrict `fetch()` when opening `index.html` directly with `file://`, use a simple local server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
