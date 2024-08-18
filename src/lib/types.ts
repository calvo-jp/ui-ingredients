export type Assign<T, U> = Omit<T, keyof U> & U;
export type ContextGetter<T> = () => T;
export type OptionalId<T> = Assign<T, {id?: string}>;
