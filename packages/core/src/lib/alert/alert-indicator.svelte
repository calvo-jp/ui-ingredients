<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AlertIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAlertContext} from './alert-context.js';

  let {ref, asChild, children, ...props}: AlertIndicatorProps = $props();

  let alert = getAlertContext();

  let attrs = $derived(mergeProps(alert.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span bind:this={ref} {...attrs}>
    {@render children?.()}
  </span>
{/if}
