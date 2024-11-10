import {allComponents, getComponent} from '@zag-js/anatomy-icons';
import fs from 'node:fs/promises';
import path from 'node:path';
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

  const content = `export const ANATOMY_ICONS = ${JSON.stringify(anatomy)};`;
  const destination = path.resolve(
    path.dirname('.'),
    '../website/src/lib/anatomy-icons.ts',
  );

  await fs.writeFile(destination, content, {encoding: 'utf-8'});
}

generateAnatomyIcons();
