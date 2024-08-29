<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ProgressCircleRangeProps extends HTMLProps<'circle'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleRangeProps = $props();

  let progress = progressContext.get();

  let mergedProps = $derived(mergeProps(props, progress.getCircleRangeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <circle {...mergedProps}>
    {@render children?.()}
  </circle>
{/if}
