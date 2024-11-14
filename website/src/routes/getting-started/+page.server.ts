import {parseMarkdown} from '$lib/parse-markdown';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async () => {
  const markdownPath = path.resolve(
    process.cwd(),
    'src/lib/docs/getting-started.md',
  );

  const markdownContent = await fs.readFile(markdownPath, {encoding: 'utf-8'});

  const {html} = await parseMarkdown(markdownContent);

  return {
    html,
  };
};
