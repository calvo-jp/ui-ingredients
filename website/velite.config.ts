import rehypeShiki from '@shikijs/rehype';
import path from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import {defineCollection, defineConfig, s} from 'velite';

const schema = s.object({
  id: s.unique('id'),
  title: s.string(),
  description: s.string(),
  beta: s.boolean().optional().default(false),
  content: s.markdown(),
  toc: s.toc({
    maxDepth: 3,
    minDepth: 2,
  }),
  metadata: s.metadata(),
  keywords: s.array(s.string()).optional().default([]),
});

const overview = defineCollection({
  name: 'Overview',
  pattern: 'overview/**/*.md',
  schema: schema.transform((value) => ({
    ...value,
    permalink: `/overview/${value.id}`,
  })),
});

const components = defineCollection({
  name: 'Components',
  pattern: 'components/**/*.md',
  schema: schema.transform((value) => ({
    ...value,
    permalink: `/components/${value.id}`,
  })),
});

const utilities = defineCollection({
  name: 'Utilities',
  pattern: 'utilities/**/*.md',
  schema: schema.transform((value) => ({
    ...value,
    permalink: `/utilities/${value.id}`,
  })),
});

export default defineConfig({
  root: path.resolve('src/content'),
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
      [
        rehypeShiki as never,
        {
          themes: {
            light: 'min-light',
            dark: 'github-dark',
          },
        },
      ],
    ],
  },
  collections: {
    overview,
    components,
    utilities,
  },
  output: {
    clean: true,
    assets: 'static',
    data: 'src/.velite',
  },
});
