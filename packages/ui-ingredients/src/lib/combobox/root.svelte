<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateComboboxContextProps,
    CreateComboboxContextReturn,
  } from './context.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateComboboxContextProps<T>, 'id'>
    > {
    children?: Snippet<[context: CreateComboboxContextReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createComboboxContext, setComboboxContext} from './context.svelte.js';

  let {
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
    children,
    ...props
  }: ComboboxProps<T> = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createComboboxContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    name,
    form,
    open,
    'open.controlled': openControlled,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setComboboxContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
