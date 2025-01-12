import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
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
    .use(remarkFrontmatter)
    .use(() => (tree, file) => matter(file))
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(value);

  return file.toString();
}
