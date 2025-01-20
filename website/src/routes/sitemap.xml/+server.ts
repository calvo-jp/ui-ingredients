import {components, overview, utilities} from '.velite';
import type {RequestHandler} from '@sveltejs/kit';

const paths = [
  ...overview.map((item) => (item.id === 'introduction' ? '/' : `/${item.id}`)),
  ...components.map((item) => `/components/${item.id}`),
  ...utilities.map((item) => `/utilities/${item.id}`),
];

export const GET: RequestHandler = async ({url: {origin}}) => {
  const urls = paths.map((path) => `${origin}${path}`);

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
