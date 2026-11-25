# SMEL-Masterclass 2027 website

Static website for the Strategic Management & Executive Leadership Masterclass,
Kigali Marriott Hotel, Kigali, Rwanda, 22–27 February 2027.

The whole site is one file, `index.html`, with 66 pages addressed by `#` links
(for example `/#capstone-1`, `/#registration`). It needs no build step, database
or server-side code, so it runs on any Hostinger plan.

## Deploying to Hostinger
hPanel → Websites → Manage → Advanced → GIT: add this repository, branch `main`,
leave the install directory empty to deploy into `public_html`, then enable
Auto Deployment and add the webhook URL under the GitHub repository's
Settings → Webhooks.
