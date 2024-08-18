<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ClipboardInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardInputProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.api.getInputProps()));
</script>

<input {...attrs} />
