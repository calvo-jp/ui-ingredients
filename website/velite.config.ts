import rehypeShiki from '@shikijs/rehype';
import path from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import {defineCollection, defineConfig, s} from 'velite';

const overview = defineCollection({
  name: 'Overview',
  pattern: 'overview/**/*.md',
  schema: s.object({
    content: s.markdown(),
    toc: s.toc({
      maxDepth: 3,
      minDepth: 2,
    }),
    metadata: s.metadata(),
  }),
});

const components = defineCollection({
  name: 'Components',
  pattern: 'components/**/*.md',
  schema: s.object({
    id: s.unique('id'),
    title: s.string(),
    description: s.string(),
    content: s.markdown(),
    toc: s.toc({
      maxDepth: 3,
      minDepth: 2,
    }),
    metadata: s.metadata(),
  }),
});

const utilities = defineCollection({
  name: 'Utilities',
  pattern: 'utilities/**/*.md',
  schema: s.object({
    id: s.unique('id'),
    title: s.string(),
    description: s.string(),
    content: s.markdown(),
    toc: s.toc({
      maxDepth: 3,
      minDepth: 2,
    }),
    metadata: s.metadata(),
  }),
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
});
