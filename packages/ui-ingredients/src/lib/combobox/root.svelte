<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateComboboxProps, CreateComboboxReturn} from './create-combobox.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateComboboxProps<T>> {
    children?: Snippet<[combobox: CreateComboboxReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';
  import {createCombobox} from './create-combobox.svelte.js';

  let {
    id,
    ids,
    name,
    form,
    open,
    defaultOpen,
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
    children,
    ...props
  }: ComboboxProps<T> = $props();

  let combobox = createCombobox({
    id,
    ids,
    name,
    form,
    open,
    defaultOpen,
    items,
    value: $state.snapshot(value),
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
  });

  let attrs = $derived(mergeProps(props, combobox.getRootProps()));

  comboboxContext.set(combobox);
</script>

<div {...attrs}>
  {@render children?.(combobox)}
</div>
