<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/progress';

  export interface ProgressViewProps extends Assign<HtmlProps<'div'>, ViewProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {state, asChild, children, ...props}: ProgressViewProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getViewProps({state})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
