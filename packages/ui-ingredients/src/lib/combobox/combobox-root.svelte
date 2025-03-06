<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateComboboxProps,
    CreateComboboxReturn,
  } from './create-combobox.svelte.js';

  export interface ComboboxProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateComboboxReturn>,
        Optional<CreateComboboxProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {setComboboxContext} from './combobox-context.svelte.js';
  import {createCombobox} from './create-combobox.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, otherProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createComboboxProps, localProps] = $derived(
    createSplitProps<Omit<CreateComboboxProps, 'id'>>([
      'allowCustomValue',
      'autoFocus',
      'closeOnSelect',
      'collection',
      'composite',
      'defaultHighlightedValue',
      'defaultInputValue',
      'defaultOpen',
      'defaultValue',
      'disableLayer',
      'disabled',
      'form',
      'highlightedValue',
      'ids',
      'inputBehavior',
      'inputValue',
      'invalid',
      'loopFocus',
      'multiple',
      'name',
      'navigate',
      'onFocusOutside',
      'onHighlightChange',
      'onInputValueChange',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'onValueChange',
      'open',
      'openOnChange',
      'openOnClick',
      'openOnKeyPress',
      'placeholder',
      'positioning',
      'readOnly',
      'required',
      'scrollToIndexFn',
      'selectionBehavior',
      'translations',
      'value',
    ])(otherProps),
  );

  let combobox = createCombobox(
    reflect(() => ({...createComboboxProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: combobox.open,
    })),
  );

  let mergedProps = $derived(mergeProps(combobox.getRootProps(), localProps));

  setComboboxContext(combobox);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, combobox)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(combobox)}
  </div>
{/if}
