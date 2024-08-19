<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ClipboardIndicatorProps
    extends Assign<SvelteHTMLElements['span'], Partial<IndicatorProps>> {}
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
