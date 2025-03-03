<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateSelectProps,
    CreateSelectReturn,
  } from './create-select.svelte.js';

  export interface SelectProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateSelectReturn>,
        Optional<CreateSelectProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createSelect} from './create-select.svelte.js';
  import {setSelectContext} from './select-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: SelectProps = $props();

  let uid = $props.id();

  let [createSelectProps, otherProps] = $derived(
    createSplitProps<Omit<CreateSelectProps, 'id'>>([
      'closeOnSelect',
      'collection',
      'composite',
      'defaultHighlightedValue',
      'defaultOpen',
      'defaultValue',
      'deselectable',
      'disabled',
      'form',
      'highlightedValue',
      'ids',
      'invalid',
      'loopFocus',
      'multiple',
      'name',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'onValueChange',
      'open',
      'positioning',
      'readOnly',
      'required',
      'scrollToIndexFn',
      'value',
    ])(rest),
  );

  let [presenceStrategyProps, localProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      otherProps,
    ),
  );

  let select = createSelect(
    reflect(() => ({...createSelectProps, id: id ?? uid})),
  );

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
