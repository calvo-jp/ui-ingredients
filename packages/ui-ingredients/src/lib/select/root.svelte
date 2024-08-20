<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateSelectContextProps, CreateSelectContextReturn} from './context.svelte.js';

  export interface SelectProps<T>
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateSelectContextProps<T>>
    > {
    children?: Snippet<[context: CreateSelectContextReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createSelectContext, setSelectContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let context = createSelectContext({
    id,
    ids,
    dir,
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
