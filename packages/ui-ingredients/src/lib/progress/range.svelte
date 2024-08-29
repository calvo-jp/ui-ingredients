<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ProgressRangeProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressRangeProps = $props();

  let progress = progressContext.get();

  let mergedProps = $derived(mergeProps(props, progress.getRangeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
