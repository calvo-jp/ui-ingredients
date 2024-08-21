<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TabsListProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTabsContext} from './context.svelte.js';

  let {children, ...props}: TabsListProps = $props();

  let context = useTabsContext();

  let attrs = $derived(mergeProps(props, context.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
