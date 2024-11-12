import {COMPONENTS} from '$lib/const';
import {parseMarkdown} from '$lib/parse-markdown';
import {error} from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const component = COMPONENTS.find((c) => c.slug === params.slug);

  if (!component) return error(404);

  const location = path.resolve(process.cwd(), component.docsPath);
  const content = await fs.readFile(location, {encoding: 'utf-8'});
  const html = await parseMarkdown(content);

  return {
    html,
    slug: component.slug,
    icon: component.anatomyIcon,
    apiJson: component.apiJson,
  };
};
