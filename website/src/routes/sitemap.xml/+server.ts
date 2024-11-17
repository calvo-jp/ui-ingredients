import type {RequestHandler} from '@sveltejs/kit';
import {LINKS} from '../utils';

export const GET: RequestHandler = async ({url: {origin}}) => {
  const urls = LINKS.map((link) => link.links)
    .flat()
    .map((link) => `${origin}${link.path}`);

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
