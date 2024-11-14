import {dev} from '$app/environment';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified, type Plugin} from 'unified';
import {matter} from 'vfile-matter';
import {createLruCache} from './create-lru-cache';

interface ParsedMarkdown {
  html: string;
  meta: unknown;
}

const cache = createLruCache<string, ParsedMarkdown>(64);

const frontmatterParser: Plugin = () => {
  return function (node, file) {
    return matter(file, {
      strip: true,
    });
  };
};

export async function parseMarkdown(doc: string) {
  if (!dev) {
    const cached = cache.get(doc);

    if (cached) return cached;
  }

  const parser = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(frontmatterParser)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeShiki, {
      themes: {
        light: 'min-light',
        dark: 'dark-plus',
      },
    })
    .use(rehypeStringify);

  const file = await parser.process(doc);
  const meta = file.data.matter;
  const html = file.toString();

  const parsed: ParsedMarkdown = {
    html,
    meta,
  };

  if (!dev) cache.set(doc, parsed);

  return parsed;
}
