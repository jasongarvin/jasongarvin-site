import { describe, test, expect } from 'vitest';
import { renderAstroComponent } from '/tests/helpers.ts';
import Footer from '/src/components/Footer.astro';

describe('Footer', () => {
  // Test internal links
  test("Home link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const homeLink = result.querySelector('a[href="/"]');
    console.log(homeLink);

    expect(homeLink).not.toBeNull();
    expect(homeLink.innerHTML).toEqual('Home');
  }),
  test("Blog link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const blogLink = result.querySelector('a[href="/blog/"]');
    console.log(blogLink);

    expect(blogLink).not.toBeNull();
    expect(blogLink.innerHTML).toEqual('Blog');
  }),
  test("Projects link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const projectsLink = result.querySelector('a[href="/projects/"]');
    console.log(projectsLink);

    expect(projectsLink).not.toBeNull();
    expect(projectsLink.textContent).toEqual('Projects');
  }),
  test("Contact link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const contactLink = result.querySelector('a[href="/contact"]');
    console.log(contactLink);

    expect(contactLink).not.toBeNull();
    expect(contactLink.textContent).toEqual('Contact');
  }),

  // Test social links
  test("BlueSky link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const bskyLink = result.querySelector('a[href="https://bsky.app/profile/jasongarvin.bsky.social"]');
    console.log(bskyLink);

    expect(bskyLink).not.toBeNull();
    expect(bskyLink.textContent).includes('BlueSky');
    expect(bskyLink.innerHTML).includes('fa-bluesky');
  }),
  test("GitHub link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const githubLink = result.querySelector('a[href="https://github.com/jasongarvin"]');
    console.log(githubLink);

    expect(githubLink).not.toBeNull();
    expect(githubLink.textContent).includes('GitHub');
    expect(githubLink.innerHTML).includes('fa-github-alt');
  }),
  test("Instagram link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const instaLink = result.querySelector('a[href="https://instagram.com/jasonagarvin"]');
    console.log(instaLink);

    expect(instaLink).not.toBeNull();
    expect(instaLink.textContent).includes('Instagram');
    expect(instaLink.innerHTML).includes('fa-instagram');
  }),
  test("LinkedIn link is present in footer", async () => {
    const result = await renderAstroComponent(Footer);

    const linkedinLink = result.querySelector('a[href="https://www.linkedin.com/in/jasonagarvin/"]');
    console.log(linkedinLink);

    expect(linkedinLink).not.toBeNull();
    expect(linkedinLink.textContent).includes('LinkedIn');
    expect(linkedinLink.innerHTML).includes('fa-linkedin-in');
  })
});
