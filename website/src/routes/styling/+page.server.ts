import markdown from '$lib/assets/markdown/styling.md?raw';
import {parseMarkdown} from '$lib/server/utils';
import type {PageServerLoad} from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  const {html} = await parseMarkdown(markdown);
  return {html};
};
