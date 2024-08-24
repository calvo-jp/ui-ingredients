<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ClipboardTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {clipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardTriggerProps = $props();

  let context = clipboardContext.get();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
