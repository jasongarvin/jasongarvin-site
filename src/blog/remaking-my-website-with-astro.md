---
title: "Remaking my Website With Astro"
description: "My website is just about two years old, and it was time for an upgrade. I used Astro to recreate how my website is built and published."
canonicalUrl: "https://jasongarvin.com/blog/posts/remaking-my-website-with-astro"
contentCategory: "Technology"
publishDate: "2025-11-02"
editDate: ""
tags: ["productivity", "technology", "coding"]
---

Phew, I did it. I remade my whole website.

But wait, you might say, it looks the same! And to you I say: well, yes, that’s true. But! If you inspect it and look at the code, you’ll find it’s unrecognizable from the old site.

Imagine that on the outside you’re the same, but a doctor went in and replaced your entire skeleton with a superior super-skeleton, and now you’re halfway Terminator and halfway human. That’s basically what I did to this site.

So, let’s talk about it. How did I decide it was time to upgrade, and what was the process like? If you’re at all interested in coding your own website, or updating an existing site, I hope my thought process is helpful to you.

## Why Re-Code My Website?

The blog was my main motivator&mdash;it was incredibly tedious to maintain.

When I first coded my website, I decided to do it all by hand: just raw html, css, and a bit of javascript for flavor and functionality. That worked great, and helped me get a static site up quickly and efficiently. Plus, it was easy to learn and maintain because I didn’t need to know much about web development.

As the site grows, however, and specifically as more blog posts go live, it gets incrementally harder to keep up with maintenance.

If I want to update a link in the header, or change the footer design, I’ve been manually adjusting each page’s code, inevitably missing one or two pages only to catch it a month later while browsing the site. Right now that means I’m hand-coding 24 pages. Each time I add a page or a section, then, that number grows.

At a certain point I realized this is creating extra work for me. Not a small amount, either, but a steadily growing, tedious ascent which makes me less and less likely to make design changes.

That’s bad because I want to update the design (coming soon).

The takeaway is that I decided to change how I build my website in pursuit of being able to easily add new content and adjust existing content. That’s one of the biggest benefits to using a framework or a website builder.

