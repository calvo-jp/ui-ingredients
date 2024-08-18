<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ClipboardTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardTriggerProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.api.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
