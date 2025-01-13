import type {UtilityId} from '$lib/types';
import {parseEnum, parseMarkdown} from '$lib/utils';
import {error} from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import {z} from 'zod';
import type {PageServerLoad} from './$types';

const filenames: Record<string, string> = {
  'environment-provider': 'environment-provider.md',
  highlight: 'highlight.md',
  'locale-provider': 'locale-provider.md',
  portal: 'portal.md',
  presence: 'presence.md',
} satisfies Record<UtilityId, string>;

export const load: PageServerLoad = async ({params}) => {
  const id = parseEnum<UtilityId>(
    [
      'environment-provider',
      'highlight',
      'locale-provider',
      'portal',
      'presence',
    ],
    params.id,
  );

  if (!id) return error(404);

  const location = path.resolve('src/lib/assets/markdown', filenames[id]);

  const markdown = await fs.readFile(location, 'utf-8');
  const {html, meta} = await parseMarkdown(markdown);

  const {title, description} = z
    .object({
      title: z.string(),
      description: z.string(),
    })
    .parse(meta);

  return {
    id,
    html,
    title,
    description,
  };
};
