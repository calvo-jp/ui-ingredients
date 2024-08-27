<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverPositionerProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
