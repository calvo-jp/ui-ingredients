import type {AnatomyInstance} from '@zag-js/anatomy';

export function getAnatomySelector<T extends AnatomyInstance<string>>(
  anatomy: T,
) {
  const parts = anatomy.build();

  return Object.values(parts).map((part) => {
    return '[data-scope="$1"][data-part="$2"]'
      .replace('$1', part.attrs['data-scope'])
      .replace('$2', part.attrs['data-part']);
  });
}
