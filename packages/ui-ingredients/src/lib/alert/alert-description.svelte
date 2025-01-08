<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAlertContext} from './alert-context.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDescriptionProps = $props();

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
