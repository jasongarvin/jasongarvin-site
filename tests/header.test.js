import { describe, test, expect } from 'vitest';
import { renderAstroComponent } from '/tests/helpers.ts';
import Header from '/src/components/Header.astro';

describe('Header', () => {
  test("Blog link is present in header", async () => {
    const result = await renderAstroComponent(Header);

    const blogLink = result.querySelector('a[href="/blog/"]');
    console.log(blogLink);

    expect(blogLink).not.toBeNull();
    expect(blogLink.textContent).toEqual('Blog');
  }),
  test("About link is present in header", async () => {
    const result = await renderAstroComponent(Header);

    const aboutLink = result.querySelector('a[href="/about"]');
    console.log(aboutLink);

    expect(aboutLink).not.toBeNull();
    expect(aboutLink.textContent).toEqual('About');
  }),
  test("Contact link is present in header", async () => {
    const result = await renderAstroComponent(Header);

    const contactLink = result.querySelector('a[href="/contact"]');
    console.log(contactLink);

    expect(contactLink).not.toBeNull();
    expect(contactLink.textContent).toEqual('Contact');
  })
});
