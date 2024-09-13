<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateComboboxProps,
    CreateComboboxReturn,
  } from './create-combobox.svelte.js';

  export interface ComboboxProps<T>
    extends Assign<
        HtmlIngredientProps<'div', CreateComboboxReturn>,
        CreateComboboxProps<T>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setComboboxContext} from './context.svelte.js';
  import {createCombobox} from './create-combobox.svelte.js';

  let {this: e, asChild, children, ...props}: ComboboxProps<T> = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [comboboxProps, localProps] = $derived(
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
    ])(rest),
  );

  let combobox = createCombobox(reflect(() => comboboxProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: combobox.open,
    })),
  );

  let mergedProps = $derived(mergeProps(localProps, combobox.getRootProps()));

  setComboboxContext(combobox);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, combobox)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(combobox)}
  </div>
{/if}
