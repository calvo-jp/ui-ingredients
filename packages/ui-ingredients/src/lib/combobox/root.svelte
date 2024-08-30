<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateComboboxProps,
    CreateComboboxReturn,
  } from './create-combobox.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateComboboxProps<T>> {
    asChild?: AsChild<CreateComboboxReturn>;
    children?: Snippet<[CreateComboboxReturn]>;
  }
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {comboboxContext} from './context.svelte.js';
  import {createCombobox} from './create-combobox.svelte.js';

  let {asChild, children, ...props}: ComboboxProps<T> = $props();

  let [comboboxProps, otherProps] = $derived(
    createSplitProps<CreateComboboxProps<T>>([
      'id',
      'ids',
      'name',
      'form',
      'open',
      'defaultOpen',
      'items',
      'value',
      'invalid',
      'disabled',
      'multiple',
      'readOnly',
      'required',
      'autoFocus',
      'composite',
      'loopFocus',
      'inputValue',
      'placeholder',
      'positioning',
      'translations',
      'disableLayer',
      'closeOnSelect',
      'inputBehavior',
      'openOnChange',
      'openOnClick',
      'openOnKeyPress',
      'allowCustomValue',
      'highlightedValue',
      'selectionBehavior',
      'itemToString',
      'itemToValue',
      'isItemDisabled',
      'onOpenChange',
      'onValueChange',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onInputValueChange',
      'onPointerDownOutside',
      'getSelectionValue',
      'scrollToIndexFn',
    ])(props),
  );

  let combobox = createCombobox(comboboxProps);

  let mergedProps = $derived(mergeProps(otherProps, combobox.getRootProps()));

  comboboxContext.set(combobox);
</script>

{#if asChild}
  {@render asChild(mergedProps, combobox)}
{:else}
  <div {...mergedProps}>
    {@render children?.(combobox)}
  </div>
{/if}
