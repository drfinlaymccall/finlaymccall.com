# Deployment

finlaymccall.com runs as a **Cloudflare Worker**, not Cloudflare Pages. There is no
Pages project for this site.

- **Worker name:** `finlaymccall`
- **Framework:** Astro, built with the `@astrojs/cloudflare` adapter (see
  `astro.config.mjs`). The build output is a static site wrapped in a small SSR
  worker at `dist/_worker.js/index.js`, per `wrangler.jsonc`.
- **Custom domains:** both `finlaymccall.com` and `www.finlaymccall.com` are attached
  directly to the Worker as custom domains (Cloudflare dashboard → Workers & Pages →
  `finlaymccall` → Settings → Domains & Routes).
- **DNS:** the apex and `www` AAAA records point to Cloudflare's Workers anycast
  address (`100::`) and are proxied (orange-clouded). This is managed by Cloudflare
  automatically when a custom domain is attached to a Worker — you should not need to
  hand-edit these records.

## How a deploy happens

Check the Cloudflare dashboard (Workers & Pages → `finlaymccall` → Settings →
Builds) to see whether this repo is connected via **Workers Builds** (Cloudflare's
Git integration). If it is, pushing to `main` triggers an automatic build and
deploy — no local action needed.

If it is **not** connected (or you want to deploy from your machine), run:

```sh
npm install
npm run deploy   # builds, then runs `wrangler deploy`
```

This requires:
- Node.js **v22+** (wrangler 4.x will refuse to run on older versions)
- `wrangler login` completed once on the machine you're deploying from

`npm run preview` does the same build, then serves it locally with `wrangler dev`
(also requires Node 22+) so you can sanity-check the Worker build before deploying.

## Rolling back

**Fastest — Cloudflare dashboard, no rebuild:** Workers & Pages → `finlaymccall` →
Deployments. Every deploy is listed with a timestamp; click the three-dot menu on a
previous deployment and choose **Rollback**. This repoints production traffic
instantly, without touching git or rebuilding anything.

**Git-level — if you want the repo itself to match the rolled-back state:** the
commit that was in production immediately before a given redesign is tagged. Find it
with:

```sh
git tag -l
```

and revert forward (never force-push or hard-reset a shared branch):

```sh
git revert <commits-to-undo>   # or merge the tag back in
git push origin main
```

This creates a new commit undoing the change rather than rewriting history, so
nothing already pushed is ever lost.
