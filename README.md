# Jason Garvin's website - v1.0

[![pages-build-deployment](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment)

Hello and welcome to my website's source code!

This is where my personal website is hosted, including information about me and my blog content.

## What's in the repo

Included in this repository is eveerything needed to keep my website running, and all necessary metadata and files. Since the site is deployed using GitHub pages, there's nothing behind the scenes besides what's included here.

Mainly, that means:

- CNAME: file to provide the canonical URL for my site
- Sitemap (sitemap.xml): a xml encoding of all indexed site pages and necessary metadata about each
- Icons (various sizes): the favicon for the site provided in a variety of sizes and formats to meet each browser's needs
- Robots file (robots.txt): manages web scraper/spider permissions and disallows directories
- Appcache (manifest.appcache): cacheable metadata about what to cache locally, what requires a network connection, and what to serve if the user is offline
- Web Manifest (manifest.webmanifest): serves different formats of icon depending on the user's environment/device
- License: the good ol' MIT license for open-source fair use
- README: you're reading it now
- Site files: all the HTML, CSS, and JavaScript that actually power and display my site

Feel free to browse around to see how everything's wired up.

The website is written using as much semantic HTML as possible to ease accessibility woes, plus standard CSS and vanilla JavaScript (ES6).

I'm using normalize.css to get all the different browsers to, by default, display my content as similarly as possible.

I'm also using a variety of small scripts to control functionality and flair, mostly done for UX improvements or to serve specific content. JavaScript is used to handle form submissions, taking over the default HTML submission flow to provide better feedback to the user.

Since this is a static site, form submissions are routed through formspree so I don't need to wire up any kind of API or backend.

Finally, the site has my Google Tag embedded in each page for analytics and search engine optimization (SEO).

## 3rd Party Tools & Libraries

Since this is a static site with no proper back-end, I'm using a variety of tools to make certain functions easier and save development/maintenence time.

- Forms - all my forms use [formspree](https://formspree.io/) as the endpoint
- Code Highlights - code highlighting and language-specific display comes from [highlight.js](https://highlightjs.org/)
- Share Buttons - the blog share buttons come from [AddToAny](https://www.addtoany.com/)

All three are free (or I'm only using the free plan) and have been huge time savers so far.

## Upcoming changes

Now that I've achieved 1.0, the major design of the site likely won't change too much (in the near future at least).

Next I'm looking at a potential rehost to Cloudflare Pages from GitHub Pages to enable more customization, pseudobackend functionality, and a whole host of better options. But GitHub Pages is pretty cool and has been working great so far.

I will also include a portfolio section at some point, as well as make some changes to what information is included in the site overall.

Most likely, the Updates section will be sunset and replaced by a "Notes" feature within my blog for short-form content including my Threads content.

The old code from the previous iteration of the website is also going away soon, so if you want to check that out please do so now.
