import markdown from '$lib/assets/markdown/aschild.md?raw';
import {parseMarkdown} from '$lib/server/utils';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async () => {
  const {html} = await parseMarkdown(markdown);
  return {html};
};
