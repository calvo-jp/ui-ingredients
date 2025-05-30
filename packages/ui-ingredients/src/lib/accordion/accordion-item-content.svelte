<script lang="ts" module>
  import type {Action} from 'svelte/action';
  import type {HtmlIngredientProps} from '../types.js';

  export interface AccordionItemContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {getCollapsibleContext} from '../collapsible/collapsible-context.svelte.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './accordion-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AccordionItemContentProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();
  let itemsState = $derived(accordion.getItemState(itemProps));
  let collapsible = getCollapsibleContext();
  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: itemsState.expanded,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      collapsible.getContentProps(),
      accordion.getItemContentProps(itemProps),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
