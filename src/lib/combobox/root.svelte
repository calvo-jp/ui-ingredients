<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateComboboxContextProps} from './context.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateComboboxContextProps<T>>> {}
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createComboboxContext, setComboboxContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    name,
    form,
    open,
    'open.controlled': openControlled,
    items,
    value,
    invalid,
    disabled,
    multiple,
    readOnly,
    required,
    autoFocus,
    composite,
    loopFocus,
    inputValue,
    placeholder,
    positioning,
    translations,
    disableLayer,
    closeOnSelect,
    inputBehavior,
    openOnChange,
    openOnClick,
    openOnKeyPress,
    allowCustomValue,
    highlightedValue,
    selectionBehavior,
    itemToString,
    itemToValue,
    isItemDisabled,
    onOpenChange,
    onValueChange,
    onFocusOutside,
    onHighlightChange,
    onInteractOutside,
    onInputValueChange,
    onPointerDownOutside,
    getSelectionValue,
    scrollToIndexFn,
    getRootNode,
    children,
    ...props
  }: ComboboxProps<T> = $props();

  let context = createComboboxContext({
    id,
    ids,
    dir,
    name,
    form,
    open,
    'open.controlled': openControlled,
    items,
    value,
    invalid,
    disabled,
    multiple,
    readOnly,
    required,
    autoFocus,
    composite,
    loopFocus,
    inputValue,
    placeholder,
    positioning,
    translations,
    disableLayer,
    closeOnSelect,
    inputBehavior,
    openOnChange,
    openOnClick,
    openOnKeyPress,
    allowCustomValue,
    highlightedValue,
    selectionBehavior,
    itemToString,
    itemToValue,
    isItemDisabled,
    onOpenChange,
    onValueChange,
    onFocusOutside,
    onHighlightChange,
    onInteractOutside,
    onInputValueChange,
    onPointerDownOutside,
    getSelectionValue,
    scrollToIndexFn,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setComboboxContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
