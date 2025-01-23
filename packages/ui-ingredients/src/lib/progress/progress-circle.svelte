<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ProgressCircleProps
    extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressCircleProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getCircleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
