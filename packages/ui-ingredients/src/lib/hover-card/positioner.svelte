<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardPositionerProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardPositionerProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
