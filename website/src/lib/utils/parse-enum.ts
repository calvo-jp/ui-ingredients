export interface Config {
  trim?: boolean;
  ignoreCase?: boolean;
}

const defaultConfig = {
  trim: true,
  ignoreCase: true,
} satisfies Config;

export function parseEnum<T extends string>(
  values: T[],
  subject: unknown,
  config?: Config,
): T | undefined {
  if (!isString(subject)) return;

  const {ignoreCase, trim} = Object.assign(defaultConfig, config);

  let s = subject.slice();

  if (trim) s = s.trim();
  if (ignoreCase) s = s.toLowerCase();

  return values.find((value) => {
    let v = value.slice();

    if (trim) v = v.trim();
    if (ignoreCase) v = v.toLowerCase();

    return v === s;
  });
}

const isString = (value: unknown): value is string => typeof value === 'string';
