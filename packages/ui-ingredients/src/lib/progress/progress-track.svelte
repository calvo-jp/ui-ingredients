<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ProgressTrackProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressTrackProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getTrackProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
