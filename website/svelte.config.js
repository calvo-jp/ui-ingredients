// @ts-check
import adapter from '@sveltejs/adapter-vercel';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x',
    }),
    alias: {
      '.velite': 'src/.velite',
    },
  },
  compilerOptions: {
    runes: true,
  },
};

export default config;