But, I also don’t want to give up the flexibility that coding my own website allows and move to something like, say, [WordPress](https://wordpress.org/) or [Framer](https://www.framer.com/) even though they’re both great tools.

To find a happy medium, I started exploring front-end development technologies that make it easier to generate a static site that I could still push live to Cloudflare Pages, which I’ve so far been happy with using for hosting.

## Too Many Framework Options

Seriously though, there are so many front-end static site generation tools and options.

Some of them are super minimal and easy to launch, like using Jekyll or Gatsby. They work with GitHub pages and make page creation a breeze by converting markdown documents into whole web pages.

The downside is that I already built my website and I don’t want to throw away that work, and I’m happy with the flexibility I have in controlling my website using raw HTML.

So I wanted to find something that gave me even more flexibility and control while also allowing me to make quick design changes site-wide without having to go into each page by hand. This led me to exploring frameworks that specifically encouraged the use of components: small bits of code you can compose into any block of code, from any of those pages, making them easy to edit and maintain.

At first I taught myself to use Vue, a JavaScript front-end framework that boasts single-file components as its main selling point. I found it easy to learn and I did quite a bit of work in exploring how to build out websites using it.

In the end, though, it felt like I was over-engineering everything. While I loved the overall functionality, it was a bit of overkill for my humble personal site.

Plus, it’s like the slightly-less-popular but still cool younger sibling of React, which is, I don’t know, the most famous JavaScript library maybe ever? So I taught myself React.

What I didn’t realize at the time is that React is mostly a UI framework that helps create, well, reactivity on websites and web applications. Which is useful for doing cool things on my site in the distant future, but also doesn’t help with static site generation much on its own.

Instead, to make and launch a website, you use a library or framework on top of React, like Next.js or Vite. I explored both and they felt similar to Vue: powerful, interesting, easy to learn, but ultimately like too much technology for this site.

Remember, my whole goal is to make things as lean and easy to maintain as possible.

Enter [Astro](https://astro.build/). By its own admission, Astro defines itself as “the web framework for content-driven websites,” and that’s exactly what I need. It’s a small library powered by JavaScript and Node that lets me compose website components similarly to Vue, but without a lot of the extraneous features.

Plus, Astro builds those components and pages into a static site which I can serve to my Cloudflare Pages server (this is exactly how you’re reading this right now), keeps the file sizes lean, and ensures snappy loading of minified resources so my pages are delivered efficiently.

As you can maybe tell from me singing its praises, Astro is what I chose to use.

The downside is it makes my HTML look like mush. Class names aren’t esepcially comprehensible, and sometimes inspecting the site looks more unclean than it did when everything was hand-coded HTML, but the tradeoff is it’s really easy to update my site and push a new build to the internet.

Plus, it integrates with React and other convenient tools like automatically generating my sitemap so I don’t keep forgetting to add new pages to it, and abstracts away a lot of the fiddly metadata work I’ve been doing manually up until now.

Great, awesome. We did it! Post over.

Except then I had to actually rebuild my website. Shit.

## Rebuilding a Website Takes Time

Have you ever renovated a house? Yeah, it’s like that except it's a lot less dusty.

First I had to teach myself how Astro works. Thankfully they have many tutorials on their website, plus comprehensive documentation, so I was able to build a couple of quick test projects to make sure I understood how it all works.

You can actually check out [the first website I built with Astro](https://jasongarvin.github.io/extinct-eclipse/) and, while basic, it's a good example of what it looks like to get started with a new framework.

Next, I forked the repository for my website. If you’re non-technical, that basically means I made a new, separate version of my website I could adjust without affecting the live site so I could get started with the renovations.

### Making My Existing Content Astro-Friendly

While Astro is intuitive, I still had to convert all my plain ol’ HTML files and global CSS files to more localized astro-format files in the new directory system.

In the end, it was more of a rearrange or a redecoration rather than an outright renovation. Most of my pages were the same HTML as before, just with different methods of handling links and importing files. I still had a global CSS file that rendered the styles sitewide, and all my pages were still fully individualized.

To reformat my CSS, I took pieces of CSS from the global file and localized them to each component. Instead of my contact form’s styles being in a separate file, it’s now contained in a component called ContactForm.astro, which includes the functionality, code, and style in one place and can be called from other components.

Along the way, I also had to update a handful of config files. One at a time, I stepped through each file to make sure my Astro config file was loading resources correctly and setting up links the way I wanted so that I don’t instantly break all the existing external links to my website when I push the new version live.

Because I added a subdirectory called “posts” to my blog posts folder, I had to set up 301 routing for all the previous urls so they’d still link back to my blog posts rather than breaking everywhere on the internet I’ve shared them thus far.

```astro
redirects: {
  "/blog/overcoming-uncertainty-a-response-to-tariffs": {
    status: 301,
    destination: "/blog/posts/overcoming-uncertainty-a-response-to-tariffs"
  },
}
```

I also took this time to update some optional-but-helpful meta files like the README document for my GitHub repository so that it referenced the current site setup instead of talking about an old, nonexistent version of the site. It would be awkward to have all this documentation referencing a version of the site that functionally doesn't exist.

Next up: refactoring out reusable components like my header and footer into separate files I can easily import into all my actual pages.

### Creating Components with Astro

The purpose here is to avoid that nasty situation where adding a header link meant checking 24 pages and manually adding the HTML. Instead, this lets me update the header in one place and have it load across every page. Neat.

I started with the header, and broke that out into its own component called Header.astro. That file gets nested in the components subdirectory so I can call it from sitewide pages in the front matter to import it.

I nabbed the styles from the global stylesheet and moved them to be local within that file, and added local imports for the scripts that control the header so they’re automatically added to any page that imports the header, saving me the inevitably mistake of forgetting to add them at the bottom of some page somewhere and breaking everything.

The links changed in format from individual anchor tags to dynamically generated through iteration. From Header.astro:

```astro
const navigationLinks = [
  {name: 'Blog', href: '/blog/'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
];

…

<ul class="main-menu">
  {navigationLinks.map((link) => (
    <li>
      <a class="menu-item" href={link.href}><span>{link.name}</span></a>
    </li>
    ))
  }
</ul>
```

This allows me to make changes for the links contained in my header in a single component file, which then dynamically generates the header links for every page.

Then I did the same thing for the footer.

Those were the two obvious choices for components: they’re on every single page, after all. But what else should I turn into a component?

It turned out the subscription box for my email newsletter (psst, you should subscribe to that) is also attached to almost every page, so I made that a component as well. Then I added the blog preview card since it gets repeated many times throughout the site, making it easier to embed blog previews in any page where it makes sense.

This led me to realizing I was still repeating a lot of code.

Sure, headers and footers and subscription boxes were in components, but I was still having to import those into nearly every page, which meant rewriting a lot of the same code, and risked forgetting to add everything to a new page.

So, I created a layout.

*For future reference, I should’ve started with the layout, because it would’ve saved me going back and rewriting each page I’d already been working on and given me back an entire afternoon to, I don’t know, see a movie or something.*

### Lean on Layouts and Templates for Efficiency

Layouts in Astro are basically extensible templates to contain your HTML, metadata, functionality, and local styles all in one convenient file.

In my case, I followed a fantastic tutorial from [CloudCannon](https://cloudcannon.com/) which taught me how to create a layout so the header, footer, and any other components that will be on every page automatically get appended to my pages. It also taught me how to procedurally generate head information for each page, meaning no more rewriting all that nasty meta information.

This ended up being my favorite part of a page layout by far: instead of having to write out the meta information in the head of each HTML page, I was able to automatically create most of that in the layout, and then plug in the few details that change page-by-page as variables.

This means by importing the layout into a page, 90% of the work setting up that page is already done. I cannot understate how amazing this feels.

Now, I instantiate three variables at the top of each new page: title, description, and url, and those get automatically applied to the relevant metadata to generate SEO-friendly information and a canonical url for each page.

That combined with adding the header, subscription box, and footer, means all I have to do when adding a new page is to add the unique page content. You know, the stuff that actually matters. Saving me hours upon hours of time writing boilerplate code.

```astro
---
import '../styles/Normalize.astro';
import '../styles/Style.astro';

import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import SubscribeBox from '../components/SubscribeBox.astro';

export interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
}

const {
  canonicalUrl,
  description,
  title
}: Props = Astro.props;
---
```

### Blogging in Markdown is The Best Way

After creating the layout for my core pages, I then went back and created a blog post-specific layout to render my blog posts how I prefer, which ended up being meaningfully different from how a regular page is laid out.

Though in hindsight I could’ve incorporated the main layout page inside this one, I don’t mind having them separate so I can better control the fine details of what I want to display on the page, and how, for specifically blog posts.

On the other hand, I do wish I’d known to convert all my blog posts into markdown files before I created this layout. Alas, that was not the case.

Instead, I first designed the layout for blog posts with each blog post as an Astro file. This meant keeping the blog posts in HTML formatting, and passing a number of values through to the layout from the front matter in these Astro files.

What I immediately realized is that Astro is designed to create blog feeds with markdown files, and that markdown files have always been, and likely will always be, easier to work with than Astro files when it comes to writing.

Why? Well, because when I draft a new post, it’s literally written in markdown. That’s the default state of my writing before I port it into the website. Creating the HTML pages meant a full extra step that was often the biggest hurdle between finishing a post and publishing it.

By having my blog posts generate from markdown files, it saves me a ridiculous amount of time hand-converting my markdown files into HTML syntax, adding classes, and fine-tuning every little detail (to be honest, I liked the control I had over the layout when they were HTML documents, but the time tradeoff really isn’t worth it).

So, okay, time to convert all my posts into the new format.

Let me tell you: it took freaking forever. First I had to rewrite the frontmatter for each post using the new markdown formatting, which ended up being easier in the end but still required a painful number of tedious edits.

```astro
---
title: "Remaking my Website With Astro"
description: "My website is just about two years old, and it was time for an upgrade. I used Astro to recreate how my website is built and published."
canonicalUrl: "https://jasongarvin.com/blog/posts/remaking-my-website-with-astro"
contentCategory: "Technology"
publishDate: "2025-11-02"
editDate: ""
tags: ["productivity", "technology", "coding"]
---
```

Then, I stripped each post of its HTML tags and reformatted everything as markdown text. I added styles for the headers, rewrote the links in markdown rather than using anchor tags, and made sure it all looked right in the new blog post layout.

A problem occurred, however: I’d been depending on CSS classes to style and link to my headings, especially in generating a table of contents, so that had to change.

Thankfully, Astro automatically catalogs the headings contained inside your markdown, so I was able to use that to dynamically generate tables of contents linking to the proper headings. This also allows for adding anchor links to each heading using a little JavaScript magic so that clicking one automatically copies its URL to the clipboard.

There were some styles I had to tweak, and one thing I gave up that I’m still bitter about. I had these little aside bubbles in my old blog posts that had a distinctly different style than the main post. They were fun, and easy to read, and easy to set up. But, there’s no way to do that from a markdown file. There’s no way to tag a section as an aside and have it generate the right HTML.

I grieved a bit, but I let it go. In the future I’ll go back to fine-tune the blog layout, I’m sure, but for right now it’s not a priority and I have to move on.

## Make Sure You Review Your Work

The core redesign was complete. Everything in place, files converted to the correct types, and layouts working properly.

If I was feeling impatient, that would’ve been considered a job well done. But no, I’m neurotic, so I went back through and checked on all the styles sitewide to make sure everything was rendering correctly.

This led to fixing the theme selector button in the footer because somehow the icon was sitting too close to the text. Done, next. I cleaned up the text on the home page so it reads better and formats correctly with the title and subtitle classes. Sweet.

Then I got sucked into about four hours of figuring out styles for code blocks. Turns out, Astro has a built-in library, Shiki, that does this for you. It also turns out that it only works conveniently in markdown files, so that’s great for the blog posts, but not for my [projects page](/projects/) which needs that to exist in raw HTML.

It took me a long time to wrangle, and in the end I’m hand-styling code blocks outside of markdown because Astro would not recognize the custom Code element no matter how many times I tried the import.

Then I fixed up a bunch of my JavaScript so the copy to clipboard buttons render properly in code blocks and actually, you know, copy the code to your clipboard. Technology is amazing.

## Publishing With Wrangler

The first step was testing my build. I ran the command and out popped my website in HTML, browser-friendly and ready to go. Except when I opened it, the styles didn't load.

Then I learned I need to preview the build rather than simply opening the HTML files like I used to be able to do when I was hand-coding everything. I felt silly, but also like I was moving meaningfully into the future, and that was cool. Still, it took me embarrassingly long to realize my code was building correctly and that I was simply previewing it wrong.

```bash
npm run preview
```

Then came time to upload. My build pipeline has always been pushing to a GitHub repository, which initiates a test and build phase, and, once passed, deploys the code to Cloudflare Pages. It had always worked, and, of course, was completely broken now.

It didn’t work at all. First, it failed the build steps on GitHub Actions. That makes sense, since I’m using a totally different framework now. Second, it also failed to build on Cloudflare but for a totally different reason.

It turns out Cloudflare has been hard at work and updated Workers so they’re the preferred method of deploying a website rather than using Pages, which is how my website had previously been hosted.

Cool, time to switch, I guess! So I followed this neat tutorial by Cloudflare on setting up a Worker for the new site, which led me to installing Wrangler to build and deploy my project, which led me to this [neat little tutorial on deploying Astro to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/).

Then it was off to the races.

To my surprise (and likely yours if you’ve ever tried to deploy anything ever), it worked on the first try! You can tell because you’re reading this right now, which would be impossible if the Cloudflare Worker or my configuration was wrong, because this is the new version of my site.

It’s the same ol’ site but with new bones, built out of the internet and code and a dream.

## We Made it to The End

Well, it’s live. Besides some minor upkeep tasks, the site is much more sustainable, easy to update, and it’s 10x easier to publish new posts (seriously, I saved so much time writing this).

Next up, I’m going to tinker with the visual design since it’s no longer so daunting. Now that I can adjust components in a single place&mdash;not to mention write styles locally inside components to keep things better contained&mdash;I can finally start to improve the site again.

It’s not that I’m unhappy with it, but rather that this has become my endless personal project where I can make little tweaks and be exactly as nitpicky as I want without it affecting anyone else. It’s like a grown-up sandbox.

The takeaway? Don’t be afraid to rewrite your code. Or, if you don’t write code, don’t be afraid to get into it and learn a new skill.

Also, be creative! Do the fun (and difficult things). It’s worth it, even when you’re busy. It’s satisfying to feel like you made something at the end of the day, and it’s a humbling experience that reminds you it’s okay to be a beginner at things sometimes.

## An Addendum on Tests

If you’ve run in coding circles for any length of time, you’ve heard of tests. For those of you who haven’t, it essentially means writing more code that tests your existing code so you’re less likely to make silly mistakes and break things when you add new things.

Thus far in my web development journey, I’ve been allergic to tests. I’ve built and maintained static sites, with very little interoperability, with very little need for JavaScript or any kind of complicated processes. That’s still true with this iteration, but honesty the reason I’ve avoided tests has been out of laziness. It’s another thing to learn and maintain and it’s intimidating because it doesn’t naturally click with my brain.

But, in rewriting this site, I decided now was a good time to overcome that hurdle. Maybe. It became immediately clear to me I have no idea what I’m doing.

*Will I implement tests? Will I continue to cowboy code this website? Find out next time.*
