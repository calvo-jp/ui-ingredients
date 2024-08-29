<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ProgressCircleProps extends HtmlProps<'svg'> {
    asChild?: AsChild<HtmlProps<'svg'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressCircleProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getCircleProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <svg {...attrs}>
    {@render children?.()}
  </svg>
{/if}
