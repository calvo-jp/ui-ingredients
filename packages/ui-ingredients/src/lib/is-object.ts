import type {GenericObject} from './types.js';

export function isObject<T extends GenericObject>(value: unknown): value is T {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value === Object(value)
  );
}
