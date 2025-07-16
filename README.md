# Jason Garvin's website - v2.0

[![pages-build-deployment](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment)

(TODO: needs update for Astro build)

Hello and welcome to my website's source code!

This is where my personal website is hosted, including information about me and my blog content.

## What's in the repo

Included in this repository is everything needed to keep my website running, including all necessary metadata and files. Since the site is deployed using Cloudflare Pages, there's nothing behind the scenes besides what's here.

Mainly, that means:

- CNAME: file to provide the canonical URL for my site
- Sitemap (sitemap.xml): a xml encoding of all indexed site pages and necessary metadata about each
- Icons (various sizes): the favicon for the site provided in a variety of sizes and formats to meet each browser's needs
- Robots file (robots.txt): manages web scraper/spider permissions and disallows directories
- Appcache (manifest.appcache): cacheable metadata about what to cache locally, what requires a network connection, and what to serve if the user is offline
- Web Manifest (manifest.webmanifest): serves different formats of icon depending on the user's environment/device
- License: the good ol' MIT license for open-source fair use
- README: hey, you're reading it now
- Site files: all the HTML, CSS, and JavaScript that actually power and display my site, rendered using Astro

Feel free to browse around to see how everything's wired up.

The website is written using Astro to encapsulate reusable components and reduce boilerplate as much as possible (not to mention make it easier to maintain). These files try to generate as much semantic HTML as possible to ease accessibility woes, plus standard CSS and vanilla JavaScript (ES6).

I'm using normalize.css to make the site as consistent as possible regardless of browser.

I'm also using a variety of small scripts to control functionality and flair, mostly done for UX improvements or to serve specific content. JavaScript is used to handle form submissions, taking over the default HTML submission flow to provide better feedback to the user.

Since this is a static site, form submissions are routed through formspree so I don't need to wire up any kind of API or backend.

## 3rd Party Tools & Libraries

Since this is a static site with no proper back-end, I'm using a variety of tools to make certain functions easier and save development/maintenence time.

- Astro - the engine behind the site that lets me compose pages with reusable components and layouts, then builds everything into static files for distribution
- Forms - all my forms use [formspree](https://formspree.io/) as the endpoint
- Code Highlights - code highlighting and language-specific display comes from [highlight.js](https://highlightjs.org/)

All 3rd party tools are free (or I'm only using the free plan) and have been huge time savers so far.

## Upcoming changes

2.0 introduced a huge number of redesigned elements and refactored code, meaning the website looks mostly the same but functions *entirely differently* under the hood.

In 2.1, I'll be doing a full website redesign for aesthetics.
