# Jason Garvin's website - v2.1, the blog update

[![pages-build-deployment](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jasongarvin/jasongarvin.github.io/actions/workflows/pages/pages-build-deployment)

Hello and welcome to my website's source code!

This is where my personal website is hosted, including information about me and my blog content.

## What's in the repo

Included in this repository is everything needed to keep my website running, including all necessary metadata and files. Since the site is deployed using Cloudflare Workers as a static site, there's nothing behind the scenes besides what's here.

In the public folder are raw assets served as-is, including:

- Icons (various sizes): the favicon for the site provided in a variety of sizes and formats to meet each browser's needs, served through head metadata
- Robots file (robots.txt): manages web scraper/spider permissions and disallows directories
- Appcache (manifest.appcache): cacheable metadata about what to cache locally, what requires a network connection, and what to serve if the user is offline
- Web Manifest (manifest.webmanifest): serves different formats of icon depending on the user's environment/device
- License: the good ol' MIT license for open-source fair use
- README: hey, you're reading it now

Then, a few assets are compiled at build time and added to the root of the website:

- Sitemap (sitemap.xml): a xml encoding of all indexed site pages and necessary metadata about each, generated using the Astro Sitemap module

The website is written using Astro to encapsulate reusable components and layouts, which reduces boilerplate code and improves site maintainability. These files generate as much semantic HTML as possible to ease accessibility woes, paired with standard CSS and vanilla JavaScript (ES6).

I'm using normalize.css to make the site as consistent as possible regardless of browser.

I'm also using a variety of small scripts to control functionality and flair, mostly done for UX improvements or to serve specific content. JavaScript is used to handle form submissions, taking over the default HTML submission flow to provide better feedback to the user and route it to my Formspree endpoint.

## 3rd Party Tools & Libraries

Since this is a static site with no proper back-end, I'm using a variety of tools to make certain functions easier and save development/maintenence time.

- Astro - the engine behind the site that lets me compose pages with reusable components and layouts, then builds everything into static files for distribution
- Forms - all my forms use [formspree](https://formspree.io/) as the endpoint
- Icons - the social media icons and other widget icons are loaded from [FontAwesome](https://fontawesome.com/)

All 3rd party tools are free (or I'm only using the free plan) and have been huge time savers so far.

## Changelog

2.1 - make many updates to the blog, including an RSS feed for the first time ever. Also added tags and filtering so blog posts can be searched by topic, and cleaned up blog feed generation to use Astro collections to load and serve content rather than manually maintaining a blog post JSON index (can you believe I was doing that by hand? Insanity). Oh, and I also started adding tests to my codebase.

2.0.1 - add a basic testing suite for core components and clean up build process.

2.0 - introduce a huge number of redesigned elements and refactored code, meaning the website looks mostly the same but functions *entirely differently* under the hood.

### Upcoming Changes

In v2.2, I'll be making some under the hood changes, including exploring self-hosted icons or Lucide icons instead of using FontAwesome (to avoid unnecessary JavaScript on load).

I'll also be launching my business card subpage [card.jasongarvin.com](card.jasongarvin.com) to host a digital version of my business card right on my website for easy sharing--if you click on it right now you'll get a 404 but it will be live in the future.
