<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateComboboxProps,
    CreateComboboxReturn,
  } from './create-combobox.svelte.js';

  export interface ComboboxProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateComboboxReturn>,
        CreateComboboxProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {setComboboxContext} from './combobox-context.svelte.js';
  import {createCombobox} from './create-combobox.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createComboboxProps, localProps] = $derived(
    createSplitProps<CreateComboboxProps>([
      'id',
      'ids',
      'name',
      'form',
      'open',
      'openControlled',
      'collection',
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
      'onOpenChange',
      'onValueChange',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onInputValueChange',
      'onPointerDownOutside',
      'scrollToIndexFn',
    ])(rest),
  );

  let combobox = createCombobox(reflect(() => createComboboxProps));
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
