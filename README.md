# Make your own personal site with AI

**No coding experience needed. A little setup. A website you own.**

Want a simple website about you and your work? This guide takes you from talking through
your ideas to publishing a site at your own web address. Use an AI assistant to prepare
the content, then an AI coding assistant—or someone helping you—to build and publish it.

This repository contains the source for [finlaymccall.com](https://finlaymccall.com),
Dr Finlay McCall's personal site. Give it to your assistant as a reference for the kind
of site you want. Your version will have its own content, repository and hosting account.

[Start with the interview](#1-talk-through-what-you-want) ·
[Give a helper access](#optional-give-someone-access-to-help) ·
[Developer notes](#developer-notes)

## What you'll need

| What | What it's for | Cost |
| --- | --- | --- |
| An AI chat, such as ChatGPT | Interviews you and drafts your website content | Depends on your account and plan |
| A folder for your material | Holds your brief, CV, photo and links | Use a folder you already have |
| A GitHub account | Stores the website files and a history of changes | A free account is enough to start |
| A Cloudflare account | Hosts the website so people can visit it | The free tier should cover a small personal site, within its limits |
| A domain, such as `yourname.com` | Gives the site your own web address | Registration and ongoing renewal fees |
| An AI coding assistant, or a helper who can use one | Creates the files and handles the technical setup | Depends on the tool or arrangement |

You can build and try the site before buying a domain. Cloudflare can provide a
`workers.dev` address to start with. Check current [GitHub plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans)
and [Cloudflare pricing](https://developers.cloudflare.com/workers/platform/pricing/)
before choosing paid features.

## 1. Talk through what you want

Open a new conversation in [ChatGPT](https://chatgpt.com), or another AI chat you use,
and paste the prompt below. You can answer out loud using
[voice chat or dictation](https://learn.chatgpt.com/docs/features/voice), where available,
or your phone's keyboard dictation. Rough answers are fine; the assistant will organise them.

```text
Help me prepare the background documents for my own personal professional website.
An AI coding assistant or a person helping me will use these documents to build it.

Interview me one question at a time. Keep questions short and conversational, as I
may answer verbally. Ask a follow-up when useful. Let me say "skip" or "I'm not sure".
Aim for about 10 main questions.

Find out:
- What I want the website to achieve, and who it is for.
- My preferred name, title, current role and affiliations.
- How I describe my work, expertise and approach.
- Projects, research, teaching, services or other work I want to feature.
- Selected achievements and publications, if relevant, with links where available.
- What enquiries or collaborations I welcome.
- My preferred public contact details and profile links.
- Sections, visual preferences and example websites I like.
- What should remain private or needs checking before publication.

Use plain language and preserve my voice. Don't invent qualifications, achievements,
clients, publications or links. Mark missing information clearly.

When we finish, summarise your understanding and let me correct it. Then produce
three separate documents, formatted so I can copy each into Word or a text file:

1. Website Brief: purpose, audience, main message, sections, style and publication boundaries.
2. Draft Website Text: opening introduction, short biography and relevant sections about my work.
3. Links and Materials Checklist: profile links, work examples, photos and other files needed,
   plus outstanding questions.

Start with your first question.
```

## 2. Put your material in one folder

Create a folder called **Website** in SharePoint, OneDrive, Google Drive or on your
computer. Save the three documents from the interview there. Add what you already have:

- Your CV or existing biography.
- A good-quality portrait you have permission to use.
- Relevant projects, publications or examples of your work.
- Links to professional profiles and the contact address you want displayed.
- A couple of websites you like, with a sentence about why.

Label anything that is **background only—do not publish**. Give the assistant or helper
access to the selected folder or upload the selected files to the chat. A folder link
alone does not give an assistant permission to read it. Keep passwords and confidential
work material out of the website folder.

## 3. Create the accounts in your own name

1. [Sign up for GitHub](https://github.com/signup) and verify your email address.
2. [Create a repository](https://github.com/new) called **website**. A repository is
   simply a folder of website files with a record of changes. Choose **Private**, enable
   **Add a README file**, then create it.
3. [Sign up for Cloudflare](https://dash.cloudflare.com/sign-up) and verify your email.
   Start with the free options for this small site.

Use an email address you expect to keep. Keep ownership of the accounts and domain,
even if someone else handles the setup. A private repository can still power a public website.

### Optional: give someone access to help

If a colleague or developer is doing the technical work, invite them using their own
accounts. Ask for their GitHub username and the email they use for Cloudflare.

**GitHub:** open your **website** repository, then go to **Settings → Collaborators →
Add people**. Find their username and send the invitation. Once they accept, they can
edit and push the website files. You may still need to approve the initial connection
between your GitHub repository and Cloudflare.
[GitHub's invitation guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)

**Cloudflare:** select your account, then **Manage Account → Members → Invite members**.
Enter your helper's Cloudflare email address. Under **Add permission policies**, choose
the account scope and **Administrator** role, select **Create policy**, then **Invite members**.
Your helper needs to accept the invitation.
[Cloudflare's invitation guide](https://developers.cloudflare.com/fundamentals/manage-members/manage/)

Administrator is a broad role suitable for a trusted helper setting up a new account
dedicated to this website: it includes editing subscriptions, but excludes managing
members and the billing profile. Keep your own Super Administrator access. If you already
use Cloudflare for other projects, agree on narrower website-specific permissions instead.
[Cloudflare's role descriptions](https://developers.cloudflare.com/fundamentals/manage-members/roles/)

## 4. Ask your coding assistant to build the site

Use an assistant that can work with files and development tools, or give this prompt
and your Website folder to your helper. The interview chat can prepare the content;
building and publishing also require access to your project and hosting tools.

```text
Build my personal website using my Website Brief, Draft Website Text and supporting
files as the source of truth.

Use https://github.com/drfinlaymccall/finlaymccall.com as a reference for a simple
Astro website hosted on Cloudflare Workers. Work in my own "website" repository.
Adapt the design to my brief and replace the original person's identity, text, photos,
links, contact information, page metadata and social sharing image with my own.
Give my Cloudflare Worker its own name and configure URLs for my site.

Keep the site simple, readable on phones and accessible. Mark missing information
for me to supply; don't invent facts. Use only material I've approved for publication.

Show me a local preview to review before publishing. When I approve it, help me
connect my GitHub repository to my Cloudflare account, deploy the site and attach my
chosen domain. Guide me through any sign-ins or owner approvals I need to do myself.
Explain any paid option before enabling it.

Check the final site's links, contact address, mobile layout and page metadata.
Leave simple instructions in my repository for future updates and recovery.
```

You can use a temporary Cloudflare address while deciding on your domain. Publishing
there makes the site publicly reachable, so review the content first. For automatic
updates, authorise Cloudflare's GitHub connection with **your** GitHub account and
limit it to your website repository. Your helper can then manage routine changes.
[Cloudflare's GitHub integration guide](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)

## 5. Buy a domain and connect it to your site

A domain is the address people type to reach you, such as `yourname.com`. Search for
your preferred name through [Cloudflare Registrar](https://www.cloudflare.com/domains/)
or another registrar. Check availability at checkout, compare the registration and
renewal prices, and register it using your own contact and payment details.

Your domain will point to **your own website hosted on Cloudflare**. GitHub stores
the files; Cloudflare serves the site to visitors.

Once your site is deployed:

1. Make sure your domain is active in your Cloudflare account. If you bought it
   elsewhere, follow Cloudflare's instructions to add it and update the nameservers
   at your registrar. Ask your helper to preserve any existing email records.
2. In Cloudflare, open **Workers & Pages**, select your website's Worker, then go to
   **Settings → Domains & Routes → Add → Custom Domain**.
3. Enter your domain and select **Add Custom Domain**. Cloudflare manages the website
   DNS record and HTTPS certificate for this connection.
4. If you want both `yourname.com` and `www.yourname.com`, have your assistant or helper
   configure both and redirect one to your preferred address. Check both in a browser.

See [Cloudflare's custom domain guide](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
A website domain does not automatically include an email inbox; you can keep using
your existing contact email.

## 6. Review, share and keep it current

Before sharing the address, check your name, biography, claims, photo, links and contact
details on your phone and computer. Confirm that only the intended material is public.

To update it later, tell your coding assistant or helper what changed, review the
result, then publish the update. With the GitHub connection enabled, accepted changes
to the configured production branch trigger a new deployment. Editing a document in
SharePoint or another source folder does not automatically change the website.

Keep the domain renewal current and retain access to both accounts. Your website
files and their history stay in your GitHub repository, ready for another helper to use.

---

## Developer notes

The notes below describe **finlaymccall.com itself**. It is a single-page site built
with [Astro](https://astro.build) and deployed to **Cloudflare Workers**. People making
their own sites should use their own names, content and deployment settings.

### Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

### Structure

```
src/
  pages/index.astro     the whole page
  styles/global.css     all styles; palette, type, and spacing live in :root variables
public/
  favicon.svg
  finlay-mccall.jpg     portrait (duotoned at render time by an inline SVG filter)
  og.png                social sharing image (1200x630)
  robots.txt
astro.config.mjs        site URL and sitemap integration
```

### Editing content

All copy lives in `src/pages/index.astro`. To retune the look (colours, fonts, spacing),
edit the `:root` variables at the top of `src/styles/global.css`. The site uses Spectral
(serif headings) and Inter (sans body), self-hosted via `@fontsource` packages imported
at the top of `index.astro`.

### Contact email

The address `hi@finlaymccall.com` is never written as plain text in the markup. It is
assembled at runtime by a small inline script (see the bottom of `index.astro`), which
defeats most automated harvesting. Cloudflare email obfuscation adds a second layer.

Mail is handled with a free setup: Cloudflare Email Routing forwards inbound mail to a
personal inbox, and Gmail "Send mail as" sends and replies as the domain address.

### Deploy

The site runs as a Cloudflare Worker (not Cloudflare Pages). See
[DEPLOYMENT.md](./DEPLOYMENT.md) for the full setup, how deploys are triggered, and
how to roll back.
