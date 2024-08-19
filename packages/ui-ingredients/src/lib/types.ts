export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;
export type OptionalId<T> = Assign<T, {id?: string}>;
export type WithoutChildren<T> = Omit<T, 'children'>;
