import {parseMarkdown} from '$lib/utils';
import type {ServerLoad} from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';

export const load: ServerLoad = async () => {
  const location = path.join(
    process.cwd(),
    'src/lib/assets/markdown/styling.md',
  );

  const markdown = await fs.readFile(location, 'utf-8');
  const {html} = await parseMarkdown(markdown);

  return {html};
};
