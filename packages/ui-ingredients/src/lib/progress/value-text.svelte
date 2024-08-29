<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ProgressValueTextProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressValueTextProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {progress.percentAsString}
    {/if}
  </span>
{/if}
