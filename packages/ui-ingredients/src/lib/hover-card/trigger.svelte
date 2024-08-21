<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardTriggerProps extends HtmlIngredientProps<'a'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardTriggerProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<a {...attrs}>
  {@render children?.()}
</a>
