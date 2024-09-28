<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressCircleProps
    extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressCircleProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getCircleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
