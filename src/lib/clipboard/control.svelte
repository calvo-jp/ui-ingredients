<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ClipboardControlProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardControlProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.api.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
