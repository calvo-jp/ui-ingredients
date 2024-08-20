<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface NumberInputInputProps extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {...props}: NumberInputInputProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
