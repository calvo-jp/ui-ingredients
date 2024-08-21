import type {SvelteHTMLElements} from 'svelte/elements';

export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

type KnownKeys<T> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

interface IngredientProps {
  /** TODO */
  asChild?: never;
}

type IntrinsicElements = KnownKeys<SvelteHTMLElements>;

export type HtmlIngredientProps<T extends IntrinsicElements> = Assign<
  SvelteHTMLElements[T],
  IngredientProps
>;
