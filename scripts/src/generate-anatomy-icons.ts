import {
  allComponents,
  createGradient,
  getComponent,
} from '@zag-js/anatomy-icons';
import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import {renderToString} from 'react-dom/server';

type Component = keyof typeof allComponents;

export async function generateAnatomyIcons() {
  const components = Object.keys(allComponents) as unknown as Component[];

  const anatomy: Record<string, string> = {};
  const bg = createGradient('red').value;
  const container = `<div style="background:${bg};width:100%;height:auto;">{content}</div>`;

  components.forEach((component) => {
    if (component === 'fieldset') return;

    const svg = renderToString(getComponent(component)({accentColor: 'red'}));

    const k = component === 'segmented-control' ? 'segment-group' : component;
    const v = container.replace('{content}', svg);

    anatomy[k] = v;
  });

  const workspaceRoot = path.resolve(path.dirname('../../'));
  const prettierConfig = await prettier.resolveConfig(workspaceRoot);

  const content = `export const ANATOMY_ICONS = ${JSON.stringify(anatomy)};`;

  const formattedContent = await prettier.format(content, {
    parser: 'typescript',
    ...prettierConfig,
  });

  const destination = path.resolve(
    workspaceRoot,
    'website/src/lib/anatomy-icons.ts',
  );

  await fs.writeFile(destination, formattedContent, {encoding: 'utf-8'});
}

generateAnatomyIcons();
