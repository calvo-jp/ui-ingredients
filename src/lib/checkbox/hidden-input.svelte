<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface CheckboxHiddenInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCheckboxContext} from './context.svelte.js';

  let {...props}: CheckboxHiddenInputProps = $props();

  let context = useCheckboxContext();

  let attrs = $derived(mergeProps(props, context.api.getHiddenInputProps()));
</script>

<input {...attrs} />
