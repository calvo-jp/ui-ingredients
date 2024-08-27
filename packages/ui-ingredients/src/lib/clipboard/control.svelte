<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ClipboardControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardControlProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
