import environmentProviderMarkdown from '$lib/assets/markdown/environment-provider.md?raw';
import highlightMarkdown from '$lib/assets/markdown/highlight.md?raw';
import localeProviderMarkdown from '$lib/assets/markdown/locale-provider.md?raw';
import portalMarkdown from '$lib/assets/markdown/portal.md?raw';
import presenceMarkdown from '$lib/assets/markdown/presence.md?raw';
import {parseMarkdown} from '$lib/server/utils';
import type {UtilityId} from '$lib/types';
import {parseEnum} from '$lib/utils';
import {error} from '@sveltejs/kit';
import {z} from 'zod';
import type {EntryGenerator, PageServerLoad} from './$types';

const MARKDOWN = {
  'environment-provider': environmentProviderMarkdown,
  highlight: highlightMarkdown,
  'locale-provider': localeProviderMarkdown,
  portal: portalMarkdown,
  presence: presenceMarkdown,
} satisfies Record<UtilityId, unknown>;

export const prerender = true;

export const entries: EntryGenerator = () => {
  return Object.keys(MARKDOWN).map((id) => ({id}));
};

export const load: PageServerLoad = async ({params}) => {
  const id = parseEnum(Object.keys(MARKDOWN), params.id);

  if (!id) return error(404);

  const {html, meta} = await parseMarkdown(MARKDOWN[id]);
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
