<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardArrowTipProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowTipProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
