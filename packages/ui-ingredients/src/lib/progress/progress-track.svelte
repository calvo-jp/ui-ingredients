<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressTrackProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressTrackProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getTrackProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
