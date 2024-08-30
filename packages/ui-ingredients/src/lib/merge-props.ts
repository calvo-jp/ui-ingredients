import {mergeProps as fn} from '@zag-js/svelte';
import type {GenericObject} from './types.js';

function isObject<T extends GenericObject>(value: unknown): value is T {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value === Object(value)
  );
}

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

  return r as T;
}
