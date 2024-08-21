import type {SvelteHTMLElements} from 'svelte/elements';

export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

type KnownKeys<T> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HtmlIngredientsProps<T extends KnownKeys<SvelteHTMLElements>> =
  Assign<SvelteHTMLElements[T], {}>;
