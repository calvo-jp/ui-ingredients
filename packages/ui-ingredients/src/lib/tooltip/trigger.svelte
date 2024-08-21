<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipTriggerProps = $props();

  let context = useTooltipContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
