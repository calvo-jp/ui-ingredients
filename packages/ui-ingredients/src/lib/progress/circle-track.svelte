<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ProgressCircleTrackProps extends HTMLProps<'circle'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleTrackProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getCircleTrackProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <circle {...attrs}>
    {@render children?.()}
  </circle>
{/if}
