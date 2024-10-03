import type {AnatomyInstance} from '@zag-js/anatomy';

export function getAnatomySelector<T extends AnatomyInstance<string>>(
  anatomy: T,
) {
  return Object.values(anatomy.build()).map((o) => {
    return '[data-scope="$1"][data-part="$2"]'
      .replace('$1', o.attrs['data-scope'])
      .replace('$2', o.attrs['data-part']);
  });
}
