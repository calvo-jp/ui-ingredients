export function guard<Return, Arg>(fn: (...args: Arg[]) => Return) {
  return (...args: Arg[]): Return | null => {
    try {
      return fn(...args);
    } catch {
      return null;
    }
  };
}
