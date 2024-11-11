import {allComponents, getComponent} from '@zag-js/anatomy-icons';
import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import {renderToString} from 'react-dom/server';

type Component = keyof typeof allComponents;

export async function generateAnatomyIcons() {
  const components = Object.keys(allComponents) as unknown as Component[];

  const anatomy: Record<string, string> = {};

  components.forEach((component) => {
    anatomy[component] = renderToString(
      getComponent(component)({accentColor: 'red'}),
    );
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
