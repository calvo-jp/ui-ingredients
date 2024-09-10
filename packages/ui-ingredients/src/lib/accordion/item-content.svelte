<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface AccordionItemContentProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemContentProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();
  let itemsState = $derived(accordion.getItemState(itemProps));

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence({
    get present() {
      return itemsState.expanded;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  let mergedProps = $derived(
    mergeProps(
      props,
      accordion.getItemContentProps(itemProps),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
