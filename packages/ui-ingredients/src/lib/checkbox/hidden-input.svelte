<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCheckboxContext} from './context.svelte.js';

  let {...props}: CheckboxHiddenInputProps = $props();

  let context = useCheckboxContext();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
