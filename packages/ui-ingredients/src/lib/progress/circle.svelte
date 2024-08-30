<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ProgressCircleProps extends HTMLProps<'svg'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleProps = $props();

  let progress = progressContext.get();

  let mergedProps = $derived(mergeProps(props, progress.getCircleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
