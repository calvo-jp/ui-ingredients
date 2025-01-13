import {parseMarkdown} from '$lib/utils';
import type {ServerLoad} from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';

export const load: ServerLoad = async () => {
  const location = path.resolve('src/lib/assets/markdown/getting-started.md');

  const markdown = await fs.readFile(location, 'utf-8');
  const {html} = await parseMarkdown(markdown);

  return {html};
};
