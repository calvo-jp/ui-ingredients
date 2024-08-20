<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface PopoverDescriptionProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePopoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverDescriptionProps = $props();

  let context = usePopoverContext();

  let attrs = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
