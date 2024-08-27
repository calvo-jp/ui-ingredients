<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverCloseTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverCloseTriggerProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
