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
  const bg = createGradient('#818cf8').value;
  const container = `<div style="background:${bg};border-radius:0.25em;overflow:hidden;">{content}</div>`;
  const workspaceRoot = path.resolve(path.dirname('../../'));
  const prettierConfig = await prettier.resolveConfig(workspaceRoot);

  components.forEach((component) => {
    const k = component === 'segmented-control' ? 'segment-group' : component;
    const v = container.replace(
      '{content}',
      renderToString(
        getComponent(component)({
          accentColor: '#818cf8',
          style: {
            width: '100%',
            height: 'auto',
          },
          className: `anatomy ${component}-anatomy`,
        }),
      ),
    );

    anatomy[k] = v;
  });

  const content = await prettier.format(
    `
    // ⚠️ Generated file

    export type AnatomyIcon = ${Object.keys(anatomy)
      .map((v) => `'${v}'`)
      .join(' | ')};


    export const ANATOMY_ICONS: Record<AnatomyIcon, string> = ${JSON.stringify(anatomy)};
    `,
    {
      parser: 'typescript',
      singleQuote: true,
      bracketSpacing: false,
      ...prettierConfig,
    },
  );

  const destination = path.resolve(
    workspaceRoot,
    'docs/src/lib/anatomy-icons.ts',
  );

  await fs.writeFile(destination, content, {encoding: 'utf-8'});
}

generateAnatomyIcons();
