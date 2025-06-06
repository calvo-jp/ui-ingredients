import type {RequestHandler} from '@sveltejs/kit';

const content = `
  User-agent: *
  Allow: /
`
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean)
  .join('\n');

export const GET: RequestHandler = () => {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
