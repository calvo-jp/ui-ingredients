<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressCircleTrackProps
    extends HtmlIngredientProps<'circle'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleTrackProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getCircleTrackProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <circle {...mergedProps}>
    {@render children?.()}
  </circle>
{/if}
