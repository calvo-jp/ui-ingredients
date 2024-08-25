<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverTriggerProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
