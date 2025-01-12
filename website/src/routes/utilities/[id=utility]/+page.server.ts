import type {UtilityId} from '$lib/types';
import {parseMarkdown} from '$lib/utils';
import fs from 'node:fs/promises';
import path from 'node:path';
import type {PageServerLoad} from './$types';

const filenames: Record<string, string> = {
  'environment-provider': 'environment-provider.md',
  'locale-provider': 'locale-provider.md',
  highlight: 'highlight.md',
  portal: 'portal.md',
  presence: 'presence.md',
} satisfies Record<UtilityId, string>;

export const load: PageServerLoad = async ({params}) => {
  const location = path.join(
    process.cwd(),
    'src/lib/assets/markdown',
    filenames[params.id],
  );

  const markdown = await fs.readFile(location, 'utf-8');
  const {html} = await parseMarkdown(markdown);

  return {html};
};
