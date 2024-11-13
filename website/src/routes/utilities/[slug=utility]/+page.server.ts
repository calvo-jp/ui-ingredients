import {UTILITIES} from '$lib/const';
import {parseMarkdown} from '$lib/parse-markdown';
import {error} from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import {z} from 'zod';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const details = UTILITIES.find((c) => c.slug === params.slug);

  if (!details) return error(404);

  const markdownPath = path.resolve(process.cwd(), details.markdownPath);
  const markdownContent = await fs.readFile(markdownPath, {encoding: 'utf-8'});

  const {html, meta} = await parseMarkdown(markdownContent);
  const {name, description} = z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .parse(meta);

  return {
    html,
    name: {
      formal: details.name,
      pascal: name,
    },
    slug: details.slug,
    description,
  };
};
