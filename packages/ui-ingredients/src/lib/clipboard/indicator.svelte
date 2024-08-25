<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';

  export interface ClipboardIndicatorProps
    extends Assign<HtmlProps<'span'>, Partial<IndicatorProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {clipboardContext} from './context.svelte.js';

  let {copied = false, children, ...props}: ClipboardIndicatorProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getIndicatorProps({copied})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
