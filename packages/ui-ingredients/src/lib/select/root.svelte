<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSelectProps, CreateSelectReturn} from './create-select.svelte.js';

  export interface SelectProps<T>
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSelectProps<T>> {
    children?: Snippet<[select: CreateSelectReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';
  import {createSelect} from './create-select.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    open,
    defaultOpen,
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

  let select = createSelect({
    id,
    ids,
    form,
    name,
    open,
    defaultOpen,
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

  let attrs = $derived(mergeProps(props, select.getRootProps()));

  selectContext.set(select);
</script>

<div {...attrs}>
  {@render children?.(select)}
</div>
