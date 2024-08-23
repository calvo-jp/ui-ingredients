import {uid} from 'uid';

export const createUniqueId = () => uid();

function isObject<T extends Record<string, unknown>>(
  value: unknown,
): value is T {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value === Object(value)
  );
}

export function ensureStyleIsString<
  T extends {style?: null | string | Record<string, string | number>},
>(o: T) {
  const c = {...o};

  if (isObject<Record<string, any>>(c.style)) {
    let s = '';

    for (const k in c.style) {
      s += `${k}:${c.style[k]};`;
    }

    c.style = s;
  }

  return c as Omit<T, 'style'> & {style?: string | null};
}
