<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ProgressCircleRangeProps extends HTMLProps<'circle'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleRangeProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getCircleRangeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <circle {...mergedProps}>
    {@render children?.()}
  </circle>
{/if}
