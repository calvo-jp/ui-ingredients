import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import {unified} from 'unified';

export async function parseMarkdown(doc: string) {
  const parser = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeStringify);

  const vfile = await parser.process(doc);

  return vfile.toString();
}
