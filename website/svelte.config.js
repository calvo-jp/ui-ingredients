import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {escapeSvelte, mdsvex} from 'mdsvex';
import {createHighlighter} from 'shiki';

const highlighter = await createHighlighter({
  themes: ['min-light', 'dark-plus'],
  langs: ['svelte', 'javascript', 'typescript'],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter(code, lang = 'text') {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, {
              lang,
              themes: {
                light: 'min-light',
                dark: 'dark-plus',
              },
            }),
          );

          return `{@html \`${html}\` }`;
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
