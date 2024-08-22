<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSelectContextProps,
    CreateSelectContextReturn,
  } from './context.svelte.js';

  export interface SelectProps<T>
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateSelectContextProps<T>, 'id'>
    > {
    children?: Snippet<[context: CreateSelectContextReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createSelectContext, setSelectContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    form,
    name,
    open,
    'open.controlled': openControlled,
    value,
    items,
    invalid,
    multiple,
    disabled,
    readOnly,
    required,
    loopFocus,
    composite,
    positioning,
    closeOnSelect,
    highlightedValue,
    itemToValue,
    itemToString,
    isItemDisabled,
    onOpenChange,
    onValueChange,
    onFocusOutside,
    onHighlightChange,
    onInteractOutside,
    onPointerDownOutside,
    scrollToIndexFn,
    getRootNode,
    children,
    ...props
  }: SelectProps<T> = $props();

  let localeContext = useLocaleContext();

  let context = createSelectContext({
    id: id ?? uuid(),
    ids,
    dir: dir ?? localeContext?.dir,
    form,
    name,
    open,
    'open.controlled': openControlled,
    value: $state.snapshot(value),
    items,
    invalid,
    multiple,
    disabled,
    readOnly,
    required,
    loopFocus,
    composite,
    positioning,
    closeOnSelect,
    highlightedValue,
    itemToValue,
    itemToString,
    isItemDisabled,
    onOpenChange,
    onValueChange,
    onFocusOutside,
    onHighlightChange,
    onInteractOutside,
    onPointerDownOutside,
    scrollToIndexFn,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setSelectContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
