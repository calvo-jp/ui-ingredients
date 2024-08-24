<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CollapsibleContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {collapsibleContext} from './context.svelte.js';

  let {children, ...props}: CollapsibleContentProps = $props();

  let context = collapsibleContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
