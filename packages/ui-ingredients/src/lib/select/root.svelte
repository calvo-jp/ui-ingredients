<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSelectProps, CreateSelectReturn} from './create-select.svelte.js';

  export interface SelectProps<T>
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSelectProps<T>> {
    children?: Snippet<[api: CreateSelectReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';
  import {createSelect} from './create-select.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    open,
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
    children,
    ...props
  }: SelectProps<T> = $props();

  let context = createSelect({
    id,
    ids,
    form,
    name,
    open,
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
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  selectContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
