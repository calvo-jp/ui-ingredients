import type {Snippet} from 'svelte';
import type {Action} from 'svelte/action';
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

export type HtmlProps<T extends IntrinsicElements> = SvelteHTMLElements[T];

export type TransitionFunction = (node: HTMLElement) => TransitionConfig;

export interface TransitionProps {
  in?: TransitionFunction;
  out?: TransitionFunction;
  transition?: TransitionFunction;
}

export type AsChildWithRef<Ref extends Action, Context = never> = [
  Context,
] extends [never]
  ? Snippet<[ref: Ref, attrs: GenericObject]>
  : Snippet<[ref: Ref, attrs: GenericObject, context: Context]>;

export type AsChildWithoutRef<Context = never> = [Context] extends [never]
  ? Snippet<[attrs: GenericObject]>
  : Snippet<[attrs: GenericObject, context: Context]>;

export type AsChild<Ref extends Action, Context = never> = [Ref] extends [never]
  ? AsChildWithoutRef<Context>
  : AsChildWithRef<Ref, Context>;

export type Children<T = never> = [T] extends [never]
  ? Snippet
  : Snippet<[context: T]>;

export type PropsWithoutChildren<T> = Omit<T, 'children'>;

export type HtmlIngredientProps<
  Element extends IntrinsicElements,
  Context = never,
  Ref extends Action = never,
> = TransitionProps &
  PropsWithoutChildren<HtmlProps<Element>> & {
    children?: Children<Context>;
    asChild?: AsChild<Ref, Context>;
  };
