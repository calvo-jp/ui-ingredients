import {allComponents, type ComponentAnatomyName} from '@zag-js/anatomy-icons';
import fs from 'fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import {renderToString} from 'react-dom/server';
import svgson from 'svgson';
import colors from 'tailwindcss/colors.js';

const WORKSPACE_ROOT = path.resolve(path.dirname('../..'));
const OUTPUT_DIR = path.join(
  WORKSPACE_ROOT,
  'website/src/lib/generated/anatomy-icons',
);

export async function generateAnatomyIcons() {
  const keys = Object.keys(allComponents) as ComponentAnatomyName[];

  const filenames: string[] = [];
  const promises: Promise<void>[] = [];

  for (const key of keys) {
    const jsx = await allComponents[key]({accentColor: colors.indigo[500]});
    const svg = renderToString(jsx);
    const filename = `${key}-anatomy.svelte`;
    const content = await formatSvelte(await svgToSvelteComponent(svg));
    const promise = fs.writeFile(
      path.join(OUTPUT_DIR, filename),
      content,
      'utf-8',
    );

    promises.push(promise);
    filenames.push(filename);
  }

  promises.push(createBarrelFile(filenames));

  await Promise.all(promises);
}

async function createBarrelFile(filenames: string[]) {
  const content = filenames
    .toSorted((a, b) => a.localeCompare(b))
    .map((filename) => {
      const basename = filename.split('.')[0];
      const exportName = `${kebabToPascalCase(basename)}Icon`;

      return `export {default as ${exportName}} from './${filename}';\n`;
    })
    .join('');

  await fs.writeFile(
    path.join(OUTPUT_DIR, 'index.ts'),
    await formatTs(`/* ⚠️ This file is auto-generated */\n${content}`),
    'utf-8',
  );
}

function kebabToPascalCase(str: string) {
  return str
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

async function svgToSvelteComponent(html: string) {
  const node = await svgson.parse(html, {
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            $$props: '',
          },
        };
      }

      return node;
    },
  });

  const svelteSvg = svgson.stringify(node, {
    transformAttr(key, value, esc) {
      return key === '$$props' ? '{...props}' : `${key}="${esc(value)}"`;
    },
  });

  return `
    <script lang="ts">
      /* ⚠️ This file is auto-generated */

      import type {SVGAttributes} from 'svelte/elements';

      let {...props}: SVGAttributes<SVGSVGElement> = $props(); 
    </script>

    ${svelteSvg}
  `;
}

const PRETTIER_CONFIG_PATH = path.join(WORKSPACE_ROOT, '.prettierrc');

async function formatTs(content: string) {
  const prettierConfig = await prettier.resolveConfig(PRETTIER_CONFIG_PATH);

  return await prettier.format(content, {
    parser: 'typescript',
    ...prettierConfig,
  });
}

async function formatSvelte(content: string) {
  const prettierConfig = await prettier.resolveConfig(PRETTIER_CONFIG_PATH);

  return await prettier.format(content, {
    parser: 'html',
    ...prettierConfig,
  });
}

await generateAnatomyIcons();
