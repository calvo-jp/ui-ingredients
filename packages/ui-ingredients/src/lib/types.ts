import type {Snippet} from 'svelte';
import type {SvelteHTMLElements} from 'svelte/elements';
import type {TransitionConfig} from 'svelte/transition';

export type GenericObject = Record<string, any>;

export type Assign<
  Target extends GenericObject,
  Source extends GenericObject,
> = Source & Omit<Target, keyof Source>;

export type IntrinsicElements = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HTMLProps<T extends IntrinsicElements> = SvelteHTMLElements[T];

export type TransitionFunction = (node: HTMLElement) => TransitionConfig;

export interface TransitionProps {
  in?: TransitionFunction;
  out?: TransitionFunction;
  transition?: TransitionFunction;
}

export type AsChild<Context = never> = [Context] extends [never]
  ? Snippet<[attrs: GenericObject]>
  : Snippet<[attrs: GenericObject, context: Context]>;

export type Children<T = never> = [T] extends [never] ? Snippet : Snippet<[T]>;

export type IngredientProps<
  T extends IntrinsicElements,
  Context = never,
> = TransitionProps &
  Omit<HTMLProps<T>, 'children'> & {
    asChild?: AsChild<Context>;
    children?: Children<Context>;
  };
