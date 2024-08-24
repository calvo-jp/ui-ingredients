<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverContentProps = $props();

  let context = popoverContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
