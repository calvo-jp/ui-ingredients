<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {...props}: ComboboxInputProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.api.getInputProps()));
</script>

<input {...attrs} />
