import type {SvelteHTMLElements} from 'svelte/elements';

export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

type KnownKeys<T> = keyof {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: string;
};

type IntrinsicElements = KnownKeys<SvelteHTMLElements>;

export type HtmlProps<T extends IntrinsicElements> = SvelteHTMLElements[T];

export type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
