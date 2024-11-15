import {COMPONENTS} from '$lib/const';
import {parseMarkdown} from '$lib/parse-markdown';
import {error} from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import {z} from 'zod';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const details = COMPONENTS.find((c) => c.slug === params.slug);

  if (!details) return error(404);

  const markdownPath = path.resolve(process.cwd(), details.markdownPath);
  const markdownContent = await fs.readFile(markdownPath, {encoding: 'utf-8'});

  const {html, meta} = await parseMarkdown(markdownContent);
  const {description} = z
    .object({
      description: z.string(),
    })
    .parse(meta);

  return {
    html,
    name: details.name,
    slug: details.slug,
    apiDoc: details.apiDoc,
    dataAttrDoc: details.dataAttrDoc,
    accessibilityDoc: details.accessibilityDoc,
    anatomyIcon: details.anatomyIcon,
    description,
  };
};
