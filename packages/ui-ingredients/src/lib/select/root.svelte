<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSelectProps, CreateSelectReturn} from './create-select.svelte.js';

  export interface SelectProps<T>
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, Omit<CreateSelectProps<T>, 'id'>> {
    children?: Snippet<[api: CreateSelectReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';
  import {createSelect} from './create-select.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createSelect({
    id: id ?? uid,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  selectContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
