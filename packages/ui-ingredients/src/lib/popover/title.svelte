<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverTitleProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverTitleProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
