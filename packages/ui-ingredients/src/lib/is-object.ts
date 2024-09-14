/* Credits: https://github.com/lodash/lodash/blob/main/src/isPlainObject.ts */

import type {GenericObject} from './types.js';

export function isObject<T extends GenericObject>(value: unknown): value is T {
  if (value === null) {
    return false;
  }

  if (
    typeof value !== 'object' ||
    Object.prototype.toString.call(value) !== '[object Object]'
  ) {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
