<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface CollapsibleTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getCollapsibleContext} from './collapsible-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CollapsibleTriggerProps = $props();

  let collapsible = getCollapsibleContext();
  let mergedProps = $derived(mergeProps(collapsible.getTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
