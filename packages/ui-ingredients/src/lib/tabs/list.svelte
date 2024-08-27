<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TabsListProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tabsContext} from './context.svelte.js';

  let {children, ...props}: TabsListProps = $props();

  let tabs = tabsContext.get();

  let attrs = $derived(mergeProps(props, tabs.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
