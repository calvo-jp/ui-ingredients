<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TabsListProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tabsContext} from './context.svelte.js';

  let {children, ...props}: TabsListProps = $props();

  let context = tabsContext.get();

  let attrs = $derived(mergeProps(props, context.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
