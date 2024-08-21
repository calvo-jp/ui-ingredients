<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardContentProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
