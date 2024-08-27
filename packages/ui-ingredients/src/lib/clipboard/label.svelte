<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ClipboardLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardLabelProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
