type Entries<T> = {[K in keyof T]: [K, T[K]]}[keyof T][];

type WidenLiteral<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends bigint
        ? bigint
        : T extends symbol
          ? symbol
          : T;

declare global {
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>;
    keys<T extends object>(o: T): (keyof T)[];
  }

  interface Array<T> {
    includes(searchElement: WidenLiteral<T> & {}, fromIndex?: number): boolean;
    indexOf(searchElement: WidenLiteral<T> & {}, fromIndex?: number): number;
    lastIndexOf(
      searchElement: WidenLiteral<T> & {},
      fromIndex?: number,
    ): number;
  }

  interface ReadonlyArray<T> {
    includes(searchElement: WidenLiteral<T> & {}, fromIndex?: number): boolean;
    indexOf(searchElement: WidenLiteral<T> & {}, fromIndex?: number): number;
    lastIndexOf(
      searchElement: WidenLiteral<T> & {},
      fromIndex?: number,
    ): number;
  }
}

export {};
