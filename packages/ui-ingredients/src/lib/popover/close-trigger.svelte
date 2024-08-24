<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverCloseTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverCloseTriggerProps = $props();

  let context = popoverContext.get();

  let attrs = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
