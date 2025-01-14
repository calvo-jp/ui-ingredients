import markdown from '$lib/assets/markdown/introduction.md?raw';
import {parseMarkdown} from '$lib/server/utils';
import type {ServerLoad} from '@sveltejs/kit';

export const load: ServerLoad = async () => {
  const {html} = await parseMarkdown(markdown);

  return {html};
};
