<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface CollapsibleContentProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'div'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {collapsibleContext} from './context.svelte.js';

  let {asChild, children, ...props}: CollapsibleContentProps = $props();

  let collapsible = collapsibleContext.get();

  let attrs = $derived(mergeProps(props, collapsible.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
