import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import {unified} from 'unified';
import {createLruCache} from './create-lru-cache';

const cache = createLruCache<string, string>(64);

export async function parseMarkdown(doc: string) {
  const cached = cache.get(doc);

  if (cached) return cached;

  const parser = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeStringify);

  const file = await parser.process(doc);
  const html = file.toString();

  cache.set(doc, html);

  return html;
}
