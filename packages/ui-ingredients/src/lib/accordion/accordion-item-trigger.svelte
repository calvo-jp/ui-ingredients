<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './avatar-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AccordionItemTriggerProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, accordion.getItemTriggerProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
