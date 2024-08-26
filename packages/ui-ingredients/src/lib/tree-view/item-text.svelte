<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewItemTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TreeViewItemTextProps = $props();

  let treeView = treeViewContext.get();
  let itemProps = treeViewItemPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
