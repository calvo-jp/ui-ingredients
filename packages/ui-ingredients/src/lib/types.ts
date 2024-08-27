import type {HTMLAttributes, SvelteHTMLElements} from 'svelte/elements';

export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

type IntrinsicElements = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HtmlProps<T extends IntrinsicElements> = SvelteHTMLElements[T];
export type GenericHtmlProps = HTMLAttributes<HTMLElement>;
