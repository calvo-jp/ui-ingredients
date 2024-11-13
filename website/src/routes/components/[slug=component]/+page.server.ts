import {COMPONENTS} from '$lib/const';
import {parseMarkdown} from '$lib/parse-markdown';
import {error} from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import {z} from 'zod';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const component = COMPONENTS.find((c) => c.slug === params.slug);

  if (!component) return error(404);

  const {slug, apiJson, anatomyIcon, docsPath, preview} = component;

  const markdownPath = path.resolve(process.cwd(), docsPath);
  const markdownContent = await fs.readFile(markdownPath, {encoding: 'utf-8'});

  const {html, meta} = await parseMarkdown(markdownContent);

  const {name, description} = z
    .object({
      name: z.string(),
      description: z.string(),
    })
    .parse(meta);

  return {
    slug,
    html,
    name,
    apiJson,
    description,
    anatomyIcon,
    preview,
  };
};
