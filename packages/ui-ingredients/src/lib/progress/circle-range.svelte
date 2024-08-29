<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ProgressCircleRangeProps extends HtmlProps<'circle'> {
    asChild?: AsChild<HtmlProps<'circle'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleRangeProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getCircleRangeProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <circle {...attrs}>
    {@render children?.()}
  </circle>
{/if}
