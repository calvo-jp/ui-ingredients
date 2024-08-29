<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ProgressTrackProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressTrackProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getTrackProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
