export function makeFieldsGetterSetterIfNotFunc<T extends Record<string, any>>(
  o: T,
): T {
  let r: Record<string, any> = {};

  for (const k in o) {
    const v = o[k];

    if (typeof v === 'function') {
      r = Object.assign(r, {
        [k](...args: any[]) {
          return v(...args);
        },
      });

      continue;
    }

    r = Object.assign(r, {
      get [k]() {
        return v;
      },
      set [k](v: T[Extract<keyof T, string>]) {
        o[k] = v;
      },
    });
  }

  return r as T;
}

export function splitProps() {}
