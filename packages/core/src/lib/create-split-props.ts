/* Credits to https://github.com/chakra-ui/zag/blob/main/packages/utilities/core/src/split-props.ts */

import type {GenericObject} from './types.js';

function splitProps<T extends GenericObject>(props: T, keys: (keyof T)[]) {
  const rest: GenericObject = {};
  const result: GenericObject = {};

  const keySet = new Set(keys);

  for (const key in props) {
    if (keySet.has(key)) {
      result[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  }

  return [result, rest];
}

/**
 * @example
 * ```ts
 * const props = {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 *  d: 4,
 *  e: 5
 * };
 *
 * const [i, j] = splitProps(['a', 'b'])(props);
 *
 * console.log(i); // {a: 1, b: 2}
 * console.log(j); // {c: 3, d: 4, e: 5}
 * ```
 */
export function createSplitProps<T extends GenericObject>(keys: (keyof T)[]) {
  return function split<Props extends T>(props: Props) {
    return splitProps(props, keys) as [T, Omit<Props, keyof T>];
  };
}
