import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Blog | Jason Garvin',
    description: 'Visit my blog, covering topics such as productivity, business, web development, and design. Expect a focus on UX and experience-driven design.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      publishDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
