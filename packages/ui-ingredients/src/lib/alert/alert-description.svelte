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
  let mergedProps = $derived(mergeProps(alert.getDescriptionProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
