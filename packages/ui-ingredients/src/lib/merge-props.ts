import {mergeProps as fn} from '@zag-js/svelte';
import {isObject} from './is-object.js';
import type {GenericObject} from './types.js';

export function mergeProps<T extends GenericObject>(...args: T[]): T {
  const r = fn<GenericObject>(...args);
  const i = 'style';

  if (r[i] && isObject(r[i])) {
    let s = '';

    for (const k in r[i]) {
      const v = r[i][k];

      s += `${k}:${v};`;
    }

    r[i] = s;
  }

  r[i] = r[i].replace(/;{1,}/g, ';');

  return r as T;
}
