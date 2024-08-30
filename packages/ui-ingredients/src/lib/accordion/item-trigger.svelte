<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    accordionContext,
    accordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemTriggerProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, accordion.getItemTriggerProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
