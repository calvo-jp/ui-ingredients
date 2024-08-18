<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ClipboardLabelProps extends Assign<SvelteHTMLElements['label'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardLabelProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.api.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
