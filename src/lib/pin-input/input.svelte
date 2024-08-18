<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {InputProps} from '@zag-js/pin-input';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PinInputInputProps extends Assign<SvelteHTMLElements['input'], InputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePinInputContext} from './context.svelte.js';

  let {index, ...props}: PinInputInputProps = $props();

  let context = usePinInputContext();

  let attrs = $derived(mergeProps(props, context.getInputProps({index})));
</script>

<input {...attrs} />
