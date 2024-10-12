<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AlertDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAlertContext} from './alert-context.js';

  let {ref, asChild, children, ...props}: AlertDescriptionProps = $props();

  let alert = getAlertContext();

  let attrs = $derived(mergeProps(alert.getDescriptionProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <p bind:this={ref} {...attrs}>
    {@render children?.()}
  </p>
{/if}
