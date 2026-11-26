# SMEL-Masterclass 2027 website

Static website for the Strategic Management & Executive Leadership Masterclass,
Kigali Marriott Hotel, Kigali, Rwanda, 22–27 February 2027.

A static site of 66 HTML pages (`index.html` is the home page) with shared files in
`assets/` (`css/style.css`, `js/site.js`, `img/`). It needs no build step, database
or server-side code, so it runs on any Hostinger plan. Upload everything in this
folder, except `.github/` and `README.md`, into `public_html/smelretreat`.

## Deploying to Hostinger
Every push to `main` is uploaded to https://afroindustrygroup.africa/smelretreat/
by GitHub Actions over FTP (`.github/workflows/deploy-hostinger.yml`).

Setup, once:
1. hPanel → Files → FTP Accounts: create an FTP account whose directory is
   `public_html/smelretreat`.
2. GitHub → Settings → Secrets and variables → Actions: add `FTP_SERVER`,
   `FTP_USERNAME` and `FTP_PASSWORD` for that account.
3. GitHub → Actions → Deploy to Hostinger → Run workflow.
