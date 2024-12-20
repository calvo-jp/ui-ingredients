import adapter from '@sveltejs/adapter-vercel';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {escapeSvelte, mdsvex} from 'mdsvex';
import {createHighlighter} from 'shiki';

const highlighter = await createHighlighter({
  themes: ['min-light', 'dark-plus'],
  langs: ['svelte', 'bash', 'javascript', 'typescript'],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter(code, lang = 'text') {
          /** @type {string} */
          let html;

          html = highlighter.codeToHtml(code, {
            lang,
            themes: {
              light: 'min-light',
              dark: 'dark-plus',
            },
          });

          html = escapeSvelte(html);

          return `{@html \`${html}\`}`;
        },
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions: ['.svelte', '.svx'],
};

export default config;
