import type {AnatomyInstance} from '@zag-js/anatomy';

export function getAnatomySelector<T extends AnatomyInstance<string>>(
  anatomy: T,
) {
  const o = anatomy.build();
  const v = Object.values(o);
  const l = [] as string[];

  v.forEach((o) => {
    const scope = o.attrs['data-scope'];
    const parts = o.attrs['data-part'];

    l.push(
      '[data-scope="{scope}"][data-part="{parts}"]'
        .replace('{scope}', scope)
        .replace('{parts}', parts),
    );
  });

  return l;
}
