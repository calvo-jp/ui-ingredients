import {components, overview, utilities} from '.velite';
import type {RequestHandler} from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async ({url: {origin}}) => {
  const urls = [
    ...components.map((item) => item.permalink),
    ...utilities.map((item) => item.permalink),
    ...overview.map((item) => item.permalink),
  ].map((path) => `${origin}${path}`);

  const content = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}
  </urlset>`;

  return new Response(content, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
