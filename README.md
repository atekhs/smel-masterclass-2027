# SMEL-Masterclass 2027 website

Static website for the Strategic Management & Executive Leadership Masterclass,
Kigali Marriott Hotel, Kigali, Rwanda, 22–27 February 2027.

The whole site is one file, `index.html`, with 66 pages addressed by `#` links
(for example `/#capstone-1`, `/#registration`). It needs no build step, database
or server-side code, so it runs on any Hostinger plan.

## Deploying to Hostinger
Every push to `main` is uploaded to https://afroindustrygroup.africa/smelretreat/
by GitHub Actions over FTP (`.github/workflows/deploy-hostinger.yml`).

Setup, once:
1. hPanel → Files → FTP Accounts: create an FTP account whose directory is
   `public_html/smelretreat`.
2. GitHub → Settings → Secrets and variables → Actions: add `FTP_SERVER`,
   `FTP_USERNAME` and `FTP_PASSWORD` for that account.
3. GitHub → Actions → Deploy to Hostinger → Run workflow.
