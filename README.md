# dantitmussmagic.com

Simple one-page site for Dan Titmuss's magic (stage mentalism + walkaround). Plain HTML/CSS/JS, no build step.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy (Render)

This repo includes `render.yaml`, so deployment is a one-time connect:

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the Render dashboard, choose **New > Blueprint**, connect this repo, and Render will pick up `render.yaml` automatically (static site, no build command, publishes the repo root).
3. Once created, every push to `main` auto-deploys — no further manual steps.
4. To go live on the real domain: in the Render service's **Settings > Custom Domains**, add `dantitmussmagic.com`, then add the DNS records Render gives you at your domain registrar.

## Updating content

All copy lives directly in `index.html`. Images are in `images/`; replace them with same-named files to swap photos (keep them under ~1MB — resize/compress first, e.g. with `sips -Z 1800 -s formatOptions 70 in.jpg --out out.jpg` on macOS).
