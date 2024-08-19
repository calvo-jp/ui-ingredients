export type Assign<T, U> = Omit<T, keyof U> & U;
export type OptionalId<T> = Assign<T, {id?: string}>;
export type WithoutChildren<T> = Omit<T, 'children'>;
