<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface PopoverTitleProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePopoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverTitleProps = $props();

  let context = usePopoverContext();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
