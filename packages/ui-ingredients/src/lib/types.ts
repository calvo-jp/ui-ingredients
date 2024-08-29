import type {Snippet} from 'svelte';
import type {SvelteHTMLElements} from 'svelte/elements';

export type GenericObject = Record<string, any>;

export type Assign<Target extends GenericObject, Source extends GenericObject> = Source &
  Omit<Target, keyof Source>;

type IntrinsicElements = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HTMLProps<T extends IntrinsicElements> = SvelteHTMLElements[T];

export type AsChild<Context = never> = [Context] extends [never]
  ? Snippet<[attrs: GenericObject]>
  : Snippet<[attrs: GenericObject, context: Context]>;
