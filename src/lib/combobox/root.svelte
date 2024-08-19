<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateComboboxContextProps, CreateComboboxContextReturn} from './context.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateComboboxContextProps<T>>
    > {
    children?: Snippet<[CreateComboboxContextReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createComboboxContext, setComboboxContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setComboboxContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
