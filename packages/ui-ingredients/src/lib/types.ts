import type {Snippet} from 'svelte';
import type {Action} from 'svelte/action';
import type {SvelteHTMLElements} from 'svelte/elements';

export type GenericObject = Record<string, any>;

export type Assign<
  Target extends GenericObject,
  Source extends GenericObject,
> = Source & Omit<Target, keyof Source>;

export type SvelteHTMLElement = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

export type HtmlProps<TElement extends SvelteHTMLElement> =
  SvelteHTMLElements[TElement];

type AsChildWithAction<
  TAction extends Action,
  TContext extends GenericObject = never,
> = [TContext] extends [never]
  ? Snippet<[action: TAction, attrs: GenericObject]>
  : Snippet<[action: TAction, attrs: GenericObject, context: TContext]>;

type AsChildWithoutRef<TContext = never> = [TContext] extends [never]
  ? Snippet<[attrs: GenericObject]>
  : Snippet<[attrs: GenericObject, context: TContext]>;

export type AsChild<
  TAction extends Action,
  Context extends GenericObject = never,
> = [TAction] extends [never]
  ? AsChildWithoutRef<Context>
  : AsChildWithAction<TAction, Context>;

type Children<TContext extends GenericObject = never> = [TContext] extends [
  never,
]
  ? Snippet
  : Snippet<[context: TContext]>;

export type HtmlIngredientProps<
  TElement extends SvelteHTMLElement,
  TRef extends
    | HTMLElement
    | SVGSVGElement
    | SVGPathElement
    | SVGCircleElement = HTMLElement,
  TContext extends GenericObject = never,
  TAction extends Action = never,
> = Omit<HtmlProps<TElement>, 'class' | 'children'> & {
  ref?: TRef | null;
  class?: string | null;
  asChild?: AsChild<TAction, TContext>;
  children?: Children<TContext>;
};
