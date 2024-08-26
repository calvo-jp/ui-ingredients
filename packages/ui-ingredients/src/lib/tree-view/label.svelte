<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewContext} from './context.svelte.js';

  let {children, ...props}: TreeViewLabelProps = $props();

  let treeView = treeViewContext.get();

  let attrs = $derived(mergeProps(props, treeView.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
