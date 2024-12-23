<script lang="ts" module>
  import {
    createPresence,
    type PresenceStrategyProps,
  } from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateCollapsibleReturn>,
        CreateCollapsibleProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {setCollapsibleContext} from './collapsible-context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CollapsibleProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createCollapsibleProps, localProps] = $derived(
    createSplitProps<CreateCollapsibleProps>([
      'id',
      'ids',
      'open',
      'openControlled',
      'disabled',
      'onOpenChange',
      'onExitComplete',
    ])(rest),
  );

  let collapsible = createCollapsible(reflect(() => createCollapsibleProps));
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
