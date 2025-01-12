import rehypeShiki from '@shikijs/rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import {matter} from 'vfile-matter';

export async function parseMarkdown(value: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkFrontmatter)
    .use(() => (_tree, file) => matter(file))
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeShiki, {
      themes: {
        light: 'min-light',
        dark: 'dark-plus',
      },
    })
    .use(rehypeExternalLinks, {
      rel: ['noreferrer', 'noopener'],
      target: '_blank',
    })
    .use(rehypeStringify)
    .process(value);

  return {
    html: file.toString(),
    meta: file.data.matter,
  };
}
