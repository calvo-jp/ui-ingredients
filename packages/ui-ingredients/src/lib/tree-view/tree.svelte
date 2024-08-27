<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewTreeProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext} from './context.svelte.js';

  let {children, ...props}: TreeViewTreeProps = $props();

  let treeView = treeViewContext.get();

  let attrs = $derived(mergeProps(props, treeView.getTreeProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
