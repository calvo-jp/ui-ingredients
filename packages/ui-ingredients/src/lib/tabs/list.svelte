<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TabsListProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsListProps = $props();

  let tabs = tabsContext.get();

  let mergedProps = $derived(mergeProps(props, tabs.getListProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
