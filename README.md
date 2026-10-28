# NAIL Website

> **BETA:** NAIL is currently in beta. Features and behavior may change between releases.

The static landing page and how-to documentation for **NAIL — Neutral AI Interaction Layer**.

NAIL is free to use and runs on your own computer or server. Access its workspace from a browser on your phone, tablet, laptop, or remote computer. AI provider subscriptions and usage charges are separate.

[Visit the website](https://branislav-brujic.github.io/nail-website/) · [Read the how-to guides](https://branislav-brujic.github.io/nail-website/how-to.html) · [NAIL on PyPI](https://pypi.org/project/nailayer/)

## Local preview

Clone the repository and start a static file server:

```bash
git clone https://github.com/branislav-brujic/nail-website.git
cd nail-website
python3 -m http.server 8000
```

Open <http://localhost:8000>. No build step, package installation, or backend is required.

## Project structure

```text
.
├── index.html          # Landing page, styles, and interactive feature gallery
├── how-to.html         # Searchable how-to guides and configuration reference
├── assets/
│   ├── docs.css        # Documentation styles
│   ├── docs.js         # Guide search, navigation, and code copying
│   ├── nail.svg        # NAIL logo
│   ├── *.png           # Screenshots from the application
│   ├── *.mp4           # Application walkthrough
│   └── *.vtt           # Video captions
└── .nojekyll           # Serve static files without Jekyll processing
```

## Editing the website

- Update landing page content and feature links in `index.html`.
- Update guides and configuration examples in `how-to.html`.
- Update documentation styling and behavior in `assets/docs.css` and `assets/docs.js`.
- Keep all website text, screenshots, video content, and captions in English.
- Use relative paths for local assets and pages so the site works under the GitHub Pages repository path.
- Use actual application screenshots and recordings, and keep documentation consistent with the current NAIL release.

Preview changes locally and check both desktop and mobile layouts. Verify navigation, feature switching, image zoom, guide search, code copying, and video playback when changing those parts of the site.

## GitHub Pages deployment

In the repository on GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the **main** branch and **/ (root)** folder.
4. Click **Save**.

GitHub Pages publishes the site at:

<https://branislav-brujic.github.io/nail-website/>

Subsequent pushes to `main` trigger publication automatically. This repository hosts the website and documentation; install and run the NAIL application separately on your own machine.

## Author

[Branislav Brujic](https://branislav.brujic.com)

## Support NAIL

NAIL is free to use. If it helps your workflow, support its continued development.

[Support NAIL on Ko-fi](https://ko-fi.com/branislavbrujic)
