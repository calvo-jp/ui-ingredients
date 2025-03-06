<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateCollapsibleReturn>,
        Optional<CreateCollapsibleProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {setCollapsibleContext} from './collapsible-context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CollapsibleProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, otherProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createCollapsibleProps, localProps] = $derived(
    createSplitProps<Omit<CreateCollapsibleProps, 'id'>>([
      'defaultOpen',
      'disabled',
      'ids',
      'onExitComplete',
      'onOpenChange',
      'open',
    ])(otherProps),
  );

  let collapsible = createCollapsible(
    reflect(() => ({...createCollapsibleProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      present: collapsible.open,
      ...presenceStrategyProps,
    })),
  );

  let mergedProps = $derived(
    mergeProps(collapsible.getRootProps(), localProps),
  );

  setCollapsibleContext(collapsible);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, collapsible)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(collapsible)}
  </div>
{/if}
