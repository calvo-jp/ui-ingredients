<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemContentProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemContentProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();
  let itemsState = $derived(accordion.getItemState(itemProps));
  let presence = createPresence({
    get present() {
      return itemsState.expanded;
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

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div use:presence.ref {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
