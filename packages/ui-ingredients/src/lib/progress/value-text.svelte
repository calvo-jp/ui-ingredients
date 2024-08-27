<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressValueTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressValueTextProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {progress.percentAsString}
  {/if}
</div>
