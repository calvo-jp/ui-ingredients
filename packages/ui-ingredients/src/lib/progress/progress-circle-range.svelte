<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ProgressCircleRangeProps
    extends HtmlIngredientProps<'circle', SVGCircleElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressCircleRangeProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getCircleRangeProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <circle bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </circle>
{/if}
