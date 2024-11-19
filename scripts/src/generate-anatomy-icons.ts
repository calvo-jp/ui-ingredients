import {allComponents, createGradient} from '@zag-js/anatomy-icons';
import fs from 'fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import {renderToString} from 'react-dom/server';
import svgson from 'svgson';
import colors from 'tailwindcss/colors.js';

const WORKSPACE_ROOT = path.resolve(path.dirname('../../'));
const OUTPUT_DIR = path.join(WORKSPACE_ROOT, 'website/src/lib/anatomy');
const ICONS_OUTPUT_DIR = path.resolve(OUTPUT_DIR, 'icons');

const PRETTIER_CONFIG_PATH = path.join(WORKSPACE_ROOT, '.prettierrc');

const ACCENT_COLOR = colors.indigo[500];

const SVELTE_SVG_COMPONENT_TEMPLATE = `
  <script lang="ts">
    /* ⚠️ This file is auto-generated */

    import type {SVGAttributes} from 'svelte/elements';

    let {...props}: SVGAttributes<SVGSVGElement> = $props(); 
  </script>

  %html%
`;

type Component = keyof typeof allComponents;

export async function generateAnatomyIcons() {
  const keys = Object.keys(allComponents) as unknown as Component[];

  const filenames: string[] = [];
  const promises: Promise<void>[] = [];

  for (const key of keys) {
    const jsx = allComponents[key]({accentColor: ACCENT_COLOR});
    const svg = renderToString(jsx);

    const filename = `${key}-anatomy.svelte`.replace(
      'segmented-control',
      'segment-group',
    );

    const content = await formatSvelte(await svgToSvelteComponent(svg));
    const promise = fs.writeFile(
      path.join(ICONS_OUTPUT_DIR, filename),
      content,
      'utf-8',
    );

    promises.push(promise);
    filenames.push(filename);
  }

  promises.push(createContainerComponent());
  promises.push(createBarrelFile(filenames));

  await Promise.all(promises);
}

async function createBarrelFile(filenames: string[]) {
  const content = filenames
    .map((filename) => {
      const basename = filename.split('.')[0];
      const exportName = `${kebabToPascalCase(basename)}Icon`;

      return `export {default as ${exportName}} from './${filename}';\n`;
    })
    .join('');

  await fs.writeFile(
    path.join(ICONS_OUTPUT_DIR, 'index.ts'),
    await formatTs(`/* ⚠️ This file is auto-generated */\n${content}`),
    'utf-8',
  );
}

async function createContainerComponent() {
  const content = `
  <script lang="ts">
    /* ⚠️ This file is auto-generated */

    import type {SvelteHTMLElements} from 'svelte/elements';
    
    let {children, ...props}: SvelteHTMLElements['div'] = $props(); 
  </script>

  <div {...props}>
    {@render children?.()}
  </div>

  <style>
    div {
      --bg: ${createGradient(colors.indigo[300]).value};
      background: var(--bg);
    }
    
    :global(html.dark) div {
      --bg: ${createGradient(ACCENT_COLOR).value};
    }
  </style>
  `;

  const destination = path.join(OUTPUT_DIR, 'container.svelte');

  await fs.writeFile(destination, await formatSvelte(content), 'utf-8');
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

  return SVELTE_SVG_COMPONENT_TEMPLATE.replaceAll('%html%', svelteSvg);
}

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

function kebabToPascalCase(str: string) {
  return str
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

generateAnatomyIcons();
