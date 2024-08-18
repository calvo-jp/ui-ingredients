<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PinInputHiddenInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePinInputContext} from './context.svelte.js';

  let {...props}: PinInputHiddenInputProps = $props();

  let context = usePinInputContext();

  let attrs = $derived(mergeProps(props, context.api.getHiddenInputProps()));
</script>

<input {...attrs} />
