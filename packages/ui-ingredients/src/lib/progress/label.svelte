<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ProgressLabelProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressLabelProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
