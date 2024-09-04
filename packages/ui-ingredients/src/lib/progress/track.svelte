<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressTrackProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressTrackProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getTrackProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
