<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';

  export interface ClipboardIndicatorProps
    extends Assign<SvelteHtmlProps<'span'>, Partial<IndicatorProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {copied = false, children, ...props}: ClipboardIndicatorProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps({copied})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
