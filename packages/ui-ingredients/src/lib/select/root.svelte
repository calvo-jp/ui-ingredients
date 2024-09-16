<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSelectProps,
    CreateSelectReturn,
  } from './create-select.svelte.js';

  export interface SelectProps<T>
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateSelectReturn>,
        CreateSelectProps<T>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSelectContext} from './context.svelte.js';
  import {createSelect} from './create-select.svelte.js';

  let {this: e, asChild, children, ...props}: SelectProps<T> = $props();

  let [selectProps, rest] = $derived(
    createSplitProps<CreateSelectProps<T>>([
      'id',
      'ids',
      'form',
      'name',
      'open',
      'defaultOpen',
      'value',
      'items',
      'invalid',
      'multiple',
      'disabled',
      'readOnly',
      'required',
      'loopFocus',
      'composite',
      'positioning',
      'closeOnSelect',
      'highlightedValue',
      'itemToValue',
      'itemToString',
      'isItemDisabled',
      'onOpenChange',
      'onValueChange',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onPointerDownOutside',
      'scrollToIndexFn',
    ])(props),
  );

  let [presenceStrategyProps, localProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let select = createSelect(reflect(() => selectProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: select.open,
    })),
  );

  let mergedProps = $derived(mergeProps(localProps, select.getRootProps()));

  setSelectContext(select);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, select)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(select)}
  </div>
{/if}
