<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ProgressValueTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {progress.percentAsString}
    {/if}
  </div>
{/if}
