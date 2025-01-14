import {parseMarkdown} from '$lib/server/utils';
import type {UtilityId} from '$lib/types';
import {parseEnum} from '$lib/utils';
import {error} from '@sveltejs/kit';
import {z} from 'zod';
import type {PageServerLoad} from './$types';

const markdowns = import.meta.glob('$lib/assets/markdown/*.md', {
  query: '?raw',
  import: 'default',
});

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

  const filename = filenames[id];
  const module = Object.entries(markdowns).find(([path]) =>
    path.endsWith(filename),
  )?.[1];

  if (!module) return error(404);

  const content = await module();

  const {html, meta} = await parseMarkdown(content as string);
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
