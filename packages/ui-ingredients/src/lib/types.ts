import type {Snippet} from 'svelte';
import type {Action} from 'svelte/action';
import type {SvelteHTMLElements} from 'svelte/elements';
import {type TransitionConfig} from 'svelte/transition';

export type GenericObject = Record<string, any>;

export type Assign<
  Target extends GenericObject,
  Source extends GenericObject,
> = Source & Omit<Target, keyof Source>;

export type IntrinsicElement = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HtmlProps<T extends IntrinsicElement> = SvelteHTMLElements[T];

type AsChildWithRef<Ref extends Action, Context = never> = [Context] extends [
  never,
]
  ? Snippet<[ref: Ref, attrs: GenericObject]>
  : Snippet<[ref: Ref, attrs: GenericObject, context: Context]>;

type AsChildWithoutRef<Context = never> = [Context] extends [never]
  ? Snippet<[attrs: GenericObject]>
  : Snippet<[attrs: GenericObject, context: Context]>;

export type AsChild<Ref extends Action, Context = never> = [Ref] extends [never]
  ? AsChildWithoutRef<Context>
  : AsChildWithRef<Ref, Context>;

type Children<T = never> = [T] extends [never]
  ? Snippet
  : Snippet<[context: T]>;

type PropsWithoutChildren<T> = Omit<T, 'children'>;

export type HtmlIngredientProps<
  Element extends IntrinsicElement,
  Context = never,
  Ref extends Action = never,
> = PropsWithoutChildren<HtmlProps<Element>> & {
  this?: any;
  asChild?: AsChild<Ref, Context>;
  children?: Children<Context>;
};

export type TransitionFn = (node: HTMLElement) => TransitionConfig;

export interface TransitionProps {
  in?: TransitionFn;
  out?: TransitionFn;
  transition?: TransitionFn;
}
