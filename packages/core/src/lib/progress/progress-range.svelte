<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ProgressRangeProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressRangeProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getRangeProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
