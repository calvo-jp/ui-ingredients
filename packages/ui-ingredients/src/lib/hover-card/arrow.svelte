<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface HoverCardArrowProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
