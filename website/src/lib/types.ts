export type Assign<
  Target extends Record<string, any>,
  Source extends Record<string, any>,
> = Source & Omit<Target, keyof Source>;
