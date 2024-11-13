import {dev} from '$app/environment';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import {unified, type Plugin} from 'unified';
import {matter} from 'vfile-matter';
import {createLruCache} from './create-lru-cache';

interface CacheValue {
  data: unknown;
  html: string;
}

const cache = createLruCache<string, CacheValue>(64);

const frontmatterParser: Plugin = () => {
  return function (node, file) {
    return matter(file, {
      strip: true,
    });
  };
};

export async function parseMarkdown(doc: string) {
  const cached = cache.get(doc);

  if (cached && !dev) return cached;

  const parser = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(frontmatterParser)
    .use(remarkGfm)
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeShiki, {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    })
    .use(rehypeStringify);

  const file = await parser.process(doc);
  const data = file.data.matter;
  const html = file.toString();

  cache.set(doc, {
    html,
    data,
  });

  return {
    data,
    html,
  };
}
