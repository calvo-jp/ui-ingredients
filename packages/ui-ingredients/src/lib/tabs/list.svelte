<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TabsListProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsListProps = $props();

  let tabs = tabsContext.get();

  let attrs = $derived(mergeProps(props, tabs.getListProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
