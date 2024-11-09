<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSelectProps,
    CreateSelectReturn,
  } from './create-select.svelte.js';

  export interface SelectProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateSelectReturn>,
        CreateSelectProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createSelect} from './create-select.svelte.js';
  import {setSelectContext} from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectProps = $props();

  let [createSelectProps, rest] = $derived(
    createSplitProps<CreateSelectProps>([
      'id',
      'ids',
      'form',
      'name',
      'open',
      'openControlled',
      'value',
      'invalid',
      'multiple',
      'disabled',
      'readOnly',
      'required',
      'loopFocus',
      'composite',
      'positioning',
      'deselectable',
      'closeOnSelect',
      'highlightedValue',
      'onOpenChange',
      'onValueChange',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onPointerDownOutside',
      'scrollToIndexFn',
      'collection',
    ])(props),
  );

  let [presenceStrategyProps, localProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let select = createSelect(reflect(() => createSelectProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: select.open,
    })),
  );

  let mergedProps = $derived(mergeProps(select.getRootProps(), localProps));

  setSelectContext(select);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, select)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(select)}
  </div>
{/if}
