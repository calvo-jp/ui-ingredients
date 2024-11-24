export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
) {
  const copy = {...obj};

  for (const key of keys) {
    delete copy[key];
  }

  return copy as Omit<T, K>;
}
